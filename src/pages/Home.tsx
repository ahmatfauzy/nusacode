import { Background } from "../components/ui/background";
import { NavBar } from "../components/widget/NavBar";

function Home() {
  return (
    <>
      <div className="z-[-1]">
        <Background />
      </div>
      <NavBar />
    </>
  );
}

export default Home;
