import ProjectBox from "./ProjectBox";
import { useParams } from "react-router-dom";
import portfolioItems from "../js/portfolioData";

function MyWork() {
  return (
    <>
      <section
        className="work-section"
        id="work"
      >
        <div className="work-section__inner page-container">
          <div className="title-box">
            <h2 className="tools-section__title">My work</h2>
          </div>
          <div className="work-section__projects-container">
            {portfolioItems.map((item) => (
              <ProjectBox
                key={item.id}
                title={item.title}
                firstText={item.firstText}
                secondText={item.secondText}
                link={item.id}
                url={item.url}
                description={item.description}
                external={item.external}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MyWork;
