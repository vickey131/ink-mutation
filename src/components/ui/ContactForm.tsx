"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MessageSquare, PhoneCall, Send, CheckCircle2 } from "lucide-react";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxV5DiBPu7cnT8lTpeXeUeMF_gmmP3SaHS4soyBqV9bji-gTpwh8oTjiIp9TOQM_93R/exec";

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    location: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        location: formData.location.trim(),
        age: formData.age.trim(),
        gender: formData.gender.trim(),
        message: formData.message.trim(),
      };

      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8", // text/plain prevents CORS preflight while sending JSON string
        },
        body: JSON.stringify(payload),
      });

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
        location: "",
        message: "",
      });

      // Redirect user to the Thank You page
      router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("error");
      setErrorMessage("Failed to send your message. Please try again.");
    }
  };

  return (
    <div className="w-full bg-neutral-light border border-border-color p-8 md:p-10">
      {status === "success" ? (
        <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
          <CheckCircle2 className="text-gold-primary" size={60} />
          <h3 className="font-serif-header text-lg font-bold text-foreground">Message Sent</h3>
          <p className="text-sm text-foreground/70 max-w-sm">
            Thank you for reaching out. Artist will review your enquiry and get in touch with you shortly.
          </p>
          <button
            onClick={() => {
              setStatus("idle");
              setErrorMessage("");
            }}
            className="text-xs uppercase tracking-widest font-bold text-gold-primary hover:text-gold-accent mt-4 transition-smooth cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                placeholder="e.g. Tony Stark"
                className="w-full bg-background border border-border-color px-4 py-3 text-sm focus:outline-none focus:border-gold-primary transition-smooth text-foreground"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-widest font-semibold text-foreground/80 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. tonystark@avengers.com"
                className="w-full bg-background border border-border-color px-4 py-3 text-sm focus:outline-none focus:border-gold-primary transition-smooth text-foreground"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                className="w-full bg-background border border-border-color px-4 py-3 text-sm focus:outline-none focus:border-gold-primary transition-smooth text-foreground"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-xs uppercase tracking-widest font-semibold text-foreground/80 mb-2">
                Location / City
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Koramangala, Bengaluru"
                className="w-full bg-background border border-border-color px-4 py-3 text-sm focus:outline-none focus:border-gold-primary transition-smooth text-foreground"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="age" className="block text-xs uppercase tracking-widest font-semibold text-foreground/80 mb-2">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                min="18"
                max="100"
                value={formData.age}
                onChange={handleChange}
                placeholder="e.g. 24"
                className="w-full bg-background border border-border-color px-4 py-3 text-sm focus:outline-none focus:border-gold-primary transition-smooth text-foreground"
              />
            </div>

            <div>
              <label htmlFor="gender" className="block text-xs uppercase tracking-widest font-semibold text-foreground/80 mb-2">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full bg-background border border-border-color px-4 py-3 text-sm focus:outline-none focus:border-gold-primary transition-smooth text-foreground cursor-pointer"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-widest font-semibold text-foreground/80 mb-2">
              Tattoo Details / Questions
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your design idea, placement, and size preference..."
              className="w-full bg-background border border-border-color px-4 py-3 text-sm focus:outline-none focus:border-gold-primary transition-smooth resize-none text-foreground"
            />
          </div>

          {status === "error" && (
            <p className="text-xs text-red-500 font-medium">
              {errorMessage || "Please fill in all required fields."}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full flex items-center justify-center gap-2 bg-neutral-dark text-background text-xs uppercase tracking-widest font-bold py-4 transition-smooth hover:bg-gold-primary cursor-pointer"
          >
            <Send size={14} />
            <span>{status === "submitting" ? "Sending..." : "Submit Enquiry"}</span>
          </button>

          <div className="relative flex py-2 items-center">
            <div className="grow border-t border-border-color"></div>
            <span className="shrink mx-4 text-[10px] tracking-widest uppercase font-semibold text-foreground/45">Or Chat Instantly</span>
            <div className="grow border-t border-border-color"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://wa.me/917019000191?text=Hi%20Suprith,%20I'm%20interested%20in%20discussing%20a%20tattoo%20design!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-smooth text-xs uppercase tracking-widest font-bold py-3.5"
            >
              <MessageSquare size={14} />
              <span>WhatsApp Chat</span>
            </a>

            <a
              href="tel:+917019000191"
              className="flex items-center justify-center gap-2 border border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-white transition-smooth text-xs uppercase tracking-widest font-bold py-3.5"
            >
              <PhoneCall size={14} />
              <span>Call Artist</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
