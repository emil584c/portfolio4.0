function ContactSection() {
  return (
    <>
      <section
        className="contact-section"
        id="about"
      >
        <div className="contact-section__inner page-container">
          <div className="title-box">
            <h2 className="contact-section__title">Get in touch</h2>
          </div>
          <p className="contact-section__text">
            I am always ready to answer questions about my work or possible
            work. So write me a message or call me, and lets have a talk!
          </p>
          <div className="contact-section__info-container">
            <div className="contact-section__info">
              <img
                src="/img/icons/phone-icon.svg"
                alt="phone icon"
              />
              <p className="contact-section__info-text">
                emilwaellind@gmail.com
              </p>
            </div>
            <div className="contact-section__info">
              <img
                src="/img/icons/mail-icon.svg"
                alt="mail icon"
              />
              <p className="contact-section__info-text">+45 42 54 48 88</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
