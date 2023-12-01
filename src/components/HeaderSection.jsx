import { useState } from "react";

function HeaderSection() {
  const [show, setShow] = useState(false);

  return (
    <>
      <header className={`header-section ${show ? "show" : ""}`}>
        <nav className="header-section__inner">
          <a className="header-section__logo">lind.gg</a>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
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
