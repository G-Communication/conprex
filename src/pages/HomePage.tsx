
import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Document Processes <span className="text-blue-600">Automatically</span></h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Create step-by-step guides and SOPs in seconds, not hours. 
              Perfect for training, documentation, and knowledge sharing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="text-lg px-8 py-6">Start Creating Guides</Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">See How It Works</Button>
            </div>
            <div className="mt-16">
              <img 
                src="/placeholder.svg" 
                alt="ProcessDoc interface" 
                className="rounded-lg shadow-xl max-w-5xl mx-auto w-full" 
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">How ProcessDoc Works</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Record Your Process</h3>
                <p className="text-slate-600">Start the recorder and go through your process step by step - we'll capture everything automatically.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Edit & Customize</h3>
                <p className="text-slate-600">Add context, make adjustments, and personalize the guide to fit your organization's needs.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Share & Collaborate</h3>
                <p className="text-slate-600">Publish and share your guide with team members or embed it directly in your knowledge base.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Loved by Teams Everywhere</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-slate-600 mb-4">"ProcessDoc has cut our documentation time by 80%. What used to take hours now takes minutes."</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-blue-100 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-slate-500">Training Manager</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-slate-600 mb-4">"Our onboarding process is now seamless thanks to the easy-to-follow guides we created."</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-blue-100 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">Mark Thompson</p>
                    <p className="text-sm text-slate-500">HR Director</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-slate-600 mb-4">"The ability to create visual guides instantly has transformed how we document our processes."</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-blue-100 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">Lisa Chen</p>
                    <p className="text-sm text-slate-500">Operations Lead</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to simplify your documentation?</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Join thousands of companies using ProcessDoc to create better process documentation in less time.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">Get Started for Free</Button>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">ProcessDoc</h3>
              <p className="text-slate-400 text-sm">Making process documentation simple.</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/how-it-works">How it Works</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><a href="#">Templates</a></li>
                <li><a href="#">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Legal</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>© 2025 ProcessDoc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
