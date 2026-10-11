import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";

const readPage = () => window.location.pathname.replace(/\/$/, "") === "/projetos" ? "projects" : "home";
function readTheme() {
  try {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) return saved === "dark";
  } catch { /* Armazenamento indisponível. */ }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function App() {
  const [page, setPage] = useState(readPage);
  const [darkMode, setDarkMode] = useState(readTheme);
  const mainRef = useRef(null);
  const shouldFocus = useRef(false);

  useEffect(() => {
    const onPopState = () => { shouldFocus.current = true; setPage(readPage()); };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useLayoutEffect(() => {
    document.title = page === "projects" ? "Projetos | Adair Marques" : "Adair Marques | Desenvolvedor Front-end";
    if (shouldFocus.current) {
      window.scrollTo({ top: 0, behavior: "instant" });
      mainRef.current?.focus({ preventScroll: true });
      const anchor = window.location.hash.slice(1);
      if (anchor) document.getElementById(anchor)?.scrollIntoView({ behavior: "instant" });
      shouldFocus.current = false;
    }
  }, [page]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    try { localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light"); } catch { /* Preferência apenas nesta sessão. */ }
  }, [darkMode]);

  function navigate(nextPage) {
    const path = nextPage === "projects" ? "/projetos" : "/";
    if (window.location.pathname !== path || window.location.hash) window.history.pushState({}, "", path);
    shouldFocus.current = true;
    if (page === nextPage) {
      window.scrollTo({ top: 0, behavior: "instant" });
      mainRef.current?.focus({ preventScroll: true });
      shouldFocus.current = false;
    } else setPage(nextPage);
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-slate-50 text-slate-950 antialiased transition-colors duration-500 dark:bg-[#05070c] dark:text-white">
        <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
        <Navbar activePage={page} onNavigate={navigate} darkMode={darkMode} onToggleTheme={() => setDarkMode(value => !value)} />
        <main id="main-content" ref={mainRef} tabIndex={-1} className="outline-none">
          {page === "projects" ? <Projects /> : <Home onNavigate={navigate} />}
        </main>
        <Footer onNavigate={navigate} />
      </div>
    </MotionConfig>
  );
}
