import { Metadata } from "next";
import ThankYouView from "@/views/ThankYouView";

export const metadata: Metadata = {
  title: "Thank You | Booking Request Received",
  description:
    "Thank you for submitting your enquiry to Ink Mutation Tattoo Studio. Artist Suprith will review your tattoo design details and get back to you shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return <ThankYouView />;
}
