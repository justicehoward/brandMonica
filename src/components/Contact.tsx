import Section from './Section';
import Button from './Button';
import { motion } from 'motion/react';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <Section id="contact" background="olive">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-white">{t.contact.title}</h2>
          <p className="text-xl text-white/80 leading-relaxed">
            {t.contact.description}
          </p>
          
          <div className="space-y-6 pt-8">
            <div className="flex items-center gap-4 text-white/90">
              <Mail className="w-6 h-6 text-[var(--color-earth)]" />
              <a href="mailto:monicam@strategy2succeed.com" className="hover:text-white transition-colors">monicam@strategy2succeed.com</a>
            </div>
            <div className="flex items-center gap-4 text-white/90">
              <Linkedin className="w-6 h-6 text-[var(--color-earth)]" />
              <a href="https://www.linkedin.com/in/m%C3%B3nica-mart%C3%ADnez-vargas-7770028/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">/in/monicamartinezvargas</a>
            </div>
            <div className="flex items-center gap-4 text-white/90">
              <MapPin className="w-6 h-6 text-[var(--color-earth)]" />
              <span>{t.contact.location}</span>
            </div>
          </div>
        </div>

        <motion.form 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 space-y-6"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-white/80 uppercase tracking-wide">{t.contact.form.name}</label>
            <input 
              type="text" 
              id="name" 
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-earth)] transition-all"
              placeholder={t.contact.form.namePlaceholder}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-white/80 uppercase tracking-wide">{t.contact.form.email}</label>
            <input 
              type="email" 
              id="email" 
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-earth)] transition-all"
              placeholder={t.contact.form.emailPlaceholder}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-white/80 uppercase tracking-wide">{t.contact.form.message}</label>
            <textarea 
              id="message" 
              rows={4}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-earth)] transition-all resize-none"
              placeholder={t.contact.form.messagePlaceholder}
            />
          </div>

          <Button variant="secondary" className="w-full justify-center">
            {t.contact.form.submit}
          </Button>
        </motion.form>
      </div>
    </Section>
  );
}
