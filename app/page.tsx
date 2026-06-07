import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { Services } from '@/components/Services';
import { Industries } from '@/components/Industries';
import { Portfolio } from '@/components/Portfolio';
import { CaseStudies } from '@/components/CaseStudies';
import { Process } from '@/components/Process';
import { About } from '@/components/About';
import { CTA } from '@/components/CTA';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { AIChatWidget } from '@/components/AIChatWidget';
import { ClientScripts } from '@/components/ClientScripts';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Industries />
        <Portfolio />
        <CaseStudies />
        <Process />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <AIChatWidget />
      <ClientScripts />
    </>
  );
}
