import "./styles/app.scss";
import PrimaryCover from "./components/PrimaryCover.jsx";
import AboutMe from "./components/AboutMe";
import ToolsSection from "./components/ToolsSection";
import MyWork from "./components/MyWork";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <>
      <PrimaryCover />
      <AboutMe />
      <ToolsSection />
      <MyWork />
      <ContactSection />
    </>
  );
}

export default App;
