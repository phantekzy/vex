'use client'
import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}
const ContactPage = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus(null);


        console.log('Form Submitted:', formData);

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Simulate success/error based on a condition (for demonstration)
        if (formData.email.includes('@')) {
            setSubmissionStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
            setSubmissionStatus('error');
        }

        setIsSubmitting(false);
    };

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-5xl font-extrabold text-center mb-4 text-primary">Get In Touch</h1>
            <p className="text-xl text-center text-gray-500 mb-12 max-w-2xl mx-auto">
                We'd love to hear from you! Send us a message, and we'll get back to you as soon as possible.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* 1. Contact Information */}
                <div className="lg:col-span-1 space-y-8 p-6 bg-card rounded-lg shadow-lg">
                    <h2 className="text-5xl text-center font-bold text-black mb-6">Contact Info</h2>

                    <div className="flex items-center space-x-4">
                        <Mail className="w-6 h-6 text-orange-500" />
                        <div>
                            <p className="text-gray-400">Email Us:</p>
                            <a href="mailto:support@vex.com" className="text-black hover:text-orange-500 transition">imainiginations@gmail.com</a>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Phone className="w-6 h-6 text-orange-500" />
                        <div>
                            <p className="text-gray-400">Call Us:</p>
                            <a href="tel:+1234567890" className="text-black hover:text-orange-500 transition">+213 549090087</a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-gray-400">Our Location:</p>
                            <p className="text-black">Algiers, Algeria</p>
                        </div>
                    </div>
                </div>

                {/* 2. Contact Form */}
                <div className="lg:col-span-2 p-8 bg-card rounded-lg shadow-xl">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="input-field"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="input-field"
                            />
                        </div>

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="input-field"
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="input-field resize-none"
                        />

                        {/* Submission Status Message */}
                        {submissionStatus === 'success' && (
                            <p className="text-green-500 font-semibold">
                                Thank you for your message! We will be in touch shortly.
                            </p>
                        )}
                        {submissionStatus === 'error' && (
                            <p className="text-red-500 font-semibold">
                                Submission failed. Please try again later or contact us directly.
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`py-3 px-8 rounded-lg font-semibold transition duration-300 w-full md:w-auto 
                                ${isSubmitting
                                    ? 'bg-gray-500 cursor-not-allowed'
                                    : 'bg-orange-500 hover:bg-orange-600 text-white'}`
                            }
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
/* Export section */
export default ContactPage;

