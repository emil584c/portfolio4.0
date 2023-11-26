import ProjectBox from "./ProjectBox";

function MyWork() {
  return (
    <>
      <section className="work-section">
        <div className="work-section__inner page-container">
          <div className="title-box">
            <h2 className="tools-section__title">My work</h2>
          </div>
          <div className="work-section__projects-container">
            <ProjectBox
              title={"Morgenfest"}
              firstText={"Website Development"}
              link={"#"}
            />
            <ProjectBox
              title={"Morgenfest"}
              firstText={"Website Development"}
              link={"#"}
            />
            <ProjectBox
              title={"Morgenfest"}
              firstText={"Website Development"}
              link={"#"}
            />
            <ProjectBox
              title={"Morgenfest"}
              firstText={"Website Development"}
              link={"#"}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default MyWork;
