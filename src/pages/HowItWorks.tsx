
import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">How ProcessDoc Works</h1>
            <p className="text-xl text-slate-600 mb-6 max-w-3xl mx-auto">
              Create step-by-step guides in minutes, not hours. Our easy-to-use platform helps you document processes quickly and efficiently.
            </p>
          </div>
        </section>

        {/* Step by Step Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
              <div className="order-2 md:order-1">
                <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">Step 1</div>
                <h2 className="text-3xl font-bold mb-4">Record Your Process</h2>
                <p className="text-slate-600 mb-6">
                  Simply click "Start Recording" and perform the process you want to document. 
                  Our tool automatically captures each click and action, creating screenshots 
                  and descriptions for each step.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-2">✓</div>
                    <span>Automatically captures screenshots</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-2">✓</div>
                    <span>Records clicks and actions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-2">✓</div>
                    <span>Works with any web application</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="/placeholder.svg" 
                  alt="Recording process" 
                  className="rounded-lg shadow-lg w-full" 
                />
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
              <div>
                <img 
                  src="/placeholder.svg" 
                  alt="Editing guide" 
                  className="rounded-lg shadow-lg w-full" 
                />
              </div>
              <div>
                <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">Step 2</div>
                <h2 className="text-3xl font-bold mb-4">Edit & Customize</h2>
                <p className="text-slate-600 mb-6">
                  Once recorded, you can edit your guide to add context, tips, or additional information. 
                  Customize each step to ensure your team has the perfect resource.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-2">✓</div>
                    <span>Add notes and annotations</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-2">✓</div>
                    <span>Highlight important elements</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-2">✓</div>
                    <span>Rearrange or delete steps</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">Step 3</div>
                <h2 className="text-3xl font-bold mb-4">Share & Collaborate</h2>
                <p className="text-slate-600 mb-6">
                  Share your completed guides with anyone who needs them. Export as PDF, 
                  embed on your website, or share via link. Keep your documentation up to date 
                  with collaborative editing.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-2">✓</div>
                    <span>Create shareable links</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-2">✓</div>
                    <span>Export to various formats</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-2">✓</div>
                    <span>Embed guides anywhere</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="/placeholder.svg" 
                  alt="Sharing guide" 
                  className="rounded-lg shadow-lg w-full" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of teams that use ProcessDoc to create better documentation in less time.
            </p>
            <Button size="lg" variant="secondary" className="text-blue-600 bg-white hover:bg-slate-100">
              Start Creating Guides
            </Button>
          </div>
        </section>
      </main>
      
      <footer className="bg-slate-900 text-white py-10">
        <div className="container mx-auto px-4 text-center text-sm text-slate-400">
          <p>© 2025 ProcessDoc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HowItWorks;
