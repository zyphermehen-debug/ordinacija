import { motion } from 'motion/react';
import { Stethoscope, HeartPulse, TestTube2, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Stethoscope size={32} />,
    title: 'Executive Health',
    description: 'Comprehensive, full-day physical examinations designed for busy professionals, including advanced preventative screening.',
  },
  {
    icon: <HeartPulse size={32} />,
    title: 'Advanced Cardiology',
    description: 'State-of-the-art cardiovascular screening and ongoing management by top-tier cardiologists.',
  },
  {
    icon: <TestTube2 size={32} />,
    title: 'Precision Diagnostics',
    description: 'In-house laboratories and imaging facilities providing immediate, highly accurate results without the wait.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-bg-page">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-navy mb-4">
            Comprehensive Private Healthcare
          </h2>
          <p className="text-text-main text-base">
            We provide a full spectrum of proactive and reactive medical services, tailored to your unique biology and lifestyle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-border-subtle hover:border-teal/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-bg-page rounded-2xl flex items-center justify-center text-navy group-hover:bg-teal group-hover:text-white transition-colors mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-navy mb-3">{service.title}</h3>
              <p className="text-sm text-text-main leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-teal hover:text-navy transition-colors">
                Learn more <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
