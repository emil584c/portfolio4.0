import "./styles/app.scss";
import "./styles/css-reset.scss";
import PrimaryCover from "./components/PrimaryCover.jsx";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <>
      <PrimaryCover />
      <AboutMe />
      <MyWork />
      <ContactSection />
    </>
  );
}

export default App;
