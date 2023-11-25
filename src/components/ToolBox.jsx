function ToolBox(img, color, alt, text) {
  return (
    <>
      <div className="tools-section__tool-box">
        <div
          style={{ backgroundColor: { color } }}
          className="tools-section__image-container"
        >
          <img
            src={img}
            alt={alt}
          />
        </div>
        <p className="tools-section__tool-box-text">{text}</p>
      </div>
    </>
  );
}

export default ToolBox;
