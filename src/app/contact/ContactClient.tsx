'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Send,
  MessageSquare,
  Clock,
  ShieldCheck,
  FileCheck,
  AlertCircle,
  Loader2,
  ArrowRight,
} from 'lucide-react';
import Container from '@/components/common/Container';
import Eyebrow from '@/components/common/Eyebrow';
import FadeUp from '@/components/animations/FadeUp';
import { submitLead, LeadSubmissionResponse } from '@/services/crm/contactService';
import { useAnalytics } from '@/hooks/useAnalytics';

// Zod Client-side Form Validation Schema
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(100, { message: 'Name must not exceed 100 characters.' }),
  email: z
    .string()
    .min(1, { message: 'Work email is required.' })
    .email({ message: 'Please enter a valid email address.' })
    .max(120, { message: 'Email must not exceed 120 characters.' }),
  company: z.string().max(120).optional(),
  phone: z.string().max(30).optional(),
  country: z.string().max(60).optional(),
  projectType: z.string().min(1, { message: 'Please select a primary project type.' }),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z
    .string()
    .min(10, { message: 'Please provide at least 10 characters detailing your requirements.' })
    .max(3000, { message: 'Message is too long (maximum 3,000 characters).' }),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must consent to our privacy policy to proceed.',
  }),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

export default function ContactClient() {
  const { trackLeadSubmit, trackCTA } = useAnalytics();
  const [submissionState, setSubmissionState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submissionResponse, setSubmissionResponse] = useState<LeadSubmissionResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      country: 'India',
      projectType: 'Full-Stack Web & SaaS',
      budget: '₹75k - ₹1.5 Lakh ($1,000 - $2,000)',
      timeline: 'Within 1 Month',
      message: '',
      consent: true,
    },
    mode: 'onBlur',
  });

  const onSubmit = async (data: ContactFormInputs) => {
    setSubmissionState('submitting');
    setErrorMessage(null);

    try {
      const response = await submitLead({
        name: data.name,
        email: data.email,
        company: data.company,
        phone: data.phone,
        country: data.country,
        projectType: data.projectType,
        budget: data.budget,
        timeline: data.timeline,
        message: data.message,
        consent: data.consent,
      });

      setSubmissionResponse(response);
      setSubmissionState('success');

      // Privacy-compliant analytics tracking (NO PII forwarded)
      trackLeadSubmit(data.projectType, data.budget || 'unspecified', !!data.timeline);
    } catch (err: unknown) {
      setSubmissionState('error');
      const msg = err instanceof Error ? err.message : 'Unable to dispatch your inquiry. Please try again or reach out via WhatsApp.';
      setErrorMessage(msg);
    }
  };

  const handleReset = () => {
    reset();
    setSubmissionState('idle');
    setSubmissionResponse(null);
    setErrorMessage(null);
  };

  return (
    <div className="flex flex-col">
      {/* Header Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#0a1128] via-[#070a12] to-[#070a12] py-16 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <Container>
          <div className="relative max-w-3xl mx-auto text-center">
            <FadeUp delay={0.05}>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-blue-400 mb-6">
                <span>Direct Engineering Engagement</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
                Start Your Project With{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                  BRAYON Technologies
                </span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
                Skip sales intermediaries. Share your architecture requirements directly with Founder & Solutions Architect Bajrangi Yadav.
              </p>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* Main Form & Information Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Access & Trust Timeline */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <Eyebrow>DIRECT CHANNELS</Eyebrow>
                <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
                  Direct Engineering Access
                </h2>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Every inquiry is reviewed directly by our technical leadership. You receive real architectural feedback, scope assessment, and availability within 3 business hours.
                </p>
              </div>

              {/* Direct Channels Cards */}
              <div className="space-y-3.5">
                <div className="p-5 rounded-xl bg-[#0d1322]/90 border border-white/10 hover:border-blue-500/40 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        Direct Founder Email
                      </div>
                      <a
                        href="mailto:bajrangiyadav330@gmail.com"
                        className="text-sm font-medium text-white hover:text-blue-400 transition-colors break-all"
                      >
                        bajrangiyadav330@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#0d1322]/90 border border-white/10 hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        Direct Phone & WhatsApp
                      </div>
                      <a
                        href="https://wa.me/917385121432?text=Hi%20Bajrangi,%20I%20would%20like%20to%20discuss%20a%20software%20project%20with%20BRAYON."
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackCTA('WhatsApp Direct', 'contact_sidebar', 'https://wa.me/917385121432')}
                        className="text-sm font-medium text-white hover:text-emerald-400 transition-colors"
                      >
                        +91 73851 21432
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#0d1322]/90 border border-white/10">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        Engineering Hub
                      </div>
                      <div className="text-sm font-medium text-white">
                        Mumbai & Pune Tech Corridor, Maharashtra, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Timeline: What Happens Next? */}
              <div className="rounded-2xl border border-white/10 bg-[#0c1220] p-6 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>What happens after submission?</span>
                </div>

                <div className="space-y-4 pt-1">
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 font-mono text-xs font-semibold shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-white">Technical Review (&lt; 3 Hours)</div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        Founder Bajrangi Yadav reviews your architecture requirements and project scope.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 font-mono text-xs font-semibold shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-white">Scope & Tech Stack Proposal (&lt; 24h)</div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        We send a concise breakdown of recommended technology, milestones, and budget tier.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 font-mono text-xs font-semibold shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-white">15-Min Technical Clarification Call</div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        Zero sales pressure. Direct engineering alignment on timelines and deliverables.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Badge List */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Our Engineering Commitments:
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Strict NDA & intellectual property protection on all shared project details.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <FileCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Transparent milestone payments (staged sprint deliverables, zero hidden fees).</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Direct repository access and weekly production staging builds.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-[#0d1322]/90 border border-white/10 p-6 sm:p-10 shadow-2xl relative backdrop-blur-md">
                {submissionState === 'success' ? (
                  <div className="py-12 text-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                        {submissionResponse?.leadId ? `Inquiry Reference: ${submissionResponse.leadId}` : 'Dispatch Verified'}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        Requirements Received
                      </h3>
                      <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed pt-2">
                        Thank you for reaching out. Solutions Architect Bajrangi Yadav has been notified and will review your technical specifications within 3 business hours.
                      </p>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                      <a
                        href="https://wa.me/917385121432?text=Hi%20Bajrangi,%20I%20just%20submitted%20a%20project%20inquiry%20via%20brayon.in."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm shadow-lg shadow-emerald-600/30 transition-all"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Instant WhatsApp Follow-up</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm font-medium transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        Request Project Scope & Architecture Consultation
                      </h3>
                      <p className="mt-1 text-xs text-slate-400 font-mono">
                        Fill out the details below to receive a response within 3 business hours.
                      </p>
                    </div>

                    {/* Error Banner */}
                    {submissionState === 'error' && (
                      <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 flex items-start gap-3 text-xs text-red-300">
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <p className="font-semibold">Submission encountered an error.</p>
                          <p>{errorMessage || 'Could not dispatch automatically. Please try again or reach us on WhatsApp.'}</p>
                          <p className="text-[11px] text-slate-400 pt-1">
                            Direct contact:{' '}
                            <a href="mailto:bajrangiyadav330@gmail.com" className="text-white underline">
                              bajrangiyadav330@gmail.com
                            </a>{' '}
                            | WhatsApp:{' '}
                            <a href="https://wa.me/917385121432" className="text-emerald-400 underline">
                              +91 73851 21432
                            </a>
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                          Your Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          {...register('name')}
                          placeholder="e.g. Rajesh Sharma"
                          className={`w-full px-4 py-3 rounded-xl bg-[#090e1a] border text-white text-sm focus:outline-none transition-colors ${
                            errors.name
                              ? 'border-red-500 focus:border-red-500'
                              : 'border-white/10 focus:border-blue-500'
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                          Work Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          {...register('email')}
                          placeholder="e.g. rajesh@company.com"
                          className={`w-full px-4 py-3 rounded-xl bg-[#090e1a] border text-white text-sm focus:outline-none transition-colors ${
                            errors.email
                              ? 'border-red-500 focus:border-red-500'
                              : 'border-white/10 focus:border-blue-500'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Company & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                          Company / Brand Name
                        </label>
                        <input
                          type="text"
                          {...register('company')}
                          placeholder="e.g. SafeGrow Trade"
                          className="w-full px-4 py-3 rounded-xl bg-[#090e1a] border border-white/10 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          {...register('phone')}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-[#090e1a] border border-white/10 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Project Type & Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                          Project Type <span className="text-red-400">*</span>
                        </label>
                        <select
                          {...register('projectType')}
                          className="w-full px-4 py-3 rounded-xl bg-[#090e1a] border border-white/10 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
                        >
                          <option value="Full-Stack Web & SaaS">Full-Stack Web & SaaS</option>
                          <option value="Enterprise Backend & REST APIs">Enterprise Backend & REST APIs</option>
                          <option value="Custom E-Commerce Engine">Custom E-Commerce Engine</option>
                          <option value="AI Automation & Voice Agents">AI Automation & Voice Agents</option>
                          <option value="Mobile App / MVP in 30 Days">Mobile App / MVP in 30 Days</option>
                          <option value="Performance & Core Web Vitals Revamp">Performance & Core Web Vitals Revamp</option>
                        </select>
                        {errors.projectType && (
                          <p className="mt-1 text-xs text-red-400">{errors.projectType.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                          Estimated Budget Bracket
                        </label>
                        <select
                          {...register('budget')}
                          className="w-full px-4 py-3 rounded-xl bg-[#090e1a] border border-white/10 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
                        >
                          <option value="₹35,000 - ₹75,000 (Starter Web)">₹35,000 - ₹75,000 (Starter Web)</option>
                          <option value="₹75k - ₹1.5 Lakh ($1,000 - $2,000)">₹75k - ₹1.5 Lakh ($1,000 - $2,000)</option>
                          <option value="₹1.5 Lakh - ₹3.5 Lakh (Startup MVP)">₹1.5 Lakh - ₹3.5 Lakh (Startup MVP)</option>
                          <option value="₹3.5 Lakh+ (Custom Enterprise / High-Scale)">₹3.5 Lakh+ (Custom Enterprise / High-Scale)</option>
                          <option value="Undecided / Need Architecture Consultation">Undecided / Need Consultation</option>
                        </select>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                        Target Timeline
                      </label>
                      <select
                        {...register('timeline')}
                        className="w-full px-4 py-3 rounded-xl bg-[#090e1a] border border-white/10 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
                      >
                        <option value="Immediate (< 2 weeks)">Immediate (&lt; 2 weeks)</option>
                        <option value="Within 1 Month">Within 1 Month</option>
                        <option value="1 - 3 Months">1 - 3 Months</option>
                        <option value="Flexible / Exploring Feasibility">Flexible / Exploring Feasibility</option>
                      </select>
                    </div>

                    {/* Message / Scope */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                        Project Overview & Architecture Requirements <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        rows={4}
                        {...register('message')}
                        placeholder="Detail what you are looking to build, any existing software/website URLs, current architectural bottlenecks, or key deliverables..."
                        className={`w-full px-4 py-3 rounded-xl bg-[#090e1a] border text-white text-sm focus:outline-none transition-colors ${
                          errors.message
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-white/10 focus:border-blue-500'
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Consent Checkbox */}
                    <div className="pt-1">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          {...register('consent')}
                          className="mt-1 rounded border-white/20 bg-slate-900 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-xs text-slate-400 leading-relaxed">
                          I agree to BRAYON&apos;s{' '}
                          <Link href="/privacy" className="text-blue-400 hover:underline">
                            Privacy Policy
                          </Link>{' '}
                          and consent to being contacted regarding this engineering consultation request.
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="mt-1 text-xs text-red-400">{errors.consent.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching Inquiry to Founder...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Inquiry for Immediate Review</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
