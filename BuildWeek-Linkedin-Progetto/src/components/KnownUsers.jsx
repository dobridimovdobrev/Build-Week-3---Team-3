import { Container, Row, Col } from "react-bootstrap";
import { HiUserAdd } from "react-icons/hi";

const KnownUsers = () => {
  return (
    <Container className="custom-width">
      <Row>
        <Col className="mt-4 p-0">
          <div className="bg-white rounded-2 border">
            {/* Known users */}
            <div className="d-flex flex-column justify-content-between px-3 py-3">
              <div>
                <h5>Persone che potresti conoscere</h5>
              </div>
              {/* Profiles */}
              <div className="d-flex flex-column">
                <div className="d-flex">
                  <img
                    className="rounded-circle mt-3"
                    width={48}
                    height={48}
                    src="https://img.freepik.com/vettori-premium/icona-predefinita-del-profilo-dell-avatar-immagine-dell-utente-dei-social-media-icona-dell-avatar-grigio-silhouette-del-profilo-vuoto-illustrazione-vettoriale_561158-3485.jpg?w=360"
                    alt="profileImg"
                  />
                  <div className="m-3">
                    <h5>Name Surname</h5>
                    <span className="text-muted">Role</span>
                  </div>
                </div>
                <button className="btn btn-outline-dark rounded-5 fw-medium px-4 m-auto w-auto ">
                  <HiUserAdd className="mb-1 me-1" />
                  Collegati
                </button>
              </div>
            </div>
            {/* line horizontal */}
            <hr className="mx-4" />
            <button className="showall-btn w-100 border-top fw-medium" style={{ height: "41px" }}>
              Mostra tutto
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default KnownUsers;
