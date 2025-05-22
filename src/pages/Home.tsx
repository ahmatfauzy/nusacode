import { Background } from "../components/ui/background";
import { NavBar } from "../components/custom/NavBar";
import { HeroSection } from "../components/custom/HeroSection";
import { HeroWhy } from "../components/custom/HeroWhy";
import { AppleCardsCarouselDemo } from "../components/custom/AppleCardsCarouselDemo";
import Footer from "../components/custom/Footer";
import TestimonialSection from "../components/custom/Testimoni";

function Home() {
  return (
    <>
      <div className="absolute inset-0 -z-10">
        <Background />
      </div>

      <NavBar />
      <div >
        <HeroSection />
        <HeroWhy />
        <AppleCardsCarouselDemo />
        <TestimonialSection />
      </div>
      <Footer />

    </>
  );
}

export default Home;
