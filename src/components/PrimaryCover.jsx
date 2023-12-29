import { useEffect, useState } from "react";

function PrimaryCover() {
  useEffect(() => {
    document.querySelector(".animated-element").classList.add("animated");
  }, []);

  const FADE_INTERVAL_MS = 2000;
  const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;
  const WORDS_TO_ANIMATE = [
    "Passionate",
    "Creative",
    "Innovative",
    "Adaptable",
    "Curious",
    "Detail-oriented",
    "Analytical",
    "Collaborative",
  ];

  const AnimatedText = () => {
    const [fadeProp, setFadeProp] = useState({ fade: "fade-in" });
    const [wordOrder, setWordOrder] = useState(0);

    useEffect(() => {
      const fadeTimeout = setInterval(() => {
        setFadeProp((prevFadeProp) => ({
          fade: prevFadeProp.fade === "fade-in" ? "fade-out" : "fade-in",
        }));
      }, FADE_INTERVAL_MS);

      return () => clearInterval(fadeTimeout);
    }, []);

    useEffect(() => {
      const wordTimeout = setInterval(() => {
        setWordOrder(
          (prevWordOrder) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length
        );
      }, WORD_CHANGE_INTERVAL_MS);

      return () => clearInterval(wordTimeout);
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
              <span className={fadeProp.fade}>
                {WORDS_TO_ANIMATE[wordOrder] + ", "}
              </span>
              <br></br>
              FRONTEND DEVELOPER.
            </h1>
          </div>
        </section>
      </>
    );
  };

  return <AnimatedText />;
}

export default PrimaryCover;
