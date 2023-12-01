import ProjectBox from "./ProjectBox";
import { useParams } from "react-router-dom";
import portfolioItems from "../js/portfolioData";

function MyWork() {
  return (
    <>
      <section
        className="work-section"
        id="projects"
      >
        <div className="work-section__inner page-container">
          <div className="title-box">
            <h2 className="tools-section__title">My work</h2>
          </div>
          <div className="work-section__projects-container">
            {/* <ProjectBox
              title={"Morgenfest"}
              firstText={"Website Development"}
              link={"Morgenfest"}
              description={"Text for Project 1"}
            />
            <ProjectBox
              title={"Morgenfest"}
              firstText={"Website Development"}
              link={2}
              description={"Text for Project 2"}
            />
            <ProjectBox
              title={"Morgenfest"}
              firstText={"Website Development"}
              link={3}
              description={"Text for Project 3"}
            /> */}

            {portfolioItems.map((item) => (
              <ProjectBox
                key={item.id}
                title={item.title}
                firstText={item.firstText}
                secondText={item.secondText}
                link={item.id}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MyWork;
