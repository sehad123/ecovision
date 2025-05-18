import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [darkMode, setDarkMode] = useState(false);

  const links = [
    { name: "Edukasi", href: "#education-video" },
    { name: "Infografis", href: "#education-infographic" },
    { name: "Aksi", href: "#actions" },
    { name: "Galeri", href: "#gallery" },
    { name: "Komitmen", href: "#commitment" },
    { name: "Quiz", href: "#quiz" },
    { name: "Tentang", href: "#about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let current = "hero";
      for (const link of links) {
        const section = document.querySelector(link.href);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = link.href.slice(1);
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white text-black dark:bg-black dark:text-white fixed w-full z-50 shadow transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="#hero" className="font-bold text-xl hover:text-green-400">
          EcoVision
        </a>

        {/* Middle nav links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a key={link.name} href={link.href} className={`transition-colors ${activeSection === link.href.slice(1) ? "text-yellow-300 font-semibold underline" : "hover:text-green-400 dark:hover:text-yellow-500"}`}>
              {link.name}
            </a>
          ))}
        </div>

        {/* Dark mode toggle (Desktop) */}
        <div className="hidden md:flex items-center">
          <button onClick={() => setDarkMode(!darkMode)} className="ml-4 px-2 py-1 rounded bg-gray-800 text-white hover:bg-gray-700 transition dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-300" title="Toggle Dark Mode">
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none" aria-label="Toggle Menu">
          <svg className="w-6 h-6 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black px-4 py-2 space-y-2 transition-colors duration-300">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-2 ${activeSection === link.href.slice(1) ? "text-yellow-300 font-semibold underline" : "hover:text-green-400 dark:hover:text-yellow-500"}`}
            >
              {link.name}
            </a>
          ))}
          <button onClick={() => setDarkMode(!darkMode)} className="block w-full text-left py-2 px-2 rounded bg-gray-800 text-white hover:bg-gray-700 transition dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-300">
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
