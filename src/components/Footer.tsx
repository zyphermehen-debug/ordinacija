import { Stethoscope, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-subtle pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-teal rounded-lg flex items-center justify-center text-white text-lg font-bold">
                +
              </div>
              <span className="text-xl font-bold tracking-tighter text-navy uppercase">NOVACARE</span>
            </div>
            <p className="text-sm text-text-main leading-relaxed">
              Excellence in private healthcare. Combining elite medical expertise with uncompromised personal attention.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="#" className="hover:text-teal transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-teal transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-teal transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-navy uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-text-main">
              <li><a href="#" className="hover:text-navy transition-colors">Executive Health</a></li>
              <li><a href="#" className="hover:text-navy transition-colors">Advanced Cardiology</a></li>
              <li><a href="#" className="hover:text-navy transition-colors">Precision Diagnostics</a></li>
              <li><a href="#" className="hover:text-navy transition-colors">Genomic Screening</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-navy uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-text-main">
              <li><a href="#" className="hover:text-navy transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-navy transition-colors">Our Specialists</a></li>
              <li><a href="#" className="hover:text-navy transition-colors">Facility</a></li>
              <li><a href="#" className="hover:text-navy transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-navy uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-text-main">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-teal flex-shrink-0" />
                <span>123 Medical Plaza, Suite 400<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-teal flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-teal flex-shrink-0" />
                <span>concierge@novacare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-subtle pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2026 NovaCare Medical. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-navy transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-navy transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-navy transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
