import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Ink Mutation Tattoo Studio collects, uses, stores, and protects your personal information when you visit our website or book our services.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-24 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        {/* Page Header */}
        <div className="text-center space-y-4 max-w-lg mx-auto border-b border-border-color pb-8">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-primary font-semibold block">
            Legal Agreements
          </span>
          <h1 className="font-serif-header text-4xl font-bold text-foreground">
            Privacy Policy
          </h1>
          <div className="text-xs text-foreground/50 space-y-1">
            <p>Effective Date: 25 August 2026</p>
            <p>Last Updated: 25 August 2026</p>
          </div>
        </div>

        {/* Intro */}
        <div className="text-sm text-foreground/80 leading-relaxed space-y-4">
          <p>
            Ink Mutation Tattoo Studio (&ldquo;Ink Mutation&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting the personal information you share with us.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, store and protect your information when you visit{" "}
            <a href="https://www.inkmutation.com/" className="text-gold-primary hover:underline">
              https://www.inkmutation.com/
            </a>
            , submit an enquiry, communicate with us, book a consultation or appointment, or receive tattoo-related services from us.
          </p>
          <p>
            By using our website or providing your information to us, you acknowledge the practices described in this Privacy Policy.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10 text-sm text-foreground/80 leading-relaxed">
          {/* Info We Collect */}
          <div className="space-y-6">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              INFORMATION WE COLLECT
            </h2>
            <p>We may collect the following categories of information:</p>

            <div className="space-y-4 pl-4 border-l border-border-color">
              <div>
                <h3 className="font-serif-header text-sm font-semibold text-foreground">a. Contact Information</h3>
                <p className="text-foreground/70">This may include your: Name, Email address, Mobile or WhatsApp number, City or location, and Preferred method of communication.</p>
              </div>

              <div>
                <h3 className="font-serif-header text-sm font-semibold text-foreground">b. Enquiry and Appointment Information</h3>
                <p className="text-foreground/70">When you enquire about or book a tattoo, we may collect: Preferred tattoo style, Tattoo concept or description, Preferred size and body placement, Reference images or artwork, Preferred appointment date, Budget or pricing-related information, and Communications exchanged with the studio.</p>
              </div>

              <div>
                <h3 className="font-serif-header text-sm font-semibold text-foreground">c. Health and Safety Information</h3>
                <p className="text-foreground/70">Before providing tattoo services, we may ask you to disclose information relevant to your safety, including allergies, skin conditions, medications, pregnancy, blood-related conditions or other medical information that may affect the tattoo procedure or healing process. We collect only the information reasonably necessary to assess whether the service can be safely provided. This information does not replace professional medical advice.</p>
              </div>

              <div>
                <h3 className="font-serif-header text-sm font-semibold text-foreground">d. Identity and Age Verification</h3>
                <p className="text-foreground/70">We may request a valid government-issued identification document to verify your identity and confirm that you meet our minimum age requirement. Unless legally required, we will not retain a complete copy of your identification document after verification.</p>
              </div>

              <div>
                <h3 className="font-serif-header text-sm font-semibold text-foreground">e. Payment and Transaction Information</h3>
                <p className="text-foreground/70">We may collect payment status, transaction reference numbers, invoices, deposit details and billing information. Where payments are processed through a third-party payment provider, the provider may collect your card, bank or UPI information directly. Ink Mutation generally does not store complete payment credentials.</p>
              </div>

              <div>
                <h3 className="font-serif-header text-sm font-semibold text-foreground">f. Photographs and Videos</h3>
                <p className="text-foreground/70">With your permission, we may take photographs or videos of: The tattooed area, The design and tattooing process, The completed tattoo, and The healing result. We will obtain separate consent before using identifiable photographs or videos for portfolios, social media, advertising or other promotional purposes.</p>
              </div>

              <div>
                <h3 className="font-serif-header text-sm font-semibold text-foreground">g. Website and Technical Information</h3>
                <p className="text-foreground/70">When you visit our website, we may automatically collect: IP address, Browser and device information, Pages visited, Date and time of access, Referring website, General location information, Cookie and analytics information, and Website interaction and performance data.</p>
              </div>
            </div>
          </div>

          {/* How We Collect */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              HOW WE COLLECT INFORMATION
            </h2>
            <p>We may collect information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Directly from you through website forms</li>
              <li>During consultations and appointments</li>
              <li>Through phone calls, WhatsApp, email or social media</li>
              <li>Through consent, health-disclosure or service forms</li>
              <li>Through payment providers</li>
              <li>Automatically through cookies and similar technologies</li>
              <li>From another person making an enquiry on your behalf, where that person is authorised to do so</li>
            </ul>
          </div>

          {/* How We Use Info */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              HOW WE USE YOUR INFORMATION
            </h2>
            <p>We may use your information to:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-5">
              <ul className="list-disc space-y-1">
                <li>Respond to enquiries</li>
                <li>Arrange consultations and appointments</li>
                <li>Understand and develop your tattoo concept</li>
                <li>Provide quotations and service information</li>
                <li>Confirm, reschedule or cancel appointments</li>
                <li>Verify your identity and age</li>
                <li>Assess health and safety considerations</li>
                <li>Process deposits and payments</li>
              </ul>
              <ul className="list-disc space-y-1">
                <li>Maintain client and transaction records</li>
                <li>Provide tattoo preparation and aftercare instructions</li>
                <li>Respond to complaints, concerns or requests</li>
                <li>Prevent fraud, misuse and unlawful activity</li>
                <li>Improve our website, services and client experience</li>
                <li>Comply with legal, tax, accounting and regulatory obligations</li>
                <li>Establish, exercise or defend legal claims</li>
                <li>Send promotional communications where you have consented to receive them</li>
              </ul>
            </div>
          </div>

          {/* Consent */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              CONSENT AND LAWFUL PROCESSING
            </h2>
            <p>
              Where required, we will ask for your free, specific and informed consent before processing your personal information.
            </p>
            <p>
              You may withdraw consent for optional processing, including promotional communications or portfolio use, by contacting us. Withdrawal will not affect processing already carried out lawfully before the withdrawal.
            </p>
            <p>
              Certain information may still be retained or processed where necessary to complete an existing appointment, maintain legally required records, protect health and safety, resolve a dispute or comply with applicable law.
            </p>
          </div>

          {/* Marketing */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              MARKETING COMMUNICATIONS
            </h2>
            <p>
              If you opt in, we may contact you through phone, email, SMS, WhatsApp or social media regarding studio updates, available appointments, offers or relevant services.
            </p>
            <p>You may opt out at any time by:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Replying &ldquo;STOP&rdquo; or &ldquo;UNSUBSCRIBE&rdquo;</li>
              <li>Using the unsubscribe option provided</li>
              <li>Calling us at +91 70190 00191</li>
              <li>Sending us a written request through the website</li>
            </ul>
            <p>Essential messages relating to an active enquiry, booking, payment or appointment may still be sent.</p>
          </div>

          {/* Cookies */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              COOKIES AND ANALYTICS
            </h2>
            <p>Our website may use cookies and similar technologies to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Enable essential website functions</li>
              <li>Remember preferences</li>
              <li>Measure website traffic</li>
              <li>Understand visitor interactions</li>
              <li>Improve website performance</li>
              <li>Support advertising or remarketing, where enabled</li>
            </ul>
            <p>
              You may control cookies through your browser settings. Blocking certain cookies may affect parts of the website. If non-essential analytics or advertising cookies are introduced, users should be provided with an appropriate consent choice where required by law.
            </p>
          </div>

          {/* Sharing Info */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              HOW WE SHARE INFORMATION
            </h2>
            <p>We do not sell or rent your personal information.</p>
            <p>We may share limited information with:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Website hosting and technology providers</li>
              <li>Cloud storage and communication providers</li>
              <li>Payment processors</li>
              <li>Accountants, auditors or professional advisers</li>
              <li>Marketing or analytics providers, where permitted</li>
              <li>Government authorities, courts or law-enforcement agencies where legally required</li>
              <li>Service providers assisting us with business operations under appropriate confidentiality obligations</li>
            </ul>
            <p>These parties may process information only for the applicable service or lawful purpose.</p>
          </div>

          {/* Third-Party Links */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              THIRD-PARTY LINKS AND SERVICES
            </h2>
            <p>
              Our website may include links to services such as Google Maps, Instagram, Facebook, WhatsApp or payment platforms. These services operate under their own privacy policies. Ink Mutation is not responsible for the privacy practices, availability or content of third-party websites or platforms.
            </p>
          </div>

          {/* Retention */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              DATA RETENTION
            </h2>
            <p>We retain personal information only for as long as reasonably necessary to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Respond to your enquiry</li>
              <li>Provide the requested services</li>
              <li>Maintain appointment and consent records</li>
              <li>Meet legal, accounting or tax requirements</li>
              <li>Resolve disputes</li>
              <li>Protect the rights and safety of the studio, clients and artists</li>
            </ul>
            <p>
              Health-related information and consent records may be retained for an appropriate period because they may be relevant to safety, complaints or legal claims. When information is no longer required, we will take reasonable steps to delete, anonymise or securely dispose of it.
            </p>
          </div>

          {/* Data Security */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              DATA SECURITY
            </h2>
            <p>
              We use reasonable administrative, technical and physical safeguards to protect information against unauthorised access, alteration, disclosure, misuse or loss. However, no website, internet transmission or electronic storage system is completely secure. We cannot guarantee absolute security.
            </p>
          </div>

          {/* Children & Minors */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              CHILDREN AND MINORS
            </h2>
            <p>
              Our tattoo services are intended only for persons who meet the studio&rsquo;s minimum age requirements. Persons under 18 should not submit booking, health or identification information without contacting the studio first. Ink Mutation reserves the right to refuse tattoo services to minors, even where parental or guardian consent is offered.
            </p>
            <p>
              If we learn that a minor&rsquo;s personal information was collected improperly, we will take reasonable steps to delete it.
            </p>
          </div>

          {/* Your Rights */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              YOUR RIGHTS
            </h2>
            <p>Subject to applicable law, you may request to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access information about the personal data we process</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Update your information</li>
              <li>Request deletion of information no longer required</li>
              <li>Withdraw consent</li>
              <li>Opt out of promotional communications</li>
              <li>Raise a grievance regarding our handling of your information</li>
            </ul>
            <p>
              We may need to verify your identity before processing a request. Certain requests may be restricted where retention or processing is required by law or necessary for legal claims, safety records or existing contractual obligations.
            </p>
          </div>

          {/* Photography Consent */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              PHOTOGRAPHY AND PORTFOLIO CONSENT
            </h2>
            <p>
              Consent to receive a tattoo does not automatically constitute consent to use your image for promotional purposes. Where photographs or videos identify you or reveal recognisable features, we will seek appropriate consent before publishing them.
            </p>
            <p>
              You may withdraw consent for future promotional use by contacting us. Withdrawal may not affect content already lawfully published, printed, shared or incorporated into completed promotional material, although we will consider reasonable removal requests.
            </p>
          </div>

          {/* Changes */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              CHANGES TO THIS POLICY
            </h2>
            <p>
              We may update this Privacy Policy to reflect changes in our services, technology or legal obligations. The revised version will be posted on this page with an updated &ldquo;Last Updated&rdquo; date. Material changes may also be communicated through other appropriate means.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 border-t border-border-color pt-8">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              CONTACT AND GRIEVANCE DETAILS
            </h2>
            <p>
              For privacy questions, requests or complaints, contact:
              <br />
              <strong>Ink Mutation Tattoo Studio</strong>
              <br />
              5th Cross Road, KHB Colony
              <br />
              S.G. Palya 5th Block
              <br />
              Bengaluru, Karnataka &ndash; 560095, India
              <br />
              Phone/WhatsApp: +91 70190 00191
              <br />
              Website:{" "}
              <a href="https://www.inkmutation.com/" className="text-gold-primary hover:underline">
                https://www.inkmutation.com/
              </a>
              <br />
              <strong>Privacy/Grievance Contact:</strong> Suprith / Ink Mutation Tattoo Studio
              <br />
              Email:{" "}
              <a href="mailto:inkmutation@gmail.com" className="text-gold-primary hover:underline">
                inkmutation@gmail.com
              </a>
            </p>
            <p className="text-xs text-foreground/50">
              We will acknowledge and address legitimate privacy requests within a reasonable period and in accordance with applicable law.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
