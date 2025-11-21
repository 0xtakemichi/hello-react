import { useEffect, useState } from "react";
import { EVENTS } from "./const";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

function App() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPage(window.location.pathname);
    };
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    // Para volver atras con navegacion del navegador
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);
    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  return (
    <main>
      {currentPage == "/" && <HomePage />}
      {currentPage == "/about" && <AboutPage />}
    </main>
  );
}

export default App;
