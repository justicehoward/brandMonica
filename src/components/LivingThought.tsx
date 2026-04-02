import { useEffect } from 'react';
import Section from './Section';
import { Linkedin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function LivingThought() {
  const { t } = useLanguage();

  useEffect(() => {
    // Elfsight LinkedIn
    const elfsightScript = document.createElement('script');
    elfsightScript.src = "https://elfsightcdn.com/platform.js";
    elfsightScript.async = true;
    document.body.appendChild(elfsightScript);

    // SociableKIT Instagram
    const skScript = document.createElement('script');
    skScript.src = "https://widgets.sociablekit.com/instagram-feed/widget.js";
    skScript.defer = true;
    document.body.appendChild(skScript);

    return () => {
      if (document.body.contains(elfsightScript)) {
        document.body.removeChild(elfsightScript);
      }
      if (document.body.contains(skScript)) {
        document.body.removeChild(skScript);
      }
    };
  }, []);

  return (
    <Section id="living-thought" background="default">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-olive-deep)] mb-4">{t.livingThought.title}</h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl">
            {t.livingThought.description}
          </p>
        </div>
        <a 
          href="https://www.linkedin.com/in/m%C3%B3nica-mart%C3%ADnez-vargas-7770028/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[var(--color-olive-deep)] hover:text-[var(--color-olive-light)] font-medium transition-colors"
        >
          <Linkedin size={20} />
          <span>{t.livingThought.followLinkedIn}</span>
        </a>
      </div>

      <div className="elfsight-app-10a21b27-1aff-4883-9c86-45e1767e4564" data-elfsight-app-lazy></div>
      
      <div className="mt-16">
        <div className='sk-instagram-feed' data-embed-id='25651618'></div>
      </div>
    </Section>
  );
}
