import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { LanguageProvider } from "./components/context/LanguageContext";

function App() {
  return (
    <>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </LanguageProvider>
    </>
  );
}

export default App;
