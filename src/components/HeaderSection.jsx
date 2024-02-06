import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function HeaderSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  const scrollToAnchor = (anchorId) => {
    const element = document.getElementById(anchorId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [scrolltopdata, setscrolltopdata] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 15) {
        setscrolltopdata("");
      } else {
        setscrolltopdata("scrolled");
      }
    });
  }, []);

  return (
    <>
      <header
        className={`header-section ${show ? "show" : ""}${scrolltopdata}`}
      >
        <nav className="header-section__inner">
          <Link
            to={"/"}
            className="header-section__logo"
          >
            elind.dk
          </Link>
          <ul>
            <li>
              <Link
                to={"/#about"}
                onClick={() => scrollToAnchor("about")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/#work"}
                onClick={() => scrollToAnchor("work")}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to={"/#contact"}
                onClick={() => scrollToAnchor("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div
            onClick={() => setShow(!show)}
            className="header-section__hamburger-menu"
          >
            <div></div>
            <div></div>
          </div>
        </nav>
        <div className="header-section__mobile-menu">
          <ul>
            <li onClick={() => setShow(!show)}>
              <Link
                to={"/#about"}
                onClick={() => scrollToAnchor("about")}
              >
                About
              </Link>
            </li>
            <li onClick={() => setShow(!show)}>
              <Link
                to={"/#work"}
                onClick={() => scrollToAnchor("work")}
              >
                Projects
              </Link>
            </li>
            <li onClick={() => setShow(!show)}>
              <Link
                to={"/#contact"}
                onClick={() => scrollToAnchor("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default HeaderSection;
