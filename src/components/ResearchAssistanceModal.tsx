"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const SESSION_STORAGE_KEY = "scientisticera_research_assistance_shown";

export function ResearchAssistanceModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    researchProblem: "",
    hp_website_url: "", // Honeypot
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Auto-open on initial load once per browser session
  useEffect(() => {
    try {
      const alreadyShown = sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (!alreadyShown) {
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 1000);
        return () => clearTimeout(timer);
      }
    } catch {
      // If sessionStorage is unavailable (e.g. disabled cookies/storage)
    }
  }, []);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Prevent background scrolling when modal is active
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
    } catch {
      // Ignore sessionStorage exceptions
    }
  };

  const validate = () => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required.";
    }

    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = "Mobile Number is required.";
    } else if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/.test(formData.mobileNumber.replace(/\s+/g, ""))) {
      errors.mobileNumber = "Please enter a valid mobile number.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email Address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (formData.researchProblem.trim() && formData.researchProblem.trim().length > 3000) {
      errors.researchProblem = "Please keep your message under 3000 characters.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (serverError) {
      setServerError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/research-assistance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setServerError(data.message || "Something went wrong. Please try again.");
        setIsSubmitting(false);
        return;
      }

      setIsSuccess(true);
      setFormData({
        fullName: "",
        mobileNumber: "",
        email: "",
        researchProblem: "",
        hp_website_url: "",
      });
      setFormErrors({});

      // Mark session as shown/completed
      try {
        sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
      } catch {}
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="research-assistance-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col">
        {/* Top Accent Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close popup"
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Thank You!
              </h3>
              <p className="text-gray-600 leading-relaxed text-base max-w-sm mx-auto">
                Your request has been received. Our team will get back to you soon.
              </p>
              <div className="pt-4">
                <Button
                  type="button"
                  onClick={handleClose}
                  className="px-8 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transition-all duration-300"
                >
                  Close
                </Button>
              </div>
            </div>
          ) : (
            <>
              {/* Header Section */}
              <div className="text-center mb-6">
                <h2
                  id="research-assistance-title"
                  className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 uppercase"
                >
                  LOOKING FOR RESEARCH SUPPORT?
                </h2>
                <p className="mt-2 text-sm sm:text-base text-gray-600 leading-snug font-medium">
                  Get FREE assistance with your research, publication, thesis, IPR, projects &amp; more.
                </p>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-blue-600">
                  No consultation fee.
                </p>
              </div>

              {/* Server Error Banner */}
              {serverError && (
                <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{serverError}</span>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Honeypot field (hidden from genuine users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="hp_website_url">Do not fill this</label>
                  <input
                    type="text"
                    id="hp_website_url"
                    name="hp_website_url"
                    value={formData.hp_website_url}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full rounded-lg border bg-gray-50/50 px-3.5 py-2.5 text-sm transition focus:bg-white ${
                      formErrors.fullName ? "border-red-500 focus-visible:ring-red-400" : "border-gray-200"
                    }`}
                  />
                  {formErrors.fullName && (
                    <p className="mt-1 text-xs text-red-600">{formErrors.fullName}</p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label
                    htmlFor="mobileNumber"
                    className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1"
                  >
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="mobileNumber"
                    name="mobileNumber"
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full rounded-lg border bg-gray-50/50 px-3.5 py-2.5 text-sm transition focus:bg-white ${
                      formErrors.mobileNumber ? "border-red-500 focus-visible:ring-red-400" : "border-gray-200"
                    }`}
                  />
                  {formErrors.mobileNumber && (
                    <p className="mt-1 text-xs text-red-600">{formErrors.mobileNumber}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full rounded-lg border bg-gray-50/50 px-3.5 py-2.5 text-sm transition focus:bg-white ${
                      formErrors.email ? "border-red-500 focus-visible:ring-red-400" : "border-gray-200"
                    }`}
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-xs text-red-600">{formErrors.email}</p>
                  )}
                </div>

                {/* How can we help you? */}
                <div>
                  <label
                    htmlFor="researchProblem"
                    className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1"
                  >
                    How can we help you?
                  </label>
                  <Textarea
                    id="researchProblem"
                    name="researchProblem"
                    rows={3}
                    placeholder="Briefly describe your research problem..."
                    value={formData.researchProblem}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full rounded-lg border bg-gray-50/50 px-3.5 py-2 text-sm transition focus:bg-white resize-none ${
                      formErrors.researchProblem ? "border-red-500 focus-visible:ring-red-400" : "border-gray-200"
                    }`}
                  />
                  {formErrors.researchProblem && (
                    <p className="mt-1 text-xs text-red-600">{formErrors.researchProblem}</p>
                  )}
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 h-auto rounded-full text-sm sm:text-base font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      "GET FREE ASSISTANCE"
                    )}
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
