import ToolBox from "./ToolBox";

function ToolsSection() {
  return (
    <>
      <section className="tools-section" id="tools">
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
            <ToolBox
              img={"/img/logos/next.svg"}
              color={"#EDEDED"}
              alt={"nextjs logo"}
              text={"Next.js"}
            />
            <ToolBox
              img={"/img/logos/tailwind.svg"}
              color={"#0EA5E9"}
              alt={"tailwindcss logo"}
              text={"TailwindCSS"}
            />
            <ToolBox
              img={"/img/logos/scss.svg"}
              color={"#BF4080"}
              alt={"scss logo"}
              text={"SCSS"}
            />
            <ToolBox
              img={"/img/logos/new-php-logo.svg"}
              color={"#F4F4F4"}
              alt={"PHP logo"}
              text={"PHP"}
            />
            <ToolBox
              img={"/img/logos/laravel.svg"}
              color={"#FF2D20"}
              alt={"laravel logo"}
              text={"Laravel"}
            />
            <ToolBox
              img={"/img/logos/wordpress.svg"}
              color={"#F4F4F4"}
              alt={"WordPress logo"}
              text={"WordPress"}
            />
            <ToolBox
              img={"/img/logos/woo_logo_white.png"}
              color={"#873EFF"}
              alt={"Woocommerce logo"}
              text={"WooCommerce"}
            />
          </div>
          <h3 className="tools-section__sub-title">Apps</h3>
          <div className="tools-section__box-container">
            <ToolBox
              img={"/img/logos/vscode.svg"}
              color={"#097DCD"}
              alt={"VScode logo"}
              text={"VS Code"}
            />
            <ToolBox
              img={"/img/logos/figma.svg"}
              color={"#A259FF"}
              alt={"figma logo"}
              text={"Figma"}
            />
            <ToolBox
              img={"/img/logos/github.svg"}
              color={"#840884"}
              alt={"github logo"}
              text={"GitHub"}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ToolsSection;
