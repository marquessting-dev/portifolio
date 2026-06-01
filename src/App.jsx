import { useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";

export default function App() {
  const [page, setPage] = useState("home");
  const [darkMode, setDarkMode] = useState(true);

  const pageComponent = useMemo(() => {
    if (page === "projects") return <Projects />;
    return <Home onNavigate={setPage} />;
  }, [page]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen overflow-hidden bg-slate-50 text-slate-950 antialiased transition-colors duration-500 dark:bg-[#05070c] dark:text-white">
        <div className="fixed inset-0 -z-10 bg-mesh-light dark:bg-mesh-dark" />
        <Navbar
          activePage={page}
          onNavigate={setPage}
          darkMode={darkMode}
          onToggleTheme={() => setDarkMode((value) => !value)}
        />
        <main>{pageComponent}</main>
        <Footer onNavigate={setPage} />
      </div>
    </div>
  );
}
