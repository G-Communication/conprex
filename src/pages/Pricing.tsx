
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(true);
  
  const plans = [
    {
      name: 'Free',
      price: 0,
      features: [
        'Create up to 5 guides',
        'Basic editing tools',
        'Export as PDF',
        'Public link sharing'
      ],
      buttonText: 'Start for Free',
      highlighted: false
    },
    {
      name: 'Pro',
      price: annual ? 15 : 19,
      features: [
        'Unlimited guides',
        'Advanced editing tools',
        'Custom branding',
        'Analytics dashboard',
        'Team sharing',
        'Priority support'
      ],
      buttonText: 'Get Started',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: annual ? 39 : 49,
      features: [
        'Everything in Pro',
        'SSO integration',
        'Advanced security',
        'Dedicated support',
        'Custom integrations',
        'Onboarding training'
      ],
      buttonText: 'Contact Sales',
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Pricing Header */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Choose the plan that suits your documentation needs, from individuals to large teams.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-3 ${annual ? 'text-blue-600 font-medium' : 'text-slate-500'}`}>
                Annual Billing
              </span>
              <button
                onClick={() => setAnnual(!annual)}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    annual ? 'translate-x-1' : 'translate-x-6'
                  }`}
                />
              </button>
              <span className={`ml-3 ${!annual ? 'text-blue-600 font-medium' : 'text-slate-500'}`}>
                Monthly Billing
              </span>
            </div>
            
            <div className="text-sm text-slate-600">
              {annual && <span>Save 20% with annual billing</span>}
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan) => (
                <div 
                  key={plan.name}
                  className={`
                    rounded-lg overflow-hidden border transition-all
                    ${plan.highlighted 
                      ? 'border-blue-600 shadow-lg shadow-blue-100 relative z-10 scale-105' 
                      : 'border-slate-200'
                    }
                  `}
                >
                  {plan.highlighted && (
                    <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">${plan.price}</span>
                      {plan.price > 0 && (
                        <span className="text-slate-500">/{annual ? 'mo' : 'mo'}, billed {annual ? 'annually' : 'monthly'}</span>
                      )}
                    </div>
                    <div className="mb-6">
                      <Button 
                        className={`w-full ${plan.highlighted ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                        variant={plan.highlighted ? 'default' : 'outline'}
                      >
                        {plan.buttonText}
                      </Button>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="h-5 w-5 text-blue-600 mr-2 shrink-0" />
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Can I change plans later?</h3>
                <p className="text-slate-600">Yes! You can upgrade, downgrade, or cancel your plan at any time. If you upgrade, you'll be charged the prorated difference for the remainder of your billing cycle.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">What happens if I exceed my guide limit?</h3>
                <p className="text-slate-600">On the Free plan, you'll need to upgrade to create more guides. You'll still have access to view and edit your existing guides.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">How does team sharing work?</h3>
                <p className="text-slate-600">With the Pro and Enterprise plans, you can invite team members who will have access to view and edit guides based on permissions you set.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Do you offer refunds?</h3>
                <p className="text-slate-600">We offer a 14-day money-back guarantee. If you're not satisfied, contact us within 14 days of your purchase for a full refund.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Our team is ready to help you find the perfect plan for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">Contact Sales</Button>
              <Button>Get Started</Button>
            </div>
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

export default Pricing;
