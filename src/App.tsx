import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { LanguageProvider } from "./components/context/LanguageContext";
import About from "./pages/About";
import Articles from "./pages/Articles";
import MainLayout from "./components/custom/MainLayout";

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
        </Routes>
      </LanguageProvider>
    </>
  );
}

export default App;
