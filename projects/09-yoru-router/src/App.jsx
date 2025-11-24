import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import SearchPage from "./pages/Search";
import { Router } from "./Router";
import Page404 from "./pages/404";

const appRoutes = [
  { path: "/", Component: HomePage },
  { path: "/about", Component: AboutPage },
  { path: "/contact", Component: () => <h1>Contact</h1> },
  {
    path: "/search/:query",
    Component: SearchPage,
  },
];

function App() {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404} />
    </main>
  );
}

export default App;
