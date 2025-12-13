import { Target, MessageCircleQuestion, Clock, BarChart } from 'lucide-react';
import React from 'react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
    <div className="flex flex-col items-center text-center p-6 border border-border/70 rounded-2xl shadow-lg bg-card/50 transition-transform hover:shadow-primary/10 hover:scale-[1.01] duration-300">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
            <Icon className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
    </div>
);

const FeaturesSection = () => {
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-foreground mb-4">
                Why Choose Vex AI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-12">
                Our platform goes beyond simple Q&A. We deliver a personalized learning experience proven to boost retention and confidence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <FeatureCard
                    icon={Target}
                    title="Targeted Mastery"
                    description="We pinpoint your exact knowledge gaps and provide custom lessons, ensuring you spend time mastering what you don't know."
                />
                <FeatureCard
                    icon={MessageCircleQuestion}
                    title="Socratic Guidance"
                    description="Our tutors use guided questioning, never giving the direct answer, to foster critical thinking and deeper understanding."
                />
                <FeatureCard
                    icon={Clock}
                    title="24/7 Availability"
                    description="Get instant, expert help anytime, anywhere. Your AI tutor is always awake and ready to teach."
                />
                <FeatureCard
                    icon={BarChart}
                    title="Real-time Progress"
                    description="Monitor your growth with detailed analytics, seeing exactly where you've improved and what's next on your learning path."
                />
            </div>
        </section>
    );
};

export default FeaturesSection;
