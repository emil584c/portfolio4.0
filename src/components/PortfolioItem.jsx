import React from "react";
import { useParams } from "react-router-dom";
import SwiperSlider from "./SwiperSlider";
import HeaderSection from "./HeaderSection";

const PortfolioItem = ({ portfolioItems }) => {
  const { id } = useParams();

  if (!Array.isArray(portfolioItems) || portfolioItems.length === 0) {
    return <p>No portfolio items available</p>;
  }

  const selectedItem = portfolioItems.find((item) => item.id === parseInt(id));

  if (!selectedItem) {
    return <p>Item not found</p>;
  }

  const { title, description, img1, img2, img3, url, date } = selectedItem;

  return (
    <>
      <HeaderSection />
      <section className="portfolio-item">
        <div className="portfolio-item__inner page-container">
          <h1 className="portfolio-item__title">{title}</h1>
          <p className="portfolio-item__date">{date}</p>
          <p className="portfolio-item__description">{description}</p>
          {url && (
            <a
              className="portfolio-item__link"
              target="_blank"
              href={url}
            >
              URLE
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
