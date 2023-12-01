import React from "react";
import { useParams } from "react-router-dom";

const PortfolioItem = ({ portfolioItems }) => {
  const { id } = useParams();

  if (!Array.isArray(portfolioItems) || portfolioItems.length === 0) {
    return <p>No portfolio items available</p>;
  }

  const selectedItem = portfolioItems.find((item) => item.id === parseInt(id));

  if (!selectedItem) {
    return <p>Item not found</p>;
  }

  const { title, description } = selectedItem;

  return (
    <section className="portfolio-item">
      <div className="portfolio-item__inner page-container">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default PortfolioItem;
