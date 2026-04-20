import { motion } from 'motion/react';
import { Clock, MessageSquare, Star } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Clock size={24} />,
      title: 'Nula Čekanja',
      description: 'Vaše vreme je neprocenjivo. Pregledi počinju tačno u zakazano vreme.',
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Konsultacije Bez Žurbe',
      description: 'Minimum 45-minutni pregledi kako bismo osigurali da se čuju svi vaši problemi.',
    },
    {
      icon: <Star size={24} />,
      title: 'Elitni Specijalisti',
      description: 'Pristup pažljivo biranoj mreži globalno priznatih medicinskih stručnjaka.',
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
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-navy mb-8 leading-tight">
            Redefinisanje Standarda Nege.
          </h2>
          <p className="text-base md:text-lg text-text-main mb-16 leading-relaxed max-w-2xl mx-auto font-normal">
            U NovaCare klinici verujemo da zdravstvena zaštita treba da bude proaktivna, personalizovana i potpuno fokusirana na vas. Eliminisali smo čekaonice i užurbane sastanke, zamenivši ih utočištem isceljenja i beskompromisne medicinske izvrsnosti.
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
                <p className="text-sm text-text-main leading-relaxed px-4">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
