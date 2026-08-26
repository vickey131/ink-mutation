import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Review the Terms and Conditions governing your enquiries, consultations, bookings, and services with Ink Mutation Tattoo Studio in Bengaluru.",
};

export default function TermsConditionsPage() {
  return (
    <section className="py-24 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        {/* Page Header */}
        <div className="text-center space-y-4 max-w-lg mx-auto border-b border-border-color pb-8">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-primary font-semibold block">
            Legal Agreements
          </span>
          <h1 className="font-serif-header text-4xl font-bold text-foreground">
            Terms &amp; Conditions
          </h1>
          <div className="text-xs text-foreground/50 space-y-1">
            <p>Effective Date: 25 August 2026</p>
            <p>Last Updated: 25 August 2026</p>
          </div>
        </div>

        {/* Intro */}
        <div className="text-sm text-foreground/80 leading-relaxed space-y-4">
          <p>
            These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of{" "}
            <a href="https://www.inkmutation.com/" className="text-gold-primary hover:underline">
              https://www.inkmutation.com/
            </a>{" "}
            and your enquiries, consultations, bookings and services with Ink Mutation Tattoo Studio (&ldquo;Ink Mutation&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;).
          </p>
          <p>
            By using this website, submitting an enquiry, paying a booking deposit or confirming an appointment, you agree to these Terms. If you do not agree, please do not use the website or book our services.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10 text-sm text-foreground/80 leading-relaxed">
          {/* Studio Info */}
          <div className="space-y-4 border-l-2 border-gold-primary/30 pl-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              STUDIO INFORMATION
            </h2>
            <p>
              Ink Mutation is a private tattoo studio operated from:
              <br />
              <strong>5th Cross Road, KHB Colony</strong>
              <br />
              <strong>S.G. Palya 5th Block</strong>
              <br />
              <strong>Bengaluru, Karnataka &ndash; 560095, India</strong>
              <br />
              Phone/WhatsApp: +91 70190 00191
              <br />
              Website:{" "}
              <a href="https://www.inkmutation.com/" className="text-gold-primary hover:underline">
                https://www.inkmutation.com/
              </a>
            </p>
          </div>

          {/* Eligibility */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              ELIGIBILITY AND AGE REQUIREMENTS
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You must be legally capable of entering into a binding agreement to book our services.</li>
              <li>Ink Mutation generally provides tattoo services only to clients aged 18 years or above. A valid government-issued photo identification document may be required before the procedure.</li>
              <li>We reserve the right to refuse services to a minor even where parental or guardian consent is offered.</li>
              <li>You must provide accurate information regarding your identity, age, health, tattoo requirements and appointment details.</li>
            </ul>
          </div>

          {/* Enquiries & Consultations */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              ENQUIRIES AND CONSULTATIONS
            </h2>
            <p>Submitting an enquiry or consultation form does not guarantee:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Acceptance of the tattoo project</li>
              <li>Availability on a requested date</li>
              <li>A particular price</li>
              <li>Confirmation of an appointment</li>
              <li>Completion of a requested design</li>
            </ul>
            <p>
              Consultations may be offered without charge unless otherwise communicated. Extensive design development, repeated revisions or specialist preparation may require a separate design fee or booking deposit.
            </p>
            <p>
              Ink Mutation may decline any request that is unsafe, unlawful, discriminatory, offensive, technically unsuitable, inconsistent with the artist&rsquo;s style or likely to infringe another person&rsquo;s intellectual-property rights.
            </p>
          </div>

          {/* Confirmations & Deposits */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              APPOINTMENT CONFIRMATION AND DEPOSITS
            </h2>
            <p>An appointment is confirmed only after:</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>The studio accepts the project;</li>
              <li>The date and time are agreed upon; and</li>
              <li>The required deposit is received.</li>
            </ol>
            <p>The deposit amount and payment instructions will be communicated before confirmation.</p>
            <p>Unless otherwise stated in writing, deposits are:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Applied towards the final tattoo price;</li>
              <li>Non-refundable when the client cancels, fails to attend or does not provide adequate notice;</li>
              <li>Transferable to a rescheduled appointment only in accordance with the studio&rsquo;s rescheduling policy; and</li>
              <li>Refundable or transferable where the studio cancels and cannot provide a suitable alternative.</li>
            </ul>
            <p>Nothing in these Terms limits any non-waivable right available under applicable consumer law.</p>
          </div>

          {/* Rescheduling & Cancellations */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              RESCHEDULING, CANCELLATION AND LATE ARRIVAL
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Clients should provide at least 48 hours&rsquo; notice to request rescheduling.</li>
              <li>Where adequate notice is not provided, the deposit may be forfeited and a new deposit may be required.</li>
              <li>
                If you arrive late:
                <ul className="list-[circle] pl-5 mt-1 space-y-1">
                  <li>The appointment may be shortened;</li>
                  <li>The design may need to be adjusted;</li>
                  <li>The appointment may be rescheduled; or</li>
                  <li>The appointment may be treated as a cancellation if the remaining time is insufficient.</li>
                </ul>
              </li>
              <li>Repeated rescheduling may result in cancellation of the project.</li>
              <li>If Ink Mutation must reschedule due to illness, emergency, equipment issues or another circumstance beyond reasonable control, we will offer a reasonable alternative date. Our liability will ordinarily be limited to rescheduling the appointment or refunding the amount paid for services not provided.</li>
            </ul>
          </div>

          {/* Pricing & Payment */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              PRICING AND PAYMENT
            </h2>
            <p>Tattoo prices may depend on:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-5">
              <ul className="list-disc space-y-1">
                <li>Design complexity</li>
                <li>Size and placement</li>
                <li>Level of detail</li>
                <li>Time required</li>
              </ul>
              <ul className="list-disc space-y-1">
                <li>Custom drawing work</li>
                <li>Colour requirements</li>
                <li>Skin and placement considerations</li>
                <li>Number of sessions required</li>
              </ul>
            </div>
            <p>
              Any initial quotation based on messages, photographs or approximate measurements is an estimate unless expressly confirmed as a fixed price.
            </p>
            <p>
              The final price may change if the client changes the design, size, placement or scope of work.
            </p>
            <p>
              The outstanding balance must be paid by the completion of the appointment or session using an accepted payment method.
            </p>
          </div>

          {/* Design Approval */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              DESIGN APPROVAL
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You are responsible for carefully reviewing the final design, stencil, spelling, dates, numbers, symbols, language, size, direction and placement before tattooing begins.</li>
              <li>Once you approve the design and placement and the tattooing process has started, changes may not be possible.</li>
              <li>Ink Mutation is not responsible for an error that was clearly visible in a design, stencil or placement approved by the client.</li>
              <li>Minor adjustments may be accommodated at the artist&rsquo;s discretion. Significant changes, a new concept or repeated revisions may require additional fees or a new appointment.</li>
            </ul>
          </div>

          {/* Client-Supplied Artwork */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              CLIENT-SUPPLIED ARTWORK
            </h2>
            <p>If you provide artwork, photographs, logos, text or reference material, you confirm that:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>You own it or have permission to use it;</li>
              <li>Its use will not infringe another person&rsquo;s copyright, trademark, privacy or other rights; and</li>
              <li>You accept responsibility for claims resulting from unauthorised material you provide.</li>
            </ul>
            <p>
              Reference material may be used for inspiration. Ink Mutation may modify or reinterpret it to create an original tattoo design and avoid directly copying another tattoo artist&rsquo;s work.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              INTELLECTUAL PROPERTY
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Unless otherwise agreed in writing, all original sketches, tattoo designs, photographs, website content, branding, graphics and creative material produced by Ink Mutation remain the intellectual property of Ink Mutation or the relevant artist.</li>
              <li>Payment for a tattoo grants you the right to wear the completed tattoo on your body. It does not automatically transfer copyright in the underlying artwork.</li>
              <li>You may share photographs of your tattoo for personal, non-commercial purposes. You may not reproduce, sell, commercially license, mint, merchandise or provide the design to another artist for reproduction without written permission.</li>
            </ul>
          </div>

          {/* Health Disclosure */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              HEALTH DISCLOSURE AND CLIENT RESPONSIBILITY
            </h2>
            <p>Before the procedure, you must disclose any information that could affect your safety or healing, including:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-5">
              <ul className="list-disc space-y-1">
                <li>Allergies or skin sensitivities</li>
                <li>Skin disorders or infections</li>
                <li>Blood-borne or communicable conditions</li>
                <li>Bleeding or clotting conditions</li>
                <li>Diabetes</li>
                <li>Immune-system conditions</li>
              </ul>
              <ul className="list-disc space-y-1">
                <li>Pregnancy or breastfeeding</li>
                <li>Recent surgery or medical procedures</li>
                <li>Prescription medication</li>
                <li>Use of blood thinners</li>
                <li>History of fainting, seizures or adverse reactions</li>
                <li>Any other relevant health condition</li>
              </ul>
            </div>
            <p>
              You should consult a qualified medical professional if you are uncertain whether tattooing is appropriate for you.
            </p>
            <p>
              Ink Mutation does not provide medical advice or diagnosis. The artist may refuse or postpone a procedure where there is a reasonable health or safety concern.
            </p>
          </div>

          {/* Intoxication & Conduct */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              INTOXICATION AND CONDUCT
            </h2>
            <p>
              You must not attend an appointment under the influence of alcohol, illegal drugs or any substance that may impair judgment, consent or healing.
            </p>
            <p>The studio may refuse service and retain the deposit where a client:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Appears intoxicated;</li>
              <li>Behaves aggressively, abusively or inappropriately;</li>
              <li>Harasses the artist, staff or another client;</li>
              <li>Creates an unsafe environment;</li>
              <li>Refuses to follow hygiene or safety instructions; or</li>
              <li>Cannot provide informed consent.</li>
            </ul>
          </div>

          {/* Risks & Results */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              TATTOO RISKS AND RESULTS
            </h2>
            <p>Tattooing permanently alters the skin and involves inherent risks, including:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-5">
              <ul className="list-disc space-y-1">
                <li>Pain, swelling, redness and bleeding</li>
                <li>Infection</li>
                <li>Allergic reaction</li>
                <li>Scarring or keloids</li>
                <li>Pigment migration or ink spreading</li>
              </ul>
              <ul className="list-disc space-y-1">
                <li>Uneven healing</li>
                <li>Fading or colour variation</li>
                <li>Changes caused by ageing, weight fluctuation or sun exposure</li>
                <li>The need for touch-ups</li>
                <li>Dissatisfaction or regret</li>
              </ul>
            </div>
            <p>
              Final appearance varies according to skin type, placement, lifestyle, sun exposure, immune response and aftercare.
            </p>
            <p>
              Portfolio photographs and digital mock-ups are illustrative. Ink Mutation cannot guarantee that a tattoo will look identical on different skin or remain unchanged over time.
            </p>
          </div>

          {/* Hygiene & Safety */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              HYGIENE AND SAFETY
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ink Mutation aims to follow appropriate professional hygiene practices, including the use of single-use or properly sterilised equipment, protective barriers and suitable tattoo products.</li>
              <li>Clients must follow all studio safety instructions and avoid touching sterilised equipment or work areas.</li>
            </ul>
          </div>

          {/* Aftercare */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              AFTERCARE
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You agree to follow the written and verbal aftercare instructions provided by the artist.</li>
              <li>Improper aftercare&mdash;including scratching, picking, swimming, excessive sun exposure, unsuitable products or failure to keep the tattoo clean&mdash;may cause infection, fading or damage.</li>
              <li>Contact the studio if you have a concern about healing. Seek prompt medical attention for severe pain, spreading redness, excessive swelling, discharge, fever, breathing difficulty or another serious reaction.</li>
            </ul>
          </div>

          {/* Touch-ups */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              TOUCH-UPS
            </h2>
            <p>Any complimentary touch-up policy will be explained by the artist and may depend on:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>The tattoo style and placement;</li>
              <li>The healing period;</li>
              <li>Compliance with aftercare instructions; and</li>
              <li>The client contacting the studio within the stated timeframe.</li>
            </ul>
            <p>Complimentary touch-ups generally do not cover:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Poor or negligent aftercare;</li>
              <li>Damage caused by scratching, picking, sun exposure or swimming;</li>
              <li>Changes requested after the original design was completed;</li>
              <li>High-wear areas or placements known to fade quickly;</li>
              <li>Work performed or modified by another artist; or</li>
              <li>Requests made outside the communicated period.</li>
            </ul>
          </div>

          {/* Photography */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              PHOTOGRAPHY AND PROMOTIONAL USE
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>The studio may request permission to photograph or record the tattoo or procedure.</li>
              <li>Promotional use of identifiable photographs or videos will be subject to the consent obtained from you. Refusing promotional consent will not affect the quality of the service you receive.</li>
              <li>Where permission has been granted, Ink Mutation may use the content on its website, portfolio, social media, advertising and promotional materials.</li>
            </ul>
          </div>

          {/* Personal Property */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              PERSONAL PROPERTY
            </h2>
            <p>You are responsible for your personal belongings while visiting the studio.</p>
            <p>To the maximum extent permitted by law, Ink Mutation is not responsible for loss, theft or damage to personal property unless caused by proven negligence on our part.</p>
          </div>

          {/* Website Use */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              WEBSITE USE
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use the website for unlawful or fraudulent purposes;</li>
              <li>Attempt unauthorised access to the website or its systems;</li>
              <li>Introduce viruses, malicious code or harmful material;</li>
              <li>Scrape or copy website content without permission;</li>
              <li>Impersonate another person;</li>
              <li>Submit false, misleading or abusive information; or</li>
              <li>Interfere with the website&rsquo;s operation or security.</li>
            </ul>
            <p>We may restrict access where misuse is suspected.</p>
          </div>

          {/* Website Info */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              WEBSITE INFORMATION AND THIRD-PARTY LINKS
            </h2>
            <p>
              Website information is provided for general informational purposes. We make reasonable efforts to maintain accurate content but do not guarantee that all information will always be complete, current or error-free.
            </p>
            <p>
              The website may contain links to Google Maps, WhatsApp, Instagram, Facebook or other third-party services. We do not control and are not responsible for third-party content, availability, security or policies.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              LIMITATION OF LIABILITY
            </h2>
            <p>Nothing in these Terms excludes liability that cannot lawfully be excluded.</p>
            <p>To the maximum extent permitted by law, Ink Mutation will not be liable for indirect, incidental, special or consequential losses arising from:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use or inability to use the website;</li>
              <li>Reliance on general website information;</li>
              <li>A client&rsquo;s failure to disclose relevant information;</li>
              <li>Failure to follow preparation or aftercare instructions;</li>
              <li>Normal tattoo healing, fading or skin variation;</li>
              <li>Third-party platforms or payment services; or</li>
              <li>Circumstances outside our reasonable control.</li>
            </ul>
            <p>
              Where liability is established, our total liability will ordinarily be limited to the amount paid for the specific service giving rise to the claim, except where a greater liability is required by applicable law.
            </p>
          </div>

          {/* Indemnity */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              INDEMNITY
            </h2>
            <p>To the extent permitted by law, you agree to compensate Ink Mutation for losses or claims arising from:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Material you provide without proper rights or permission;</li>
              <li>False information supplied by you;</li>
              <li>Your unlawful use of the website;</li>
              <li>Your violation of these Terms; or</li>
              <li>Your infringement of another person&rsquo;s rights.</li>
            </ul>
            <p>This clause does not apply to losses caused by Ink Mutation&rsquo;s own unlawful conduct or negligence.</p>
          </div>

          {/* Privacy */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              PRIVACY
            </h2>
            <p>
              Personal information is handled according to Ink Mutation&rsquo;s Privacy Policy, available on the website.
            </p>
            <p>
              By submitting an enquiry or booking form, you authorise us to use your details to respond, manage your booking and provide relevant service communications.
            </p>
            <p>Promotional communications will be sent only as permitted by law and may be opted out of at any time.</p>
          </div>

          {/* Force Majeure */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              FORCE MAJEURE
            </h2>
            <p>
              Ink Mutation will not be responsible for a delay or failure caused by circumstances beyond reasonable control, including natural disasters, government restrictions, power failures, internet outages, public-health emergencies, transport disruption, equipment failure or artist illness.
            </p>
            <p>Where reasonably possible, affected appointments will be rescheduled.</p>
          </div>

          {/* Changes to Terms */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              CHANGES TO THESE TERMS
            </h2>
            <p>We may update these Terms to reflect operational, service or legal changes.</p>
            <p>
              Updated Terms will be published on the website with a revised &ldquo;Last Updated&rdquo; date. The Terms applicable to a confirmed booking will normally be those in effect when the booking was made, unless a legal or safety-related change must apply immediately.
            </p>
          </div>

          {/* Severability & No Waiver */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              SEVERABILITY &amp; NO WAIVER
            </h2>
            <p>
              If any provision is found invalid or unenforceable, the remaining provisions will continue to apply to the fullest extent permitted by law.
            </p>
            <p>
              A delay or failure by Ink Mutation to enforce a provision does not waive its right to enforce that provision later.
            </p>
          </div>

          {/* Governing Law */}
          <div className="space-y-4">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              GOVERNING LAW AND JURISDICTION
            </h2>
            <p>These Terms are governed by the laws of India.</p>
            <p>
              Subject to any mandatory consumer dispute rights, courts with jurisdiction in Bengaluru, Karnataka, will have jurisdiction over disputes arising from these Terms, the website or Ink Mutation&rsquo;s services.
            </p>
          </div>

          {/* Contact Us */}
          <div className="space-y-4 border-t border-border-color pt-8">
            <h2 className="font-serif-header text-lg font-bold text-foreground uppercase tracking-wider">
              CONTACT US
            </h2>
            <p>
              For questions, complaints or booking-related concerns, contact:
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
              Email:{" "}
              <a href="mailto:inkmutation@gmail.com" className="text-gold-primary hover:underline">
                inkmutation@gmail.com
              </a>
              <br />
              Website:{" "}
              <a href="https://www.inkmutation.com/" className="text-gold-primary hover:underline">
                https://www.inkmutation.com/
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
