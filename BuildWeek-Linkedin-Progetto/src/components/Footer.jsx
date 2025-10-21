import { Container, Row, Col } from "react-bootstrap";
import { AiFillQuestionCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col className="d-flex flex-column align-items-start gap-2 ">
            <button className="nav-font-size">Informazioni</button>
            <button className="nav-font-size">
              Informativa sulla community professionale
            </button>
            <button className="nav-font-size">Privacy e condizioni </button>
            <button className="nav-font-size">Sales Solutions</button>
            <button className="nav-font-size">Centro sicurezza</button>
          </Col>
          <Col className="d-flex flex-column align-items-start gap-2 ">
            <button className="nav-font-size">Informazioni</button>
            <button className="nav-font-size">
              Informativa sulla community professionale
            </button>
            <button className="nav-font-size">Privacy e condizioni </button>
            <button className="nav-font-size">Sales Solutions</button>
            <button className="nav-font-size">Centro sicurezza</button>
          </Col>
          <Col className="d-flex flex-column align-items-start gap-2 ">
            <button className="nav-font-size">Informazioni</button>
            <button className="nav-font-size">
              Informativa sulla community professionale
            </button>
            <button className="nav-font-size">Privacy e condizioni </button>
            <button className="nav-font-size">Sales Solutions</button>
            <button className="nav-font-size">Centro sicurezza</button>
          </Col>
          {/* footer icons */}
          <Col className="d-flex flex-column align-items-start gap-2 ">
            <div className="d-flex gap-2 align-items-start">
              <AiFillQuestionCircle className="fs-4" />
              <div className="d-flex align-items-start flex-column gap-1">
                <button className="nav-font-size p-0">Domande ?</button>
                <span className="nav-font-size">
                  Visita il nostro Centro assistenza.
                </span>
              </div>
            </div>
            <div className="d-flex gap-2 align-items-start">
              <AiFillQuestionCircle className="fs-4" />
              <div className="d-flex align-items-start flex-column gap-1">
                <button className="nav-font-size p-0">Domande ?</button>
                <span className="nav-font-size">
                  Visita il nostro Centro assistenza.
                </span>
              </div>
            </div>
            <div className="d-flex gap-2 align-items-start">
              <AiFillQuestionCircle className="fs-4" />
              <div className="d-flex align-items-start flex-column gap-1">
                <button className="nav-font-size p-0">Domande ?</button>
                <span className="nav-font-size">
                  Visita il nostro Centro assistenza.
                </span>
              </div>
            </div>       
          </Col>
          <Col>
            <span className="text-muted nav-font-size">Seleziona lingua</span>
            <button></button>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="mt-3">
          <Col>
            <p className="nav-font-size">All Rights Reserved &copy; 2025</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
