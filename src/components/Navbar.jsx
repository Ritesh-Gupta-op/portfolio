import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl rounded-full border border-white/20 bg-black/30 px-6 py-3 backdrop-blur-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-20"
      }`}
    >
      <ul className="flex justify-center gap-6 text-white text-sm">
        <li>
          <a href="#home" className="hover:text-red-400 transition-colors">
            HOME
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-red-400 transition-colors">
            PROJECTS
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-red-400 transition-colors">
            SKILLS
          </a>
        </li>
        <li>
          <a href="#blogs" className="hover:text-red-400 transition-colors">
            BLOGS
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-red-400 transition-colors">
            CONTACT ME
          </a>
        </li>
      </ul>
    </nav>
  );
}
