import { Building2, Globe, HeartPulse, UserCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function TrustBar() {
  const logos = [
    { icon: <Building2 size={24} />, name: 'MEDCORP' },
    { icon: <Globe size={24} />, name: 'GLOBAL HEALTH' },
    { icon: <HeartPulse size={24} />, name: 'VITALITY' },
    { icon: <UserCircle2 size={24} />, name: 'AURA CARE' },
    { icon: <Building2 size={24} />, name: 'HEALTHPLUS' },
    { icon: <Globe size={24} />, name: 'LIFECARE' },
    { icon: <HeartPulse size={24} />, name: 'WELLNESS' },
    { icon: <UserCircle2 size={24} />, name: 'PREMIUM MED' },
  ];

  // Double the logos for seamless looping
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="border-y border-border-subtle bg-white py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-medium text-gray-400 mb-10 uppercase tracking-widest">
          Trusted by executives and families worldwide
        </p>
        
        <div className="relative flex">
          <motion.div 
            className="flex gap-12 md:gap-24 opacity-40 grayscale shrink-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex items-center gap-2 text-xl font-bold tracking-tighter text-navy shrink-0">
                {logo.icon}
                {logo.name}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
