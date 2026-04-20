import { Stethoscope, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-subtle pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-8 h-8 bg-teal rounded-lg flex items-center justify-center text-white text-lg font-bold">
                +
              </div>
              <span className="text-xl font-bold tracking-tighter text-navy uppercase">NOVACARE</span>
            </div>
            <p className="text-sm text-text-main leading-relaxed">
              Izvrsnost u privatnoj zdravstvenoj zaštiti. Kombinovanje elitne medicinske stručnosti sa beskompromisnom ličnom pažnjom.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 text-gray-400">
              <a href="#" className="hover:text-teal transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-teal transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-teal transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold text-navy uppercase tracking-widest mb-6">Usluge</h4>
            <ul className="space-y-4 text-sm text-text-main">
              <li><a href="#" className="hover:text-navy transition-colors">Zdravlje Direktora</a></li>
              <li><a href="#" className="hover:text-navy transition-colors">Napredna Kardiologija</a></li>
              <li><a href="#" className="hover:text-navy transition-colors">Precizna Dijagnostika</a></li>
              <li><a href="#" className="hover:text-navy transition-colors">Genetski Skrining</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold text-navy uppercase tracking-widest mb-6">Kompanija</h4>
            <ul className="space-y-4 text-sm text-text-main">
              <li><a href="#" className="hover:text-navy transition-colors">O Nama</a></li>
              <li><a href="#" className="hover:text-navy transition-colors">Naši Specijalisti</a></li>
              <li><a href="#" className="hover:text-navy transition-colors">Objekti</a></li>
              <li><a href="#" className="hover:text-navy transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold text-navy uppercase tracking-widest mb-6">Kontakt</h4>
            <ul className="space-y-4 text-sm text-text-main">
              <li className="flex items-start justify-center md:justify-start gap-3">
                <MapPin size={18} className="text-teal flex-shrink-0" />
                <span>Medical Plaza, Suita 400<br />Harley Street, London</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={18} className="text-teal flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail size={18} className="text-teal flex-shrink-0" />
                <span>konsijerz@novacare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-subtle pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2026 NovaCare Medical. Sva prava zadržana.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-navy transition-colors">Politika Privatnosti</a>
            <a href="#" className="hover:text-navy transition-colors">Uslovi Korišćenja</a>
            <a href="#" className="hover:text-navy transition-colors">Pristupačnost</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
