import { useEffect, useState } from "react";
import { EVENTS } from "./const";
import { match } from "path-to-regexp";

export function Router({
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>,
}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    // Para volver atras con navegacion del navegador
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);
    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  let routeParams = {};

  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true;

    // usando path-to-regexp
    // para poder detectar rutas con parametros (rutas dinamicas)
    // /search/:query
    const matcherUrl = match(path, { decode: decodeURIComponent });
    const matched = matcherUrl(currentPath);
    if (!matched) return false;

    // guardar los parametros de la la url que eran dinamicos
    // y que hemos extraido con path-to-regexp
    routeParams = matched.params;
    return true;
  })?.Component;

  return Page ? (
    <Page routeParams={routeParams} />
  ) : (
    <DefaultComponent routeParams={routeParams} />
  );
}
