import { motion } from 'motion/react';
import { Stethoscope, HeartPulse, TestTube2, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Stethoscope size={32} />,
    title: 'Zdravlje Direktora',
    description: 'Sveobuhvatni, celodnevni fizički pregledi dizajnirani za zauzete profesionalce, uključujući napredne preventivne skrinige.',
  },
  {
    icon: <HeartPulse size={32} />,
    title: 'Napredna Kardiologija',
    description: 'Najsavremeniji kardiovaskularni skrinig i kontinuirano upravljanje od strane vrhunskih kardiologa.',
  },
  {
    icon: <TestTube2 size={32} />,
    title: 'Precizna Dijagnostika',
    description: 'Sopstvene laboratorije i objekti za snimanje koji pružaju trenutne, visoko tačne rezultate bez čekanja.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-bg-page px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-navy mb-4">
            Sveobuhvatna Privatna Zdravstvena Zaštita
          </h2>
          <p className="text-text-main text-base">
            Pružamo pun spektar proaktivnih i reaktivnih medicinskih usluga, prilagođenih vašoj jedinstvenoj biologiji i životnom stilu.
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
                Saznajte više <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
