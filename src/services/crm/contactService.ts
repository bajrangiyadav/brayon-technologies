import { apiClient } from "../api/apiClient";
import { assembleLeadTrackingMetadata } from "@/utils/tracking";

export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  country?: string;
  projectType: string;
  budget?: string;
  timeline?: string;
  message: string;
  consent: boolean;
  captchaToken?: string;
}

export interface LeadPayload {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  country?: string;
  projectType: string;
  budget?: string;
  timeline?: string;
  message: string;
  consent: boolean;
  source: string;
  landingPage: string;
  referrer: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  createdAt: string;
  captchaToken?: string;
}

export interface LeadSubmissionResponse {
  success: boolean;
  leadId: string;
  message: string;
}

export async function submitLead(formData: ContactFormData): Promise<LeadSubmissionResponse> {
  const tracking = assembleLeadTrackingMetadata();

  const payload: LeadPayload = {
    name: formData.name.trim(),
    company: formData.company?.trim(),
    email: formData.email.trim().toLowerCase(),
    phone: formData.phone?.trim(),
    country: formData.country?.trim() || "India",
    projectType: formData.projectType,
    budget: formData.budget || "Not sure yet",
    timeline: formData.timeline || "Within 1 month",
    message: formData.message.trim(),
    consent: formData.consent,
    captchaToken: formData.captchaToken,
    ...tracking,
  };

  return await apiClient<LeadSubmissionResponse>("/api/leads", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
