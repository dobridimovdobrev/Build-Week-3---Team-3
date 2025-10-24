import { Container, Row, Col, NavLink } from "react-bootstrap";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
const MainProfile = () => {
  return (
    <Container className="bg-white rounded-bottom-3 mt-4">
      <Row>
        <Col className="position-relative p-0">
          <img
            className="w-100 rounded-top-3"
            src="https://media.licdn.com/dms/image/v2/D4D16AQEZ1rtERfnh-Q/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1698702388159?e=1762387200&v=beta&t=i98LAElBIxsgOXV9I7GZQlyDAZOlJPRKDfnpqwDQP_Q"
            alt=""
          />
          <img
            className="rounded-circle border border-4 border-white home-profile-img-absolute"
            width={72}
            height={72}
            src="https://media.licdn.com/dms/image/v2/D4D35AQHFJd2I_oy15A/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1706905293996?e=1761577200&v=beta&t=7Ce6ci5DVj05UJAXAcOzFCNFr6lmqQ63DyctmefRxRE"
            alt=""
          />
        </Col>
      </Row>
      <Container className="position-relative">
        <Row className=" mt-5 w-100">
          <Col>
            <div className="d-flex gap-2">
              <NavLink>
                <h6>
                  Dobri Dimov Dobrev
                  <MdOutlineVerifiedUser className="fs-5 ms-1" />
                </h6>
              </NavLink>
            </div>
            <div className="mb-2">
              <p className="custom-font">Tecnico Informatico con comptenze nelle reti e nel web</p>
            </div>
            <div className="d-flex gap-2 mb-2">
              <span className="grey custom-font">Forlì, Emilia Romagna, Italia</span>
            </div>
            
            <button className="w-100 rounded-2 text-secondary home-profile-button mb-2">
              <AiOutlinePlus className="mb-1 me-1" />
              Esperienza
            </button>
            
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default MainProfile;
