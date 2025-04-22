import Header from './components/Header';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Loop from './components/Loop';
import Services from './components/Services';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-primary text-text">
      <Header />
      <main className="flex-grow">
        <Hero />
        <section className="py-24 max-w-[1080px] mx-auto px-6">
          <Manifesto />
        </section>
        <section className="py-24 max-w-[1080px] mx-auto px-6">
          <Loop />
        </section>
        <section className="py-24 max-w-[1080px] mx-auto px-6">
          <Services />
        </section>
        <section className="py-24 max-w-[1080px] mx-auto px-6">
          <CTA />
        </section>
        <section className="py-24 max-w-[1080px] mx-auto px-6">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
