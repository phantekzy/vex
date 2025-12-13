import { Quote } from 'lucide-react';
import React from 'react';

interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

const testimonialsData: Testimonial[] = [
    {
        quote: "Vex has been a game-changer for mastering medical concepts. Instead of just challenging me with tough clinical scenarios, it helped me think critically and solidify my knowledge, like having a senior resident on call 24/7!",
        author: "Hana A.",
        role: "Med Student",
    },
    {
        quote: "As a parent, I love that my son can get expert, patient help at midnight without having to pay $50 an hour. The adaptive lessons are truly effective.",
        author: "Mark P.",
        role: "Parent of 8th Grader",
    },
    {
        quote: "I was struggling with Python syntax, but the Vex AI tutor guided me through debugging my code step-by-step. It felt exactly like a real one-on-one session.",
        author: "Aisha M.",
        role: "College Engineering Student",
    },
];

const TestimonialsSection = () => {
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-foreground mb-4">
                What Our Users Are Saying
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-12">
                Real results from students and parents seeing the Vex difference.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonialsData.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                ))}
            </div>
        </section>
    );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="flex flex-col p-6 h-full border border-border/70 rounded-2xl bg-background/50 shadow-xl transition-shadow hover:shadow-primary/20 duration-300">

        <Quote className="w-8 h-8 text-primary opacity-60 mb-4" />

        <p className="text-lg text-foreground italic mb-6 flex-grow">
            "{testimonial.quote}"
        </p>

        <div className="pt-4 border-t border-border/70">
            <p className="font-bold text-foreground">{testimonial.author}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
    </div>
);

export default TestimonialsSection;
