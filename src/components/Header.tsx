import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Education", href: "#education" },
    { name: "About Me", href: "#about" },
    { name: "Skills & Experience", href: "#skills" },
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="relative z-50 px-6 py-7">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <button
          onClick={() => scrollToSection("#hero")}
          className="flex items-center gap-3 group"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-300 to-orange-500 shadow-lg transition-transform duration-300 group-hover:scale-105">
            <span className="text-lg font-black tracking-tight text-zinc-900">
              MJ
            </span>
          </div>

          <div className="text-left">
            <h1 className="text-white text-lg font-bold leading-none">
              Michael James Jagmoc
            </h1>

          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white text-base font-medium transition-colors"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollToSection("#contact")}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-base font-semibold transition-all"
          >
            Contact Me
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#111827] z-50 transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } p-8 flex flex-col`}
      >
        <button
          className="self-end text-white mb-10"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={32} />
        </button>

        {/* Mobile Profile */}
        <div className="flex items-center gap-3 mb-10">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-300 to-orange-500 shadow-md">
            <span className="text-sm font-black text-zinc-900">MJ</span>
          </div>

          <div>
            <h2 className="text-white font-bold">Michael.Jagmoc</h2>
            <p className="text-gray-400 text-sm">
              Software Developer
            </p>
          </div>
        </div>

        <ul className="flex flex-col gap-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="text-white text-xl font-semibold hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            </li>
          ))}

          <li className="pt-6">
            <button
              onClick={() => scrollToSection("#contact")}
              className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl text-lg font-bold transition-colors"
            >
              Contact Me
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};