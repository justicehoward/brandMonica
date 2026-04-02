import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TheGaze from './components/TheGaze';
import TheWay from './components/TheWay';
import Accompaniment from './components/Accompaniment';
import TwoWings from './components/TwoWings';
import Impact from './components/Impact';
import LivingThought from './components/LivingThought';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[var(--color-bg-warm)] selection:bg-[var(--color-olive-light)] selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <TheGaze />
          <TheWay />
          <Accompaniment />
          <TwoWings />
          <Impact />
          <LivingThought />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
