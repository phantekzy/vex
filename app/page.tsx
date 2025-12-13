export const dynamic = 'force-dynamic';

import CTA from "@/components/CTA"
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TutorCard from "@/components/TutorCard"
import TutorList from "@/components/TutorList"
import { getAllTutors, getRecentSessions } from "@/lib/actions/tutor.actions"
import Link from "next/link";

const HeroSection = () => (
    <section className="flex flex-col items-center text-center gap-4 py-10 px-4 bg-transparent">
        <p className="cta-badge">Vex Personalized Learning Powered by AI</p>

        <h1 className="text-5xl mt-5 font-extrabold tracking-tighter max-w-4xl text-foreground max-sm:text-4xl">
            Unlock Your Potential with <span className="text-primary/90">Adaptive AI Tutoring</span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-3xl">
            Experience 24/7 one-on-one help across any subject. Our AI Tutors adapt to your pace and style to guarantee mastery.
        </p>

        <div className="mt-6">
            <Link
                href="/tutors/new"
            >
                <button className="btn-primary text-lg">
                    Start Free Session Now
                </button>
            </Link>
        </div>
    </section>
);

const Page = async () => {
    const tutors = await getAllTutors({ limit: 3 })
    const recentSessionsTutors = await getRecentSessions()

    return (
        <main>
            <HeroSection />
            <FeaturesSection />
            <h1 className="text-5xl font-extrabold mb-6 text-center">Popular Tutors</h1>
            <section className="home-section tutors-grid">
                {tutors.map((tutor) => (
                    <TutorCard
                        key={tutor.id}
                        {...tutor}
                        color="#f3f3f3"
                    />
                ))}
            </section>
            <TestimonialsSection />
            <section className="home-section mt-12 mb-10">
                <TutorList
                    title="Recently completed sessions"
                    tutors={recentSessionsTutors}
                    classNames="w-2/3 max-lg:w-full"
                />
                <CTA />
            </section>
        </main>
    )
}

export default Page
