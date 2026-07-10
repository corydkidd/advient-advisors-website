import Hero from '@/components/Hero';
import PositioningBand from '@/components/PositioningBand';
import CredentialsBar from '@/components/CredentialsBar';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Industries from '@/components/Industries';
import Differentiation from '@/components/Differentiation';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <PositioningBand />
      <CredentialsBar />
      <Services />
      <CaseStudies />
      <Industries />
      <Differentiation />
      <FinalCTA />
      <Footer />
    </>
  );
}
