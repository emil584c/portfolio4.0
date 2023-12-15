import React from "react";
import { useParams } from "react-router-dom";
import SwiperSlider from "./SwiperSlider";
import HeaderSection from "./HeaderSection";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const PortfolioItem = ({ portfolioItems }) => {
  const { id } = useParams();

  if (!Array.isArray(portfolioItems) || portfolioItems.length === 0) {
    return <p>No portfolio items available</p>;
  }

  const selectedItem = portfolioItems.find((item) => item.id === parseInt(id));

  if (!selectedItem) {
    return <p>Item not found</p>;
  }

  const {
    title,
    description,
    img1,
    img2,
    img3,
    url,
    date,
    tools = [],
  } = selectedItem;

  const [show, setShow] = useState(false);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);
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
          <ul style={{ display: "flex" }}>
            <li>
              <Link
                to={"/"}
                style={{ height: "12px" }}
                onClick={() => scrollToAnchor("#about")}
              >
                Go back
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className="portfolio-item">
        <div className="portfolio-item__inner page-container">
          <h1 className="portfolio-item__title">{title}</h1>
          {tools && (
            <div className="portfolio-item__tools-container">
              {tools.map((tool) => (
                <p
                  key={tool}
                  className="portfolio-item__tool"
                >
                  {tool}
                </p>
              ))}
              <p className="portfolio-item__tool">{date}</p>
            </div>
          )}
          <p className="portfolio-item__description">{description}</p>
          {url && (
            <a
              className="portfolio-item__link"
              target="_blank"
              href={url}
            >
              Se løsningen
            </a>
          )}
        </div>
        <SwiperSlider
          img1={img1}
          img2={img2}
          img3={img3}
        />
      </section>
    </>
  );
};

export default PortfolioItem;
