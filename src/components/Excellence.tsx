import { motion } from 'motion/react';

export default function Excellence() {
  const stats = [
    { value: '99+', label: 'Elitnih Specijalista' },
    { value: '10+', label: 'Godina Iskustva' },
    { value: 'Top 1%', label: 'Medicinski Rang' },
    { value: '24/7', label: 'Konsijerž Pristup' },
  ];

  return (
    <section id="results" className="py-20 bg-navy border-t border-white/10 overflow-hidden px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center gap-12 md:gap-0">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center group"
          >
            <div className="text-[48px] md:text-[56px] font-bold text-teal leading-none mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500">
              {stat.value}
            </div>
            <p className="text-[13px] font-semibold text-white/60 uppercase tracking-widest">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
