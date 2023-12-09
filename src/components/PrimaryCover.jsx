import { useEffect } from "react";

function PrimaryCover() {
  useEffect(() => {
    document.querySelector(".animated-element").classList.add("animated");
  }, []);
  return (
    <>
      <section className="primary-cover">
        <div className="primary-cover__inner page-container">
          <div className="primary-cover__shape primary-cover__shape--blue">
            <img
              className="primary-cover__profile-image animated-element"
              src="/img/emil.png"
              alt="Picture of Emil Lind"
            />
          </div>
          <div className="primary-cover__shape primary-cover__shape--pink"></div>
          <h1 className="primary-cover__title">
            FRONTEND DEVELOPER, BASED IN ODENSE.
          </h1>
        </div>
      </section>
    </>
  );
}

export default PrimaryCover;
