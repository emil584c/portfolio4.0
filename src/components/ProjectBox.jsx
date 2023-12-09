import { Link } from "react-router-dom";

function ProjectBox({ title, firstText, secondText, link }) {
  return (
    <>
      <article className="work-section__project">
        <div className="work-section__project-inner">
          <h4 className="work-section__project-title">{title}</h4>
          <div className="work-section__project-text-container">
            <p className="work-section__project-text">{firstText}</p>
            {secondText && (
              <p className="work-section__project-text">{secondText}</p>
            )}
          </div>
          <Link
            className="work-section__link"
            to={`/portfolio/${link}`}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          ></Link>
        </div>
        <img
          className="work-section__project-click"
          src="img/icons/click-icon.png"
          alt="click icon"
        />
      </article>
    </>
  );
}

export default ProjectBox;
