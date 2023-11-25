import ToolBox from "./ToolBox";

function ToolsSection() {
  return (
    <>
      <section className="tools-section">
        <div className="tools-section__inner page-container">
          <div className="title-box">
            <h2 className="tools-section__title">My tools</h2>
          </div>
          <h3 className="tools-section__sub-title">Development</h3>
          <div className="tools-section__box-container">
            <ToolBox
              img={"/img/logos/react.svg"}
              color={"#149ECA"}
              alt={"react logo"}
              text={"React"}
            />
            <div className="tools-section__tool-box">
              <div
                style={{ backgroundColor: "#149ECA" }}
                className="tools-section__image-container"
              >
                <img
                  src="/img/logos/react.svg"
                  alt="react logo"
                />
              </div>
              <p className="tools-section__tool-box-text">React</p>
            </div>
          </div>
          <h3 className="tools-section__sub-title">Apps</h3>
          <div className="tools-section__box-container"></div>
        </div>
      </section>
    </>
  );
}

export default ToolsSection;
