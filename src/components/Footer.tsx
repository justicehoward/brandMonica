import { useLanguage } from '../LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[var(--color-navy-deep)] text-white/40 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Mónica Martínez Vargas. {t.footer.rights}
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
          <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
        </div>
      </div>
    </footer>
  );
}
