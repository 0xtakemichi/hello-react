import { Link } from "../Link";

export default function AboutPage() {
  return (
    <>
      <h1>Acerca de</h1>
      <div>
        <img src="https://placehold.co/200x200" alt="avatar" />
      </div>
      <p>Esta es la página de acerca de</p>
      <Link to="/">Volver</Link>
    </>
  );
}
