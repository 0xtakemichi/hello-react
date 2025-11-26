import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import SearchPage from "./pages/Search";
import { Router } from "./Router";
import { Route } from "./Route";
import Page404 from "./pages/404";

const appRoutes = [
  {
    path: "/search/:query",
    Component: SearchPage,
  },
];

function App() {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404}>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/contact" Component={() => <h1>Contact</h1>} />
        <Route path="/search/:query" Component={SearchPage} />
      </Router>
    </main>
  );
}

export default App;
