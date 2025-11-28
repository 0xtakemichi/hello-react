import { Link } from "../Link";

const i18n = {
  es: {
    title: "Acerca de",
    button: "Volver",
    description: "Esta es la página de acerca de",
  },
  en: {
    title: "About",
    button: "Back",
    description: "This is the about page",
  },
};

const useI18n = (lang) => {
  return i18n[lang] || i18n.en;
};

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? "es");
  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img src="https://placehold.co/200x200" alt="avatar" />
      </div>
      <p>{i18n.description}</p>
      <Link to="/">{i18n.button}</Link>
    </>
  );
}
