import { motion } from 'motion/react';
import { Stethoscope, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal rounded-lg flex items-center justify-center text-white text-lg font-bold">
            +
          </div>
          <span className="text-xl font-bold tracking-tighter text-navy uppercase">NOVACARE</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-main">
          <a href="#services" className="hover:text-navy transition-colors">Specijalnosti</a>
          <a href="#about" className="hover:text-navy transition-colors">Naš Tim</a>
          <a href="#results" className="hover:text-navy transition-colors">Lokacije</a>
          <a href="#process" className="hover:text-navy transition-colors">Iskustvo</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:+1234567890" className="hidden lg:flex items-center gap-2 text-sm font-medium text-navy hover:text-teal transition-colors">
            <Phone size={18} />
            (555) 123-4567
          </a>
          <a 
            href="#booking" 
            className="bg-navy hover:opacity-90 text-white text-xs md:text-sm font-medium px-4 md:px-5 py-2.5 rounded-full transition-all shadow-sm"
          >
            Zakažite
          </a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-navy"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-6 py-6 space-y-4 shadow-lg text-center"
        >
          <a href="#services" className="block text-navy font-semibold text-lg" onClick={() => setIsOpen(false)}>Specijalnosti</a>
          <a href="#about" className="block text-navy font-semibold text-lg" onClick={() => setIsOpen(false)}>Naš Tim</a>
          <a href="#results" className="block text-navy font-semibold text-lg" onClick={() => setIsOpen(false)}>Lokacije</a>
          <a href="#process" className="block text-navy font-semibold text-lg" onClick={() => setIsOpen(false)}>Iskustvo</a>
          <a href="tel:+1234567890" className="flex items-center justify-center gap-2 text-navy font-medium pt-4 border-t border-gray-100">
            <Phone size={18} />
            (555) 123-4567
          </a>
        </motion.div>
      )}
    </nav>
  );
}
