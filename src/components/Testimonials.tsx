import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alexander Sterling",
    role: "CEO, Sterling Finance",
    text: "The unhurried consultations at NovaCare are a revelation. I finally feel like my health plan is based on my biology, not a 15-minute slot.",
    rating: 5
  },
  {
    name: "Dr. Elena Rossi",
    role: "Biomedical Researcher",
    text: "As a scientist, I appreciate the precision of their diagnostics. They use equipment that most hospitals only dream of having in-house.",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    role: "Professional Athlete",
    text: "Recovery and performance are key for me. NovaCare's proactive approach has extended my career and improved my daily vitality.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Tech Executive",
    text: "Zero wait times is not just a promise here. I can be in and out with a full executive physical results in record time.",
    rating: 5
  },
  {
    name: "Julian Vanderbilt",
    role: "Philanthropist",
    text: "The level of discretion and personal care is unparalleled. It truly feels like a private sanctuary for health management.",
    rating: 5
  }
];

export default function Testimonials() {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-white overflow-hidden border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-4">Patient Experiences</h2>
        <p className="text-text-main">Trusted by those who demand the absolute best in medical excellence.</p>
      </div>

      <div className="relative flex">
        <motion.div 
          className="flex gap-8 shrink-0"
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
              className="w-[400px] bg-bg-page p-8 rounded-3xl border border-border-subtle shrink-0 hover:border-teal/30 transition-colors"
            >
              <div className="flex gap-1 mb-4 text-teal">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-navy text-lg font-medium leading-relaxed mb-6 italic">
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
