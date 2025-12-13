import React from 'react';

interface StaticContentLayoutProps {
    title: string;
    children: React.ReactNode;
}

const StaticContentLayout = ({ title, children }: StaticContentLayoutProps) => {
    return (
        <div className="container mx-auto px-4 py-16">

            {/* Page Title */}
            <h1 className="text-5xl font-extrabold text-center mb-10 text-primary">
                {title}
            </h1>

            {/* Content Area */}
            <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-2xl border border-gray-700/50">
                {children}
            </div>

        </div>
    );
};

export default StaticContentLayout;
