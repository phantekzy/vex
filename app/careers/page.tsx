import { Briefcase, Brain, Lightbulb, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: "Careers at Vex AI Tutoring | Join Our Mission",
    description: "Build the future of adaptive education. View open positions in AI, engineering, and curriculum development.",
};

// --- Helper Components ---
const ValueInActionCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
    <div className="p-6 border border-border/70 rounded-xl shadow-md bg-background/50">
        <Icon className="w-8 h-8 text-primary mb-3" />
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
    </div>
);

const JobListingCard = ({ title, department, link }: { title: string, department: string, link: string }) => (
    <div className="flex justify-between items-center p-6 bg-card rounded-xl border border-border/70 shadow-lg hover:shadow-primary/10 transition duration-300">
        <div>
            <h4 className="text-xl font-bold text-foreground">{title}</h4>
            <p className="text-sm text-primary font-medium mt-1">{department}</p>
        </div>
        <Link
            href={link}
            className="inline-flex items-center text-primary font-semibold hover:underline"
        >
            View Details <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
    </div>
);


const CareersPage = () => {

    // Placeholder for job data (replace with API fetch later)
    const openJobs = [
        { title: "Senior LLM Engineer", department: "Artificial Intelligence", link: "#senior-llm" },
        { title: "Full Stack Developer (Next.js/Node)", department: "Product Engineering", link: "#full-stack" },
        { title: "Curriculum Specialist (STEM)", department: "Education & Content", link: "#curriculum-stem" },
    ];

    return (
        <main className="flex-grow pt-12 pb-20 px-4 md:px-8 max-w-7xl mx-auto">

            {/* 1. HERO & MISSION */}
            <section className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-4 font-bricolage tracking-tight">
                    Build the Future of Education
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
                    Join Maini Lotfi and the team at Imainigination Software Group on our mission to make world-class, personalized tutoring accessible to everyone, everywhere.
                </p>
                <div className="flex justify-center space-x-4">
                    <Link href="#open-positions" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-lg font-semibold text-white shadow-lg transition-transform hover:bg-primary/90">
                        View Open Roles
                    </Link>
                </div>
            </section>

            {/* 2. WHY VEX? (Company Culture) */}
            <section className="mb-20">
                <h2 className="text-4xl font-bold text-center text-foreground mb-12">
                    Why Work With Us?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ValueInActionCard
                        icon={Zap}
                        title="Direct Impact"
                        description="Every line of code and every curriculum decision directly influences millions of students globally, driving real educational equity."
                    />
                    <ValueInActionCard
                        icon={Briefcase}
                        title="Autonomy & Ownership"
                        description="Inspired by our founder's journey, we trust our team to take ownership. We offer flexibility and freedom to innovate."
                    />
                    <ValueInActionCard
                        icon={Brain}
                        title="AI at the Forefront"
                        description="Work with proprietary LLMs fine-tuned for pedagogy. You'll be solving cutting-edge problems in AI, education, and user experience."
                    />
                </div>
            </section>

            {/* 3. OPEN POSITIONS (Job Listings) */}
            <section id="open-positions" className="mb-20 p-10 bg-card/70 rounded-3xl shadow-xl">
                <h2 className="text-4xl font-bold text-foreground mb-10 text-center">
                    Current Open Positions
                </h2>
                <div className="max-w-4xl mx-auto space-y-6">
                    {openJobs.length > 0 ? (
                        openJobs.map(job => (
                            <JobListingCard key={job.title} {...job} />
                        ))
                    ) : (
                        <p className="text-center text-xl text-muted-foreground">
                            No open positions right now, but check back soon! Feel free to send your resume to <a href="mailto:careers@vex-ai.com" className="text-primary hover:underline">careers@vex-ai.com</a>.
                        </p>
                    )}
                </div>
            </section>

            {/* 4. BENEFITS & PERKS */}
            <section className="mb-20">
                <h2 className="text-4xl font-bold text-center text-foreground mb-12">
                    What We Offer
                </h2>
                <div className="max-w-4xl mx-auto bg-card p-8 rounded-xl shadow-lg border border-border/70">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 list-none p-0">
                        <li className="flex items-center text-lg text-foreground"><ShieldCheck className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" /> Competitive salary & equity</li>
                        <li className="flex items-center text-lg text-foreground"><Lightbulb className="w-5 h-5 text-primary/80 mr-3 flex-shrink-0" /> Dedicated professional development budget</li>
                        <li className="flex items-center text-lg text-foreground"><Briefcase className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" /> Fully remote/hybrid flexibility</li>
                        <li className="flex items-center text-lg text-foreground"><Zap className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" /> Unlimited vacation policy</li>
                        <li className="flex items-center text-lg text-foreground"><Brain className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" /> Cutting-edge AI tools and infrastructure</li>
                        <li className="flex items-center text-lg text-foreground"><ArrowRight className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" /> Direct access to the Founder & CEO</li>
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default CareersPage;
