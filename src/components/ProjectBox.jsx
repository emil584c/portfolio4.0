function ProjectBox({ title, firstText, secondText, link }) {
  return (
    <>
      <article className="work-section__project">
        <h4 className="work-section__project-title">{title}</h4>
        <div className="work-section__project-text-container">
          <p className="work-section__project-text">{firstText}</p>
          {secondText && (
            <p className="work-section__project-text">{secondText}</p>
          )}
        </div>
        {/* <a
          className="work-section__link"
          href={link}
        ></a> */}
      </article>
    </>
  );
}

export default ProjectBox;
