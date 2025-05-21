import { Background } from "../components/ui/background";
import { NavBar } from "../components/custom/NavBar";
import { HeroSection } from "../components/custom/HeroSection";

function Home() {
  return (
    <>
      <div className="absolute inset-0 -z-10">
        <Background />
      </div>

      <NavBar />
      <div >
        <HeroSection />
      </div>

    </>
  );
}

export default Home;
