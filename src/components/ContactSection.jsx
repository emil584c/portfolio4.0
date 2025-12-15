function ContactSection() {
  return (
    <>
      <section
        className="contact-section"
        id="contact"
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
            <a className="contact-section__info" href="mailto:emilwaellind@gmail.com">
              <img
                src="/img/icons/mail-icon.svg"
                alt="phone icon"
              />
              <p className="contact-section__info-text">
                emilwaellind@gmail.com
              </p>
            </a>
            <a className="contact-section__info" href="tel:+4542544888">
              <img
                src="/img/icons/phone-icon.svg"
                alt="mail icon"
              />
              <p className="contact-section__info-text">+45 42 54 48 88</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
