const Experience = () => {
  return (
    <>
      <div className="d-flex">
        <div className="me-3">
          <svg
            width="48"
            height="48"
            display="var(--hue-web-svg-display-light)"
          >
            <image
              href="https://static.licdn.com/aero-v1/sc/h/p4pvtlgggtwlz9lht17nvnqq"
              x="0"
              y="0"
              width="48"
              height="48"
            ></image>
          </svg>
        </div>
        <div className="d-flex flex-column flex-grow-1">
          <h6 className="m-0">Sviluppo professionale</h6>
          <p className="custom-font">Pausa lavorativa</p>
          <span className="text-muted custom-font">
            nov 2023 - Presente - 2 anni
          </span>
          <span className="text-muted custom-font">Forli, Emilia-Romagna</span>
          <p className="mt-3 custom-font">
            Corso Programmatore Full Stack Web Developer Academia Code
          </p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Experience;
