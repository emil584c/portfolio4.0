import { useState } from "react";
import { Link } from "react-router-dom";

function HeaderSection() {
  const [show, setShow] = useState(false);

  return (
    <>
      <header className={`header-section ${show ? "show" : ""}`}>
        <nav className="header-section__inner">
          <Link
            to={"/"}
            className="header-section__logo"
          >
            lind.gg
          </Link>
          <ul>
            <li>
              <Link
                to={"/#about"}
                href="#about"
              >
                About
              </Link>
            </li>
            <li>
              <Link to={"/#work"}>Projects</Link>
            </li>
            <li>
              <Link to={"/#contact"}>Contact</Link>
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
              <a href="#about">About</a>
            </li>
            <li onClick={() => setShow(!show)}>
              <a href="#projects">Projects</a>
            </li>
            <li onClick={() => setShow(!show)}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default HeaderSection;
