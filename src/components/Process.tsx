import { motion } from 'motion/react';
import { CalendarPlus, ClipboardCheck, UserPlus, HeartPulse } from 'lucide-react';

const steps = [
  {
    icon: <CalendarPlus size={32} />,
    title: '1. Zakažite',
    description: 'Zakažite online ili pozovite našeg konsijerža. Primamo zahteve istog dana.',
  },
  {
    icon: <ClipboardCheck size={32} />,
    title: '2. Elitna Procena',
    description: 'Sastanite se sa vrhunskim stručnjacima za duboko poniranje u vaše zdravlje.',
  },
  {
    icon: <UserPlus size={32} />,
    title: '3. Lični Plan',
    description: 'Dobijte prilagođeni vodič za wellness i medicinu kreiran samo za vas.',
  },
  {
    icon: <HeartPulse size={32} />,
    title: '4. Kontinuirana Nega',
    description: 'Direktan 24/7 pristup vašem timu za negu i besprekorno praćenje.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-bg-page px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-navy mb-4">
            Besprijekorno Putovanje do Boljeg Zdravlja
          </h2>
          <p className="text-text-main text-base">
            Uklonili smo prepreke u zdravstvu. Naš proces je u potpunosti dizajniran oko vaše udobnosti i dobrobiti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative items-start">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-border-subtle z-0"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-20 md:w-24 h-20 md:h-24 bg-white border border-border-subtle rounded-full flex items-center justify-center text-teal shadow-sm mb-6 group-hover:border-teal/50 transition-colors">
                {step.icon}
              </div>
              <h4 className="text-lg font-semibold tracking-tight text-navy mb-2">{step.title}</h4>
              <p className="text-sm text-text-main leading-relaxed px-4">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
