import PrimaryButton from "./PrimaryButton";

function AboutMe() {
  return (
    <>
      <section
        className="about-section"
        id="about"
      >
        <div className="about-section__inner page-container">
          <div className="title-box">
            <h2 className="about-section__title">About me</h2>
          </div>
          <p className="about-section__text">
            Hi! My name is Emil. I have a passion for creating and coding
            websites, aswell as programming in general. I love working on
            problems, big or small, and spending my time solving them.
          </p>
          <PrimaryButton
            url={"https://www.linkedin.com/in/emil-lind-a6a311180/"}
            text={"LinkedIn"}
          />
          <PrimaryButton
            url={"https://github.com/emil584c"}
            text={"GitHub"}
          />
        </div>
      </section>
    </>
  );
}

export default AboutMe;
