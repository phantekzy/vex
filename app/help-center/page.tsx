import StaticContentLayout from "@/components/StaticContentLayout";
import Link from "next/link";

const HelpCenterPage = () => {
    return (
        <StaticContentLayout title="Help Center">
            <p className="text-xl text-center text-gray-400 mb-10">
                Find comprehensive guides on booking, payments, account management, and troubleshooting.
                If you can't find your answer, please use our <Link href="/contact" className="text-orange-500 hover:underline">Contact Page</Link>.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-white">Booking and Scheduling</h2>
            <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2 leading-relaxed pl-4">
                <li>Detailed guide to finding the perfect tutor using our filters.</li>
                <li>How to manage your bookings and reschedule a session.</li>
                <li>Information regarding time zone conversion and accuracy.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-white">Technical Requirements</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
                For a flawless lesson experience, please check that you meet the following:
            </p>
            <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2 leading-relaxed pl-4">
                <li>**Browser:** Latest versions of Chrome, Firefox, Safari, or Edge.</li>
                <li>**Connection:** Minimum 5 Mbps upload/download speed.</li>
                <li>**Equipment:** Functioning microphone (headset recommended) and webcam.</li>
            </ul>
        </StaticContentLayout>
    );
};

export default HelpCenterPage;
