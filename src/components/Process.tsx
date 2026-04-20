import { motion } from 'motion/react';
import { CalendarPlus, ClipboardCheck, UserPlus, HeartPulse } from 'lucide-react';

const steps = [
  {
    icon: <CalendarPlus size={32} />,
    title: '1. Request Consult',
    description: 'Book online or call our concierge. We accommodate same-day requests.',
  },
  {
    icon: <ClipboardCheck size={32} />,
    title: '2. Elite Assessment',
    description: 'Meet with top specialists for a deep-dive into your health metrics.',
  },
  {
    icon: <UserPlus size={32} />,
    title: '3. Personal Plan',
    description: 'Receive a bespoke wellness and medical roadmap tailored to you.',
  },
  {
    icon: <HeartPulse size={32} />,
    title: '4. Ongoing Care',
    description: 'Direct 24/7 access to your care team and seamless follow-ups.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-bg-page">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-navy mb-4">
            A Seamless Journey to Better Health
          </h2>
          <p className="text-text-main text-base">
            We&apos;ve removed the friction from healthcare. Our process is designed entirely around your convenience and well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-border-subtle z-0"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-white border border-border-subtle rounded-full flex items-center justify-center text-teal shadow-sm mb-6">
                {step.icon}
              </div>
              <h4 className="text-lg font-semibold tracking-tight text-navy mb-2">{step.title}</h4>
              <p className="text-sm text-text-main">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
