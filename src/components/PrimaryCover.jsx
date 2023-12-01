function PrimaryCover() {
  return (
    <>
      <section className="primary-cover">
        <div className="primary-cover__inner page-container">
          <div className="primary-cover__shape primary-cover__shape--blue">
            <img
              className="primary-cover__profile-image"
              src="/img/emil.png"
              alt="Picture of me"
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
