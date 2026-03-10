import { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { COLORS, FONTS } from "../../constants/theme";
import { NAV_LINKS } from "../../constants/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <Motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(27,67,50,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <span
          className="text-white font-bold text-xl tracking-wider"
          style={{}}
        >
          HUMX
        </span>
        <ul className="hidden md:flex gap-6">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <a
                href="#"
                className="text-white/80 hover:text-white text-sm transition-colors duration-200"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-white/80 hover:text-white text-lg transition-colors"
          >
            <CiSearch size={20} />
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white text-lg transition-colors"
          >
            <FiUser size={20} />
          </a>
          <button
            className="text-sm px-4 py-2 rounded text-white font-medium transition-all"
            style={{ background: COLORS.GREEN_LIGHT }}
          >
            Book Now
          </button>
        </div>
      </div>
    </Motion.nav>
  );
}
