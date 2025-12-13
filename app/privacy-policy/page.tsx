import StaticContentLayout from "@/components/StaticContentLayout";

const PrivacyPolicyPage = () => {
    return (
        <StaticContentLayout title="Privacy Policy">
            <p className="text-sm text-gray-500 mb-8">Effective Date: December 13, 2025</p>

            <h2 className="text-2xl font-bold mb-4 text-white">1. Information We Collect</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
                We collect Personal Data (e.g., email address, name, and billing information for secure processing) and Usage Data (such as session duration, pages visited, and browser type) to improve and maintain the Service. This data is collected through your interaction with the platform and third-party services like Clerk.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-white">2. How We Use Your Data</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
                Vex Tutors uses the collected data to provide and maintain the Service, manage your account, process payments, and personalize your learning experience. We do not sell your personal data to third parties.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-white">3. Data Security and Storage</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
                We employ industry-standard security measures, including encryption and secure server configuration, to protect your data. However, no method of transmission over the Internet is 100% secure. We store data for as long as your account is active or as needed to provide you with services.
            </p>
            {/* NOTE: Replace this with your full, official legal Privacy Policy document. */}
        </StaticContentLayout>
    );
};

export default PrivacyPolicyPage;
