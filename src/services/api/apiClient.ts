export interface ApiError {
  message: string;
  status?: number;
  fieldErrors?: Record<string, string>;
}

export class ApiException extends Error implements ApiError {
  status?: number;
  fieldErrors?: Record<string, string>;

  constructor(message: string, status?: number, fieldErrors?: Record<string, string>) {
    super(message);
    this.name = "ApiException";
    this.status = status;
    this.fieldErrors = fieldErrors;
  }
}

interface RequestOptions extends RequestInit {
  timeoutMs?: number;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export async function apiClient<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { timeoutMs = 15000, headers, ...customConfig } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);

  const normalizedEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  const url = `${BASE_URL}${normalizedEndpoint}`;

  try {
    const response = await fetch(url, {
      ...customConfig,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...headers,
      },
      signal: controller.signal,
    });

    clearTimeout(id);

    let data: unknown;
    try {
      data = await response.json();
    } catch {
      data = null;
    }

    if (!response.ok) {
      const errorData = data as { error?: string; message?: string; fieldErrors?: Record<string, string> } | null;
      const message = errorData?.error || errorData?.message || `Request failed with status ${response.status}`;
      throw new ApiException(message, response.status, errorData?.fieldErrors);
    }

    return data as T;
  } catch (err: unknown) {
    clearTimeout(id);

    if (err instanceof ApiException) {
      throw err;
    }

    if (err instanceof DOMException && err.name === "AbortError") {
      throw new ApiException("The request timed out. Please verify your connection and try again.", 408);
    }

    const message = err instanceof Error ? err.message : "Network error. Please try again.";
    throw new ApiException(message, 500);
  }
}
