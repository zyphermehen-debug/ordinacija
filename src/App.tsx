import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import About from './components/About';
import Excellence from './components/Excellence';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <AnimatePresence>
          <Hero key="hero" />
          <TrustBar key="trustbar" />
          <Services key="services" />
          <About key="about" />
          <Excellence key="excellence" />
          <Testimonials key="testimonials" />
          <Process key="process" />
        </AnimatePresence>
        
        {/* Booking Form Section */}
        <section id="booking" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-navy rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
              <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center text-white">
                <h2 className="text-4xl font-semibold tracking-tight mb-6">Begin Your Journey to Excellence.</h2>
                <p className="text-teal text-lg mb-8 leading-relaxed">
                  Schedule your private consultation today. Our concierge team will reach out within 2 hours to confirm your appointment.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-teal"></div>
                    <span className="text-sm opacity-80">Immediate assessment available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-teal"></div>
                    <span className="text-sm opacity-80">Full administrative discretion</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-teal"></div>
                    <span className="text-sm opacity-80">Bespoke medical coordination</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 bg-white p-12 lg:p-20">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-navy uppercase tracking-wider">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-border-subtle focus:border-teal outline-none transition-colors text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-navy uppercase tracking-wider">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-border-subtle focus:border-teal outline-none transition-colors text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-navy uppercase tracking-wider">Service of Interest</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-border-subtle focus:border-teal outline-none transition-colors text-sm bg-white">
                      <option>Executive Health Screening</option>
                      <option>Advanced Cardiology Consult</option>
                      <option>Precision Diagnostics</option>
                      <option>Other / General Interest</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-navy uppercase tracking-wider">Message (Optional)</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 rounded-xl border border-border-subtle focus:border-teal outline-none transition-colors text-sm resize-none"
                    ></textarea>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-teal text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-teal/20 transition-all"
                  >
                    Request Consultation
                  </motion.button>
                  <p className="text-[10px] text-center text-gray-400 mt-4 leading-relaxed">
                    By submitting this form, you agree to our privacy policy and the handling of your data for clinical coordination purposes.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
