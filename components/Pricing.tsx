import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Personal Plan',
    price: 0.99,
    features: [
      'Unlimited group chats and channels',
      'Unlimited group audio and video calls',
      'To-do lists and Task boards',
      'Employee onboarding and Directory',
      'Calendar and Events',
    ]
  },
  {
    name: 'Business Plan',
    price: 14,
    features: [
      'Everything In Personal Plan',
      'White labeling and embedding',
      'Integrations with 3rd-party',
      'Unlimited group audio and video calls',
      'Top grade security',
      'SSO, 2FA and access controls',
    ]
  },
  {
    name: 'Enterprise Plan',
    price: 49,
    features: [
      'Dedicated Account Manager',
      'Directory Sync, SAML and SSO',
      'Advanced permissions',
      'US, EU & APAC data residency',
      'Custom reports & dashboards',
      'Unlimited group audio and video calls',
    ]
  }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors" id="pricing">
      <div className="max-w-7xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
        >
          <div className="text-sm font-bold uppercase tracking-wide text-slate-500 mb-4 font-display">Transparent Pricing, No Surprises</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 font-display tracking-tighter transition-colors">
            Choose The Plan <br /> That's Right For Your Team
          </h2>
          
          <div className="inline-flex items-center bg-slate-100 dark:bg-slate-800 p-1.5 rounded-full transition-colors">
            <button 
              onClick={() => setIsYearly(false)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${!isYearly ? 'bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${isYearly ? 'bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
            >
              Yearly <span className="text-[10px] bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-2 py-0.5 rounded-full uppercase tracking-wider">Save 20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-none p-8 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 flex flex-col group relative"
            >
              <div className="mb-8">
                <div className="text-slate-500 text-sm font-bold mb-2 font-display uppercase tracking-wide">{plan.name}</div>
                <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-slate-900 dark:text-white font-display tracking-tight transition-colors">
                        ${isYearly ? (plan.price * 0.8).toFixed(2) : plan.price}
                    </span>
                    <span className="text-slate-500 font-medium">/user/month</span>
                </div>
              </div>

              <button className="w-full py-4 rounded-full bg-primary-600 text-white font-bold mb-8 hover:bg-primary-700 transition-colors shadow-sm">
                Get Started
              </button>

              <div className="space-y-4 flex-1">
                <p className="text-sm font-bold text-slate-900 dark:text-white mb-4 font-display transition-colors">
                  {index === 0 ? 'Everything in Personal Plan' : index === 1 ? 'Everything in Business Plan' : 'Dedicated Account Manager'}
                </p>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 font-body transition-colors">
                    <Check size={18} className="text-primary-600 dark:text-primary-400 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}