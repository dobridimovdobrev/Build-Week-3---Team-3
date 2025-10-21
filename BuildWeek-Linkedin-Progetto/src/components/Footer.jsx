import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoSettingsSharp, IoShieldHalf } from "react-icons/io5";
import { BiSolidDownArrow } from "react-icons/bi";
const Footer = () => {
  return (
    <>
      <Container className="text-secondary">
        <Row className="mt-5">
          <Col xl={2} className="d-flex flex-column align-items-start gap-2 ">
            <button className="foot-font-size text-secondary fw-bold foot-btn">Informazioni</button>
            <button className="foot-font-size text-secondary fw-bold foot-btn text-start">Informativa sulla community professionale</button>
            <button className="foot-font-size text-secondary fw-bold foot-btn">
              Privacy e condizioni
              <BiSolidDownArrow className="ms-1 foot-font-size text-secondary" />{" "}
            </button>
            <button className="foot-font-size text-secondary fw-bold foot-btn">Sales Solutions</button>
            <button className="foot-font-size text-secondary fw-bold foot-btn">Centro sicurezza</button>
          </Col>
          <Col xl={2} className="d-flex flex-column align-items-start gap-2 ">
            <button className="foot-font-size text-secondary fw-bold foot-btn">Accessibilità</button>
            <button className="foot-font-size text-secondary fw-bold foot-btn">Carriera</button>
            <button className="foot-font-size text-secondary fw-bold foot-btn text-start">Opzioni per gli anunci pubblicitari </button>
            <button className="foot-font-size text-secondary fw-bold foot-btn">Mobile</button>
          </Col>
          <Col xl={2} className="d-flex flex-column align-items-start gap-2 ">
            <button className="foot-font-size text-secondary fw-bold foot-btn">Talent solutions</button>
            <button className="foot-font-size text-secondary fw-bold foot-btn">Soluzioni di marketing</button>
            <button className="foot-font-size text-secondary fw-bold foot-btn">Pubblicità </button>
            <button className="foot-font-size text-secondary fw-bold foot-btn">Piccole imprese</button>
          </Col>
          {/* footer icons */}
          <Col xl={3} className="d-flex flex-column align-items-start gap-2 ">
            <div className="d-flex gap-2 align-items-start">
              <AiFillQuestionCircle className="fs-4" />
              <div className="d-flex align-items-start flex-column gap-1">
                <button className="nav-font-size foot-btn text-secondary fw-bold p-0">Domande ?</button>
                <span className="foot-font-size text-secondary">Visita il nostro Centro assistenza.</span>
              </div>
            </div>
            <div className="d-flex gap-2 align-items-start">
              <IoSettingsSharp className="fs-4" />
              <div className="d-flex align-items-start flex-column gap-1">
                <button className="nav-font-size foot-btn text-secondary fw-bold p-0">Gestisci il tuo account e la tua priacy</button>
                <span className="foot-font-size text-secondary">Vai alle impostazioni</span>
              </div>
            </div>
            <div className="d-flex gap-2 align-items-start">
              <IoShieldHalf className="fs-4" />
              <div className="d-flex align-items-start flex-column gap-1">
                <button className="nav-font-size foot-btn text-secondary fw-bold p-0">Trasparenza sui contenuti consigliati</button>
                <span className="foot-font-size text-secondary">Scopri di più sui contenuti consigliati.</span>
              </div>
            </div>
          </Col>
          <Col xl={3}>
            <div className="d-flex align-items-start flex-column gap-1">
              <span className="text-muted foot-font-size text-secondary">Seleziona lingua</span>
              <Dropdown data-bs-theme="white" className="bg-white border rounded-2 text-secondary nav-font-size " style={{ width: "282px", height: "32px" }}>
                <Dropdown.Toggle
                  id="dropdown-button-white"
                  variant="white"
                  className="bg-white rounded-2 text-secondary nav-font-size text-start language"
                  style={{ width: "282px", height: "32px" }}
                >
                  Seleziona lingua{" "}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item className="nav-font-size text-secondary" href="#/action-1" active>
                    Italiano
                  </Dropdown.Item>
                  <Dropdown.Item className="nav-font-size text-secondary" href="#/action-1" active>
                    Inglese
                  </Dropdown.Item>
                  <Dropdown.Item className="nav-font-size text-secondary" href="#/action-2">
                    Spagnolo
                  </Dropdown.Item>
                  <Dropdown.Item className="nav-font-size text-secondary" href="#/action-3">
                    Francese
                  </Dropdown.Item>
                  <Dropdown.Item className="nav-font-size text-secondary" href="#/action-4">
                    Tedesco
                  </Dropdown.Item>
                  <Dropdown.Item className="nav-font-size text-secondary" href="#/action-4">
                    Russo
                  </Dropdown.Item>
                  <Dropdown.Item className="nav-font-size text-secondary" href="#/action-4">
                    Polacco
                  </Dropdown.Item>
                  <Dropdown.Item className="nav-font-size text-secondary" href="#/action-4">
                    Arabo
                  </Dropdown.Item>
                  <Dropdown.Item className="nav-font-size text-secondary" href="#/action-4">
                    Cinese
                  </Dropdown.Item>
                  <Dropdown.Item className="nav-font-size text-secondary" href="#/action-4">
                    Giapponese
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="mt-3 ">
          <Col>
            <p className="nav-font-size text-secondary">All Rights Reserved &copy; 2025</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
