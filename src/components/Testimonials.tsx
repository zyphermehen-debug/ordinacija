import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Aleksandar Sterling",
    role: "Generalni Direktor, Sterling Finance",
    text: "Konsultacije bez žurbe u NovaCare klinici su otkriće. Konačno osećam da se moj zdravstveni plan zasniva na mojoj biologiji, a ne na 15-minutnom terminu.",
    rating: 5
  },
  {
    name: "Dr. Elena Rosi",
    role: "Biomedicinski Istraživač",
    text: "Kao naučnik, cenim preciznost njihove dijagnostike. Koriste opremu koju većina bolnica može samo da sanja da ima u okviru klinike.",
    rating: 5
  },
  {
    name: "Marko Trne",
    role: "Profesionalni Sportista",
    text: "Oporavak i performanse su ključni za mene. Proaktivni pristup NovaCare klinike produžio je moju karijeru i poboljšao svakodnevnu vitalnost.",
    rating: 5
  },
  {
    name: "Sara Čen",
    role: "Tehnološki Direktor",
    text: "Nula čekanja ovde nije samo obećanje. Rezultate kompletnog izvršnog pregleda dobijam u rekordnom roku.",
    rating: 5
  },
  {
    name: "Julijan Vanderbilt",
    role: "Filantrop",
    text: "Nivo diskrecije i lične nege je neuporediv. Zaista se osećam kao u privatnom utočištu za upravljanje zdravljem.",
    rating: 5
  }
];

export default function Testimonials() {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-white overflow-hidden border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-4">Iskustva Pacijenata</h2>
        <p className="text-text-main">Poverenje onih koji zahtevaju apsolutno najbolje u medicinskoj izvrsnosti.</p>
      </div>

      <div className="relative flex">
        <motion.div 
          className="flex gap-6 md:gap-8 shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {duplicatedTestimonials.map((item, index) => (
            <div 
              key={index} 
              className="w-[300px] md:w-[400px] bg-bg-page p-6 md:p-8 rounded-3xl border border-border-subtle shrink-0 hover:border-teal/30 transition-colors"
            >
              <div className="flex gap-1 mb-4 text-teal">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-navy text-base md:text-lg font-medium leading-relaxed mb-6 italic">
                &ldquo;{item.text}&rdquo;
              </p>
              <div>
                <p className="font-bold text-navy">{item.name}</p>
                <p className="text-sm text-text-main">{item.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
