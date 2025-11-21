import { useEffect, useState } from "react";
import { EVENTS } from "./const";

function navigate(href) {
  window.history.pushState({}, "", href);
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

function HomePage() {
  return (
    <>
      <h1>Inicio</h1>
      <p>Creamdo React Router desde cero</p>
      <button onClick={() => navigate("/about")}>Sobre nosotros</button>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1>Acerca de</h1>
      <div>
        <img src="https://placehold.co/200x200" alt="avatar" />
      </div>
      <p>Esta es la página de acerca de</p>
      <button onClick={() => navigate("/")}>Volver</button>
    </>
  );
}

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
