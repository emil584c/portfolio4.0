import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProjectBox({ title, firstText, secondText, link, external, url }) {
  const navigate = useNavigate();
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
            {external && (
              <p >
                <a className="work-section__project-text--external" href={url} target="_blank" rel="noopener noreferrer">
                  Visit external site
                </a>
              </p>
            )}
          </div>
          <div
            className="work-section__link"
            onClick={() => {
              if (external) {
                window.open(url, "_blank");
              } else {
                navigate(`/portfolio/${link}`);
              }
            }}
          >
          </div>
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
