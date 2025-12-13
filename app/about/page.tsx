import Link from 'next/link';
import { ArrowRight, Brain, Lightbulb, ShieldCheck, Zap } from 'lucide-react';

const AboutUs = () => {
    return (
        <main className="flex-grow pt-12 pb-20 px-4 md:px-8 max-w-7xl mx-auto">

            <section className="text-center mb-20">
                <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-4 font-bricolage tracking-tight">
                    Redefining Education, One AI Session at a Time
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                    Vex AI Tutoring was founded on a simple belief: every student deserves access to personalized, world-class education, instantly and affordably. We are bridging the gap between potential and achievement.
                </p>
                <Link
                    href="/tutors"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-lg font-semibold text-white shadow-lg transition-transform hover:bg-primary/90 hover:scale-[1.02] duration-300"
                >
                    Start Your Free Session
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </section>

            <section className="mb-20">
                <h2 className="text-4xl font-bold text-center text-foreground mb-12">
                    Our Core Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    <ValueCard
                        icon={Brain}
                        title="Adaptive Learning"
                        description="Our AI engine constantly adapts its teaching style and difficulty to the unique pace and knowledge gaps of each individual student."
                    />
                    <ValueCard
                        icon={Lightbulb}
                        title="Accessibility First"
                        description="We are committed to making expert guidance available 24/7, across any device, removing traditional barriers of time and cost."
                    />
                    <ValueCard
                        icon={ShieldCheck}
                        title="Trust & Safety"
                        description="We prioritize data privacy and maintain a safe, constructive learning environment that empowers students without judgment."
                    />
                </div>
            </section>

            <section className="bg-card/70 p-10 md:p-16 rounded-3xl shadow-xl">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                    The Vex Story: Built on Resilience and Passion
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                    Vex AI Tutoring is the creation of **Maini Lotfi**, a self-taught Full Stack Developer and the CEO and Founder of **Imainigination Software Group**. After facing repeated job rejections, Lotfi channeled his passion for technology and education into building Vex alone. This platform is a testament to the belief that access to knowledge should not be gated and that innovative solutions can be forged through determination and self-reliance.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                    <Zap className="w-6 h-6 mr-2 text-primary" />
                    Technology at the Core
                </h3>
                <p className="text-base text-muted-foreground border-l-4 border-primary pl-4 py-2">
                    Our platform is powered by a proprietary Large Language Model (LLM) fine-tuned specifically for pedagogical effectiveness. It is designed to never give the direct answer, but to guide the student with Socratic questioning, ensuring deeper understanding and long-term retention. Vex is the flagship product of Imainigination Software Group.
                </p>
            </section>

            <section className="mt-20 text-center">
                <h2 className="text-4xl font-bold text-foreground mb-12">
                    Meet the Founder
                </h2>
                <div className="grid grid-cols-1 gap-10 max-w-lg mx-auto">
                    <TeamMember
                        name="Maini Lotfi"
                        title="Founder & CEO, Imainigination Software Group"
                        description="Self-taught Full Stack Developer who built Vex AI Tutoring alone after being rejected from multiple jobs, turning challenge into innovation."
                        initials="ML"
                    />
                </div>
                <p className="text-sm text-muted-foreground mt-8">
                    While the product is powered by cutting-edge technology, the vision is powered by a singular commitment to accessibility and quality education.
                </p>
            </section>

        </main>
    );
};

const ValueCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
    <div className="p-6 border border-border/70 rounded-xl shadow-lg hover:shadow-primary/20 transition duration-300">
        <Icon className="w-8 h-8 text-primary mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
    </div>
);

const TeamMember = ({ name, title, description, initials }: { name: string, title: string, description: string, initials?: string }) => (
    <div className="p-6 bg-background rounded-xl">
        <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary text-2xl font-bold">
            {initials || name.split(' ').map(n => n[0]).join('')}
        </div>
        <h4 className="text-lg font-bold text-foreground">{name}</h4>
        <p className="text-primary text-sm font-medium">{title}</p>
        <p className="text-muted-foreground text-sm mt-2">{description}</p>
    </div>
);

export default AboutUs;
