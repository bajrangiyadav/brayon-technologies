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
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { submitLead, LeadSubmissionResponse } from '@/services/crm/contactService';
import { useAnalytics } from '@/hooks/useAnalytics';

// Zod Client-side Form Validation Schema
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(100, { message: 'Name must not exceed 100 characters.' }),
  phone: z
    .string()
    .min(10, { message: 'WhatsApp number is required.' })
    .max(30, { message: 'Phone number is too long.' }),
  company: z.string().max(120).optional(),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address.' })
    .max(120, { message: 'Email must not exceed 120 characters.' })
    .optional()
    .or(z.literal('')),
  projectType: z.string().min(1, { message: 'Please select what you need.' }),
  budget: z.string().min(1, { message: 'Please select an approximate budget.' }),
  timeline: z.string().optional(),
  message: z
    .string()
    .min(10, { message: 'Please provide at least 10 characters detailing your project.' })
    .max(3000, { message: 'Message is too long.' }),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must consent to proceed.',
  }),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

export default function ContactClient() {
  const { trackLeadSubmit, trackCTA } = useAnalytics();
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [submissionState, setSubmissionState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submissionResponse, setSubmissionResponse] = useState<LeadSubmissionResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      company: '',
      email: '',
      projectType: 'Custom Software',
      budget: '₹50K–₹1L',
      timeline: 'Within 1 Month',
      message: '',
      consent: true,
    },
    mode: 'onBlur',
  });

  const selectedProjectType = watch('projectType');
  const selectedBudget = watch('budget');
  const selectedTimeline = watch('timeline');

  const goToNextStep = async () => {
    if (currentStep === 1) {
      const valid = await trigger(['projectType']);
      if (valid) setCurrentStep(2);
    } else if (currentStep === 2) {
      const valid = await trigger(['budget', 'timeline']);
      if (valid) setCurrentStep(3);
    }
  };

  const goToPrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as 1 | 2 | 3);
    }
  };

  const onSubmit = async (data: ContactFormInputs) => {
    setSubmissionState('submitting');
    setErrorMessage(null);

    try {
      const response = await submitLead({
        name: data.name,
        email: data.email || `${data.phone.replace(/[^0-9]/g, '')}@lead.brayontech.com`,
        company: data.company,
        phone: data.phone,
        country: 'India',
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
                        href="mailto:hello@brayontech.com"
                        className="text-sm font-medium text-white hover:text-blue-400 transition-colors break-all"
                      >
                        hello@brayontech.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#0d1322]/90 border border-white/10 hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
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
                  <div className="py-10 text-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                        {submissionResponse?.leadId ? `Inquiry Reference: ${submissionResponse.leadId}` : 'Requirement Dispatched'}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        Thank You! We&apos;ve Received Your Requirements.
                      </h3>
                      <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed pt-1">
                        Solutions Architect Bajrangi Yadav will review your requirements. <span className="text-white font-semibold">24 ghante ke andar aapko preliminary scope, architecture recommendation aur estimated quote mil jayega.</span>
                      </p>
                    </div>

                    {/* What happens next box */}
                    <div className="max-w-md mx-auto p-4 rounded-2xl bg-[#080d1a] border border-white/[0.08] text-left space-y-2.5 text-xs text-slate-300">
                      <div className="font-mono text-slate-400 text-[11px] uppercase tracking-wider font-semibold">
                        Aapke Next Steps:
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-400 font-mono">1.</span>
                        <span>Auto-acknowledgement email/WhatsApp notification check karein.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-400 font-mono">2.</span>
                        <span>Founder review ke baad scope breakdown &amp; milestone proposal aayega.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-400 font-mono">3.</span>
                        <span>Agar urgent inquiry hai, toh neeche diye button se instant WhatsApp par connect ho sakte hain.</span>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                      <a
                        href="https://wa.me/917385121432?text=Hi%20Bajrangi,%20I%20just%20submitted%20my%20project%20inquiry%20via%20brayontech.com."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-lg shadow-emerald-950/50 transition-all cursor-pointer"
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
                        <span>Instant WhatsApp Follow-up</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm font-medium transition-colors cursor-pointer"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Multi-Step Progress Tracker */}
                    <div className="pb-4 border-b border-white/[0.08]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                          Step {currentStep} of 3:{' '}
                          {currentStep === 1
                            ? 'What are you building?'
                            : currentStep === 2
                            ? 'Budget & Target Timeline'
                            : 'Your Details & Project Brief'}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {currentStep === 1 ? '33%' : currentStep === 2 ? '66%' : '100%'}
                        </span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full transition-all duration-300"
                          style={{ width: currentStep === 1 ? '33%' : currentStep === 2 ? '66%' : '100%' }}
                        />
                      </div>
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
                            <a href="mailto:hello@brayontech.com" className="text-white underline">
                              hello@brayontech.com
                            </a>{' '}
                            | WhatsApp:{' '}
                            <a href="https://wa.me/917385121432" className="text-emerald-400 underline">
                              +91 73851 21432
                            </a>
                          </p>
                        </div>
                      </div>
                    )}

                    {/* STEP 1: Kya Banana Hai? */}
                    {currentStep === 1 && (
                      <div className="space-y-4 animate-in fade-in duration-200">
                        <div>
                          <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                            Step 1: Aapko kis type ka software chahiye?
                          </h4>
                          <p className="text-xs text-slate-400 mt-1">
                            Select the primary category that matches your requirements.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                          {[
                            { title: 'Website / Brand Presence', tag: 'Fast Web' },
                            { title: 'E-commerce Platform', tag: 'Online Store & B2B' },
                            { title: 'Custom Software', tag: 'Bespoke Workflows' },
                            { title: 'CRM / ERP System', tag: 'Business Backbone' },
                            { title: 'Mobile App (iOS & Android)', tag: 'Native-feel Apps' },
                            { title: 'Existing Software Upgrade / Migration', tag: 'Legacy .NET/PHP' },
                            { title: 'AI Automation & Voice Bots', tag: 'Automations' },
                            { title: 'Other Requirement', tag: 'Custom Project' },
                          ].map((item) => {
                            const isSelected = selectedProjectType === item.title;
                            return (
                              <button
                                key={item.title}
                                type="button"
                                onClick={() => setValue('projectType', item.title, { shouldValidate: true })}
                                className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                                  isSelected
                                    ? 'bg-blue-600/20 border-blue-500 text-white shadow-sm ring-1 ring-blue-500'
                                    : 'bg-[#090e1a] border-white/10 text-slate-300 hover:border-white/20 hover:text-white'
                                }`}
                              >
                                <div>
                                  <div className="text-xs font-semibold">{item.title}</div>
                                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">{item.tag}</div>
                                </div>
                                <span
                                  className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                                    isSelected ? 'border-blue-400 bg-blue-500' : 'border-white/30'
                                  }`}
                                >
                                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                                </span>
                              </button>
                            );
                          })}
                        </div>

                        <div className="pt-4">
                          <button
                            type="button"
                            onClick={goToNextStep}
                            className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                          >
                            <span>Next: Budget &amp; Timeline</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 2: Budget Range Aur Timeline */}
                    {currentStep === 2 && (
                      <div className="space-y-5 animate-in fade-in duration-200">
                        <div>
                          <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                            Step 2: Budget Range Aur Timeline
                          </h4>
                          <p className="text-xs text-slate-400 mt-1">
                            Yeh estimate se hum aapke project ke liye right architecture plan kar paate hain.
                          </p>
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                            Approximate Budget Bracket <span className="text-red-400">*</span>
                          </label>
                          <div className="grid grid-cols-2 gap-2.5">
                            {[
                              { label: '₹25K–₹50K', sub: 'Starter MVP / Website' },
                              { label: '₹50K–₹1L', sub: 'Custom Portal / E-Comm' },
                              { label: '₹1L–₹3L', sub: 'Full CRM / ERP Platform' },
                              { label: '₹3L+', sub: 'Enterprise High-Scale' },
                            ].map((b) => {
                              const isSelected = selectedBudget === b.label;
                              return (
                                <button
                                  key={b.label}
                                  type="button"
                                  onClick={() => setValue('budget', b.label, { shouldValidate: true })}
                                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                                    isSelected
                                      ? 'bg-emerald-600/20 border-emerald-500 text-white ring-1 ring-emerald-500'
                                      : 'bg-[#090e1a] border-white/10 text-slate-300 hover:border-white/20 hover:text-white'
                                  }`}
                                >
                                  <div className="font-mono font-bold text-xs">{b.label}</div>
                                  <div className="text-[10px] text-slate-400 mt-0.5">{b.sub}</div>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                            Kab tak start karna chahte hain?
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            {[
                              'Immediate (< 2 Weeks)',
                              'Within 1 Month',
                              '1–3 Months / Flexible',
                            ].map((t) => {
                              const isSelected = selectedTimeline === t;
                              return (
                                <button
                                  key={t}
                                  type="button"
                                  onClick={() => setValue('timeline', t)}
                                  className={`p-3 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${
                                    isSelected
                                      ? 'bg-blue-600/20 border-blue-500 text-white ring-1 ring-blue-500'
                                      : 'bg-[#090e1a] border-white/10 text-slate-300 hover:border-white/20 hover:text-white'
                                  }`}
                                >
                                  {t}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 pt-3">
                          <button
                            type="button"
                            onClick={goToPrevStep}
                            className="w-1/3 py-3.5 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 text-xs font-medium transition-colors cursor-pointer"
                          >
                            ← Back
                          </button>
                          <button
                            type="button"
                            onClick={goToNextStep}
                            className="w-2/3 py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                          >
                            <span>Next: Contact Details</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Naam, Phone, Email & Message */}
                    {currentStep === 3 && (
                      <div className="space-y-4 animate-in fade-in duration-200">
                        <div>
                          <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                            Step 3: Aapke Details &amp; Project Overview
                          </h4>
                          <p className="text-xs text-slate-400 mt-1">
                            Aapki inquiry direct founder &amp; senior engineer review karenge. 3 ghante mein reply.
                          </p>
                        </div>

                        {/* Name & Phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                              Aapka Naam <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="text"
                              {...register('name')}
                              placeholder="e.g. Rahul Sharma"
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
                              WhatsApp / Phone Number <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="tel"
                              {...register('phone')}
                              placeholder="e.g. +91 98765 43210"
                              className={`w-full px-4 py-3 rounded-xl bg-[#090e1a] border text-white text-sm focus:outline-none transition-colors ${
                                errors.phone
                                  ? 'border-red-500 focus:border-red-500'
                                  : 'border-white/10 focus:border-blue-500'
                              }`}
                            />
                            {errors.phone && (
                              <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
                            )}
                          </div>
                        </div>

                        {/* Company & Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                              Company / Business Name
                            </label>
                            <input
                              type="text"
                              {...register('company')}
                              placeholder="e.g. Sharma Traders"
                              className="w-full px-4 py-3 rounded-xl bg-[#090e1a] border border-white/10 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                              Email Address <span className="text-slate-500 font-normal lowercase">(optional)</span>
                            </label>
                            <input
                              type="email"
                              {...register('email')}
                              placeholder="e.g. rahul@company.com"
                              className="w-full px-4 py-3 rounded-xl bg-[#090e1a] border border-white/10 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        {/* Project Description */}
                        <div>
                          <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                            Project Ke Baare Mein Thoda Bataye <span className="text-red-400">*</span>
                          </label>
                          <textarea
                            rows={3}
                            {...register('message')}
                            placeholder="Aapka daily problem kya hai? Kounse main features chahiye? Koi reference website/app ho toh mention karein..."
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
                        <div>
                          <label className="flex items-start gap-2.5 cursor-pointer">
                            <input
                              type="checkbox"
                              {...register('consent')}
                              className="mt-0.5 rounded border-white/20 bg-slate-900 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-xs text-slate-400 leading-relaxed">
                              I agree to be contacted via WhatsApp/phone regarding this project enquiry.
                            </span>
                          </label>
                          {errors.consent && (
                            <p className="mt-1 text-xs text-red-400">{errors.consent.message}</p>
                          )}
                        </div>

                        {/* Submit Action */}
                        <div className="flex items-center gap-3 pt-2">
                          <button
                            type="button"
                            onClick={goToPrevStep}
                            className="w-1/3 py-3.5 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 text-xs font-medium transition-colors cursor-pointer"
                          >
                            ← Back
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-2/3 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition-all cursor-pointer"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                <span>Sending Enquiry...</span>
                              </>
                            ) : (
                              <>
                                <Send className="w-4 h-4" />
                                <span>Send Project Enquiry</span>
                                <ArrowRight className="w-4 h-4" />
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )}
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
