import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-[80px] overflow-hidden hero-bg">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-[60px] relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 flex flex-col items-start text-left max-w-[480px]"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal/10 text-teal text-[12px] font-semibold mb-6 border border-teal/20"
          >
            <span className="w-2.5 h-2.5 bg-teal rounded-full animate-pulse"></span>
            Private Healthcare Mastery
          </motion.div>
          <h1 className="text-[54px] md:text-[68px] font-bold tracking-[-1.5px] text-navy leading-[1.05] mb-5">
            Premium Medical Care You Can <span className="text-teal">Trust.</span>
          </h1>
          <p className="text-[18px] text-text-main mb-8 leading-[1.6] font-normal">
            Elite private healthcare with immediate access to world-renowned specialists and unhurried consultations in a sanctuary of healing.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#booking" className="w-full sm:w-auto bg-teal text-white text-sm font-semibold px-[32px] py-[16px] rounded-full transition-all text-center shadow-lg shadow-teal/20"
            >
              Get Started Now
            </motion.a>
            <a href="#process" className="w-full sm:w-auto bg-white border border-border-subtle hover:bg-gray-50 text-navy text-sm font-semibold px-[32px] py-[16px] rounded-full transition-all text-center">
              Our Clinical Approach
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2"
        >
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Luxury Medical Suite" 
              className="w-full h-[480px] object-cover rounded-[24px] image-shadow border-[4px] border-white"
              referrerPolicy="no-referrer"
            />
            {/* Cleaner Badge */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-5 -left-5 bg-navy p-5 rounded-[16px] shadow-2xl border border-white/10 flex items-center gap-4"
            >
              <div className="w-3 h-3 bg-teal rounded-full animate-pulse"></div>
              <div>
                <p className="text-[14px] font-bold text-white tracking-tight leading-none uppercase">Concierge Active</p>
                <p className="text-[11px] text-teal mt-1 font-medium italic">24/7 Priority Support</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
