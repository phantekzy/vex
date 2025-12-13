// app/terms-of-service/page.tsx
import StaticContentLayout from "@/components/StaticContentLayout";

const TermsOfServicePage = () => {
    return (
        <StaticContentLayout title="Terms of Service">
            <p className="text-sm text-gray-500 mb-8">Last Updated: December 13, 2025</p>

            <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
                By accessing or using the Vex Tutors service (the "Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the Service. These terms apply to all visitors, users, and others who access or use the Service.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-white">2. User Accounts and Responsibilities</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
                When you create an account, you must provide accurate, complete, and current information. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. Any violation may lead to the suspension or termination of your account.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-white">3. Termination and Refunds</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
                We reserve the right to terminate or suspend your account immediately for any breach of these Terms. Refund eligibility is outlined in our specific cancellation policy, which can be found in our FAQ section.
            </p>
        </StaticContentLayout>
    );
};

export default TermsOfServicePage;
