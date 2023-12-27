import { Link } from "react-router-dom";

function SecondaryButton({ url, text }) {
  return (
    <>
      <Link
        className="secondary-button"
        to={`/portfolio/${url}`}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <p className="secondary-button__text">{text}</p>
        <img
          src="/img/icons/arrow.svg"
          alt=""
        />
      </Link>
    </>
  );
}

export default SecondaryButton;
