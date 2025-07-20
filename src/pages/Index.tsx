
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import WorkAreas from '@/components/WorkAreas';
import VerifiedClients from '@/components/VerifiedClients';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Skills />
      <WorkAreas />
      <VerifiedClients />
      <Contact />
    </div>
  );
};

export default Index;
