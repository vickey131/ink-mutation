"use client";

import React, { useState } from "react";
import { MessageSquare, PhoneCall, Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setStatus("error");
      return;
    }
    
    setStatus("submitting");
    // Simulate API Submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", phone: "", message: "" });
    }, 1200);
  };

  return (
    <div className="w-full bg-neutral-light border border-border-color p-8 md:p-10">
      {status === "success" ? (
        <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
          <CheckCircle2 className="text-gold-primary" size={60} />
          <h3 className="font-serif-header text-lg font-bold text-foreground">Message Sent</h3>
          <p className="text-sm text-foreground/70 max-w-sm">
            Thank you for reaching out. Suprith will review your inquiry and get in touch with you shortly.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="text-xs uppercase tracking-widest font-bold text-gold-primary hover:text-gold-accent mt-4 transition-smooth"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-xs uppercase tracking-widest font-semibold text-foreground/80 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Aditi Sharma"
              className="w-full bg-background border border-border-color px-4 py-3 text-sm focus:outline-none focus:border-gold-primary transition-smooth"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs uppercase tracking-widest font-semibold text-foreground/80 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210"
              className="w-full bg-background border border-border-color px-4 py-3 text-sm focus:outline-none focus:border-gold-primary transition-smooth"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-widest font-semibold text-foreground/80 mb-2">
              Message / Tattoo Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your design idea, placement, and size preference..."
              className="w-full bg-background border border-border-color px-4 py-3 text-sm focus:outline-none focus:border-gold-primary transition-smooth resize-none"
            />
          </div>

          {status === "error" && (
            <p className="text-xs text-red-500 font-medium">Please fill in all required fields.</p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full flex items-center justify-center gap-2 bg-neutral-dark text-background text-xs uppercase tracking-widest font-bold py-4 transition-smooth hover:bg-gold-primary cursor-pointer"
          >
            <Send size={14} />
            <span>{status === "submitting" ? "Sending..." : "Submit Inquiry"}</span>
          </button>

          <div className="relative flex py-2 items-center">
            <div className="grow border-t border-border-color"></div>
            <span className="shrink mx-4 text-[10px] tracking-widest uppercase font-semibold text-foreground/45">Or Chat Instantly</span>
            <div className="grow border-t border-border-color"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://wa.me/919791577511?text=Hi%20Suprith,%20I'm%20interested%20in%20discussing%20a%20tattoo%20design!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-smooth text-xs uppercase tracking-widest font-bold py-3.5"
            >
              <MessageSquare size={14} />
              <span>WhatsApp Chat</span>
            </a>

            <a
              href="tel:+919791577511"
              className="flex items-center justify-center gap-2 border border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-white transition-smooth text-xs uppercase tracking-widest font-bold py-3.5"
            >
              <PhoneCall size={14} />
              <span>Call Suprith</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
