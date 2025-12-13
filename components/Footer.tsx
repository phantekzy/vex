import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full mt-20 border-t border-border/70 bg-card/80 backdrop-blur-sm shadow-2xl shadow-black/10">
            <div className="mx-auto max-w-[1400px] px-14 pt-10 pb-8 max-sm:px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-md:gap-12">

                    <div className="space-y-4 col-span-2 md:col-span-1 max-md:col-span-2">
                        <h3 className="text-xl font-bold text-primary/90 font-bricolage">Vex AI Tutoring</h3>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Adaptive, 24/7 one-on-one help across all subjects, powered by the latest in AI learning technology.
                        </p>
                        <div className="flex space-x-4 text-foreground/80">
                            <Link href="https://x.com/themainilotfi" className="hover:text-primary transition-colors" aria-label="Visit us on Twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2 1.4-1.1 1.4-2.2 0-3.4-.2-.5-.4-1-.7-1.5 2.4-.2 4.6-1.3 6.3-3-.4 1.1-.9 2.1-1.4 3.1-2.4-.3-4.7-1.4-6.4-3.1-.2-.5-.4-1-.7-1.5 2.4-.2 4.6-1.3 6.3-3.1-1.6-1.3-3.8-2-6.1-2H2c2.2 2 4.4 4 6 6 1.7 1.7 3.9 2.8 6.1 3 1.6-1.3 2.8-3 3.4-5 .6-.8.8-1.5.9-2.3 2.5-3.2 4.1-6.7 4.1-10.4 0-1.8-.3-3.5-.8-5.1z" /></svg>
                            </Link>
                            <Link href="https://web.facebook.com/imainigination" className="hover:text-primary transition-colors" aria-label="Visit us on Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </Link>
                            <Link href="https://github.com/phantekzy" className="hover:text-primary transition-colors" aria-label="Visit us on GitHub">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3c-2 0-3.37 1.28-4.14 2.88A9.17 9.17 0 0 0 12 5.07a9.17 9.17 0 0 0-2.86-.33C8.37 4.28 7 3 5 3a5.07 5.07 0 0 0-.91 1.77A5.44 5.44 0 0 0 4 7.23c0 5.46 3.3 6.64 6.44 7A3.37 3.37 0 0 0 11 16.13V20" /></svg>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3 text-foreground">Navigation</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/tutors" className="hover:text-primary transition-colors">Tutors</Link></li>
                            <li><Link href="/my-progress" className="hover:text-primary transition-colors">Progress</Link></li>
                            <li><Link href="/subscription" className="hover:text-primary transition-colors">Subscription</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3 text-foreground">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3 text-foreground">Legal & Support</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">FAQ</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 mt-8 border-t border-border/70 text-center">
                    <p className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} Vex AI Tutoring. All rights reserved.
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-1">
                        Made by Imainigination Software
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
