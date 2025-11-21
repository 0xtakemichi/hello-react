import { Link } from "../Link";

export default function HomePage() {
  return (
    <>
      <h1>Inicio</h1>
      <p>Creando React Router desde cero</p>
      <Link to="/about">Sobre nosotros</Link>
    </>
  );
}
