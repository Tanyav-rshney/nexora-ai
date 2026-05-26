
import { useState, useEffect } from "react";

function Navbar() {

  const [theme, setTheme] = useState("dark");

  useEffect(() => {

    document.body.className = theme;

  }, [theme]);

  const toggleTheme = () => {

    setTheme(
      theme === "dark"
        ? "light"
        : "dark"
    );

  };

  const scrollToSection = (id) => {

    const section =
      document.getElementById(id);

    if(section){

      const yOffset = -120;

      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top:y,
        behavior:"smooth"
      });
    }
  };

  return (

    <header className="navbar">

      <div className="logo">
        Nexora AI
      </div>

      <nav>

        <a
          onClick={() =>
            window.scrollTo({
              top:0,
              behavior:"smooth"
            })
          }
        >
          Home
        </a>

        <a
          onClick={() =>
            scrollToSection("tools")
          }
        >
          Tools
        </a>

        <a
          onClick={() =>
            scrollToSection("trending")
          }
        >
          Trending
        </a>

        <a
          onClick={() =>
            scrollToSection("about")
          }
        >
          About
        </a>

      </nav>

      <div className="nav-right">

        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {
            theme === "dark"
            ? "☀️"
            : "🌙"
          }
        </button>

        <button
          className="nav-btn"
          onClick={() =>
            scrollToSection("tools")
          }
        >
          Explore
        </button>

      </div>

    </header>
  );
}

export default Navbar;

