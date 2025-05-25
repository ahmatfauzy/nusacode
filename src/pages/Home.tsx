import { Background } from "../components/ui/background";
import { HeroSection } from "../components/custom/HeroSection";
import { HeroWhy } from "../components/custom/HeroWhy";
import { AppleCardsCarouselDemo } from "../components/custom/AppleCardsCarouselDemo";
import TestimonialSection from "../components/custom/Testimoni";

function Home() {
  return (
    <>
      <div className="absolute inset-0 -z-10">
        <Background />
      </div>

      <div >
        <HeroSection />
        <HeroWhy />
        <AppleCardsCarouselDemo />
        <TestimonialSection />
      </div>


    </>
  );
}

export default Home;
