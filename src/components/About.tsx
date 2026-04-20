import { motion } from 'motion/react';
import { Clock, MessageSquare, Star } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Clock size={24} />,
      title: 'Zero Wait Times',
      description: 'Your time is invaluable. Appointments start exactly when scheduled.',
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Unhurried Consultations',
      description: 'Minimum 45-minute appointments to ensure all your concerns are heard.',
    },
    {
      icon: <Star size={24} />,
      title: 'Elite Specialists',
      description: 'Access to a curated network of globally recognized medical professionals.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-navy mb-8">
            Redefining the Standard of Care.
          </h2>
          <p className="text-lg text-text-main mb-16 leading-relaxed max-w-2xl mx-auto">
            At NovaCare, we believe healthcare should be proactive, personalized, and entirely focused on you. We have eliminated the waiting rooms and rushed appointments, replacing them with a sanctuary of healing and uncompromised medical excellence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center text-teal mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-navy mb-3">{item.title}</h4>
                <p className="text-sm text-text-main leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
