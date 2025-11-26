import { lazy, Suspense } from "react";

import Page404 from "./pages/404";
import SearchPage from "./pages/Search";

import { Router } from "./Router";
import { Route } from "./Route";

const LazyAboutPage = lazy(() => import("./pages/About.jsx"));
const LazyHomePage = lazy(() => import("./pages/Home.jsx"));

const appRoutes = [
  {
    path: "/search/:query",
    Component: SearchPage,
  },
];

function App() {
  return (
    <main>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path="/" Component={LazyHomePage} />
          <Route path="/about" Component={LazyAboutPage} />
          <Route path="/contact" Component={() => <h1>Contact</h1>} />
          <Route path="/search/:query" Component={SearchPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
