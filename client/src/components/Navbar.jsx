import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      const sections = ["home", "about", "projects", "contact"];
      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            current = section;
          }
        }
      });

      if (window.scrollY < 100) {
        current = "home";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow sticky-top">
        {/* Scroll progress bar */}
        <div
          className="position-absolute top-0 start-0"
          style={{
            height: "6px",
            width: `${scrollProgress}%`,
            backgroundColor: "#FFFF00",
            transition: "width 0.1s ease-out",
            zIndex: 1050,
          }}
        />

        <div className="container">
          <a
            className="navbar-brand fw-bold"
            href="#"
            onClick={() => handleNavClick("home")}
          >
            <img
              src="/logo.png"
              alt="Portfolio Logo"
              height="40"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {["home", "about", "projects", "contact"].map((section) => (
                <li className="nav-item" key={section}>
                  <a
                    className={`nav-link px-3 py-2 rounded-3 fw-semibold ${
                      activeSection === section
                        ? "bg-dark text-white shadow-sm"
                        : "text-dark"
                    }`}
                    href={`#${section}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(section);
                    }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}

              {user && user.email && (
                <li className="nav-item">
                  <Link
                    className="nav-link px-3 py-2 rounded-3 fw-semibold bg-dark text-white shadow-sm"
                    to="/admin/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
