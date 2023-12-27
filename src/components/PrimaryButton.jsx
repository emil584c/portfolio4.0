function PrimaryButton({ url, text }) {
  return (
    <>
      <a
        className="primary-button"
        target="_blank"
        href={url}
      >
        <p className="primary-button__text">{text}</p>
        <img
          src="/img/icons/arrow.svg"
          alt=""
        />
      </a>
    </>
  );
}

export default PrimaryButton;
