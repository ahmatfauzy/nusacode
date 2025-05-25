import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { LanguageProvider } from "./components/context/LanguageContext";
import About from "./pages/About";
import Articles from "./pages/Articles";
import MainLayout from "./components/custom/MainLayout";
import Roadmap from "./pages/Roadmap";
import RoadmapDetailPage from "./pages/RoadmapDetail";

function App() {
  return (
    <>
      <LanguageProvider>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/articles"
            element={
              <MainLayout>
                <Articles />
              </MainLayout>
            }
          />
          <Route
            path="/about"
            element={
              <MainLayout>
                <About />
              </MainLayout>
            }
          />
          <Route
            path="/roadmap"
            element={
              <MainLayout>
                <Roadmap />
              </MainLayout>
            }
          />
          <Route
            path="/roadmap/:fieldId"
            element={
              <MainLayout>
                <RoadmapDetailPage />
              </MainLayout>
            }
          />
        </Routes>
      </LanguageProvider>
    </>
  );
}

export default App;
