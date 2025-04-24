import Header from './components/Header';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Loop from './components/Loop';
import Services from './components/Services';
import FilterBlock from './components/FilterBlock';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Chatbot from './components/Chatbot';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-primary text-text">
      <Header />
      <Navigation />
      <Chatbot />
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>
        <section id="manifesto" className="py-24 max-w-[1080px] mx-auto px-6 scroll-mt-24">
          <Manifesto />
        </section>
        <section id="loop" className="py-24 max-w-[1080px] mx-auto px-6 scroll-mt-24">
          <Loop />
        </section>
        <section id="services" className="py-24 max-w-[1080px] mx-auto px-6 scroll-mt-24">
          <Services />
        </section>
        <section id="filter" className="py-24 max-w-[1080px] mx-auto px-6 scroll-mt-24">
          <FilterBlock />
        </section>
        <section id="faq" className="py-24 max-w-[1080px] mx-auto px-6 scroll-mt-24">
          <FAQ />
        </section>
        <section id="testimonials" className="py-24 max-w-[1080px] mx-auto px-6 scroll-mt-24">
          <Testimonials />
        </section>
        <section id="cta" className="py-24 max-w-[1080px] mx-auto px-6 scroll-mt-24">
          <CTA />
        </section>
        <section id="contact" className="py-24 max-w-[1080px] mx-auto px-6 scroll-mt-24">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}
