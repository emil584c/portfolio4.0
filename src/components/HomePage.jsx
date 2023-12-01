import HeaderSection from "./HeaderSection.jsx";
import PrimaryCover from "./PrimaryCover.jsx";
import AboutMe from "./AboutMe";
import ToolsSection from "./ToolsSection";
import MyWork from "./MyWork";
import ContactSection from "./ContactSection";

function HomePage() {
  return (
    <>
      <HeaderSection />
      <PrimaryCover />
      <AboutMe />
      <ToolsSection />
      <MyWork />
      <ContactSection />
    </>
  );
}

export default HomePage;
