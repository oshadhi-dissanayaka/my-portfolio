import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* IT Field–Friendly Section Names */

  const sections = [
  { name: "Overview", id: "home" },
  { name: "Background", id: "about" },
  { name: "Technical Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];



export default function Header() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop - 120;
          const bottom = top + el.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(sec.id);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Brand / Name */}
        <a href="#home" className="text-lg font-semibold text-slate-100">
          Oshadhi{" "}
          <span className="text-cyan-400 font-medium">
            Dissanayake
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {sections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className={`relative text-sm transition ${
                active === sec.id
                  ? "text-cyan-400"
                  : "text-slate-300 hover:text-cyan-400"
              }`}
            >
              {sec.name}
              {active === sec.id && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] rounded-full bg-cyan-400" />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-200 text-xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-slate-950 border-t border-slate-800"
        >
          {sections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-4 text-sm transition ${
                active === sec.id
                  ? "text-cyan-400"
                  : "text-slate-300 hover:text-cyan-400"
              }`}
            >
              {sec.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
