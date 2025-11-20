function HomePage() {
  return (
    <>
      <h1>Inicio</h1>
      <p>Creamdo React Router desde cero</p>
      <a href="/about">Sobre nosotros</a>
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
      <a href="/">Volver</a>
    </>
  );
}

function App() {
  return (
    <main>
      <HomePage />
      <AboutPage />
    </main>
  );
}

export default App;
