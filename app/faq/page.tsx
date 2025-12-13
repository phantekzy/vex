'use client';
import StaticContentLayout from "@/components/StaticContentLayout";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqData = [
    {
        q: "What is Vex Tutors and how does it work?",
        a: "Vex Tutors is a platform that connects students with certified tutors for live, one-on-one sessions in various subjects. You browse profiles, view availability, book a time slot, and attend the interactive lesson directly via our web application."
    },
    {
        q: "How are sessions priced and what payment methods are accepted?",
        a: "Pricing is set by the individual tutor based on their experience and subject specialization, and is clearly displayed on their profile. We accept all major credit/debit cards via our secure payment processor (Stripe/Clerk's billing system)."
    },
    {
        q: "What is your cancellation and refund policy?",
        a: "Sessions must be cancelled at least 24 hours in advance to receive a full refund. Cancellations made less than 24 hours before the session may be charged a partial fee. For full details, please refer to our Terms of Service."
    },
    {
        q: "What are the technical requirements for attending a session?",
        a: "You only need a modern web browser (Chrome, Firefox, Safari, Edge), a stable internet connection (minimum 5 Mbps recommended), and a working microphone/headset for the best experience. No extra software installation is required."
    },
    {
        q: "How do I choose the best tutor for my needs?",
        a: "You can filter tutors by subject, price range, and student rating. We recommend reading through their full profile, which includes their qualifications, teaching style, and student reviews, before booking your first session."
    },
];

const FaqItem = ({ item }: { item: typeof faqData[0] }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-700">
            <button
                className="flex justify-between items-center w-full py-4 text-left font-semibold text-lg hover:text-orange-500 transition"
                onClick={() => setIsOpen(!isOpen)}
            >
                {item.q}
                {isOpen ? <ChevronUp className="w-5 h-5 text-orange-500" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <p className="pb-4 text-gray-400 leading-relaxed">
                    {item.a}
                </p>
            </div>
        </div>
    );
};

const FAQPage = () => {
    return (
        <StaticContentLayout title="Frequently Asked Questions (FAQ)">
            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <FaqItem key={index} item={item} />
                ))}
            </div>
        </StaticContentLayout>
    );
};

export default FAQPage;
