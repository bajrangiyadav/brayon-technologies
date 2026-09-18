'use client';

import React from 'react';
import Link from 'next/link';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import Container from '@/components/common/Container';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/layout/Footer';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-32">
        <Container>
          <div className="max-w-xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto text-red-400">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="font-mono text-xs uppercase tracking-widest text-red-400">
              UNEXPECTED ERROR · COMPONENT FAILURE
            </div>

            <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Something went wrong
            </h1>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              An unexpected error occurred on this page. You can try to reload or return to the homepage.
            </p>

            {process.env.NODE_ENV === 'development' && error?.message && (
              <pre className="mt-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-left text-xs text-red-300 font-mono overflow-x-auto">
                {error.message}
              </pre>
            )}

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all shadow-sm shadow-blue-600/20 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-transparent border border-white/[0.14] hover:bg-white/[0.05] text-slate-200 text-sm font-medium transition-all"
              >
                <Home className="w-4 h-4" />
                Return Home
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
