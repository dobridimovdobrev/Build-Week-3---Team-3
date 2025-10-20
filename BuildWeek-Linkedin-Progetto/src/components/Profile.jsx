import { Container, Row, Col } from "react-bootstrap";
import { BsPencil } from "react-icons/bs";
import { LiaSchoolSolid } from "react-icons/lia";
import { MdOutlineVerifiedUser } from "react-icons/md";

const Profile = () => {
  return (
    <Container className="bg-white rounded-bottom-3 mt-4">
      <main>
        <Row>
          <Col className="position-relative p-0">
            <img
              className="w-100 rounded-top-3"
              src="https://media.licdn.com/dms/image/v2/D4D16AQEZ1rtERfnh-Q/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1698702388159?e=1762387200&v=beta&t=i98LAElBIxsgOXV9I7GZQlyDAZOlJPRKDfnpqwDQP_Q"
              alt=""
            />
            <img
              className="rounded-circle border border-4 border-white profile-img-absolute"
              width={152}
              height={152}
              src="https://media.licdn.com/dms/image/v2/D4D35AQHFJd2I_oy15A/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1706905293996?e=1761577200&v=beta&t=7Ce6ci5DVj05UJAXAcOzFCNFr6lmqQ63DyctmefRxRE"
              alt=""
            />
            {/* Modify Profile background image */}
            <button
              className="d-flex justify-content-center align-items-center pencil-absolute border-0 rounded-circle fs-5"
              style={{ width: "35px", height: "35px" }}
            >
              <BsPencil className="text-primary" />
            </button>
          </Col>
        </Row>
        <Container className="position-relative">
          {/* Modify Profile Info Button */}
          <button>
            <BsPencil className="pencil-absolute fs-5" />
          </button>
          <Row className=" mt-5">
            <Col lg={8}>
              <div className="d-flex align-items-center gap-2">
                <h2 className="fs-4">Dobri Dimov Dobrev</h2>
                <a className="d-flex  fw-medium text-primary">
                  <MdOutlineVerifiedUser className="fs-6" />
                  <span>Aggiungi badge di verifica</span>
                </a>
              </div>
              <div>
                <p>Tecnico Informatico con comptenze nelle reti e nel web</p>
              </div>
              <div className="d-flex gap-2">
                <span className="grey">Forlì, Emilia Romagna, Italia</span>
                <a href="#" className="text-primary fw-medium">
                  Informazioni di contatto
                </a>
              </div>
            </Col>
            <Col lg={4}>
              <div className="d-flex align-items-center gap-2">
                <LiaSchoolSolid className="fs-3" />
                <p className="fw-medium">Academia Code</p>
              </div>
            </Col>
          </Row>
        </Container>

        {/* buttons profile */}
        <Container>
          <Row>
            <Col className="d-flex gap-3 my-4">
              <button className="text-bg-primary rounded-5 fw-medium py-1 px-3">
                Disponibile per
              </button>
              <button className="btn btn-outline-primary rounded-5 fw-medium">
                Aggiungi sezioni del profilo
              </button>
              <button className="btn btn-outline-primary rounded-5 fw-medium">
                Migliora profilo
              </button>
              <button className="btn btn-outline-dark rounded-5 fw-medium px-4">
                Risorse
              </button>
            </Col>
          </Row>
        </Container>
        {/* Carousel profile card*/}
        <Container>
          <Row className="g-2">
            <Col lg={6} className="mb-4">
              <div className="d-flex position-relative profile-card-color rounded-2 px-2 ">
                {/* profile card info */}
                <a href="#" className="d-inline-block position-relative my-3">
                  <span className="fw-medium text-dark">
                    Disponibile a lavorare
                  </span>
                  <span className="d-block profile-card-font text-dark">
                    Ruoli di Tecnico informatico e Sviluppatore Wordpress
                  </span>
                  <span className="d-block">Mostra dettagli</span>
                </a>
                {/* profile-card-button */}
                <button className="p-0">
                  <BsPencil className="pencil-absolute fs-6" />
                </button>
              </div>
            </Col>
            <Col lg={6} className="mb-4">
              <div className="d-flex position-relative profile-card-color rounded-2 px-2 ">
                {/* profile card info */}
                <a href="#" className="d-inline-block position-relative my-3">
                  <span className="fw-medium text-dark">
                    Disponibile a lavorare
                  </span>
                  <span className="d-block profile-card-font text-dark">
                    Ruoli di Tecnico informatico e Sviluppatore Wordpress
                  </span>
                  <span className="d-block">Mostra dettagli</span>
                </a>
                {/* profile-card-button */}
                <button className="p-0">
                  <BsPencil className="pencil-absolute fs-6" />
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </Container>
  );
};

export default Profile;
