import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";

const RecommendedJobs = () => {
  return (
    <Container>
      <Row>
        <Col className="mt-4 p-0">
          <div className="bg-white  rounded-2 border">
            {/* RecommendedJobs  */}
            <div className="lh-1 px-3 py-3">
              <h4>Le principali offerte di lavoro per te</h4>
              <p className="text-muted fs-6">In base al tuo profilo, alle tue preferenze e ad attività come candidature, ricerche e salvataggi</p>
            </div>
            <div className="d-flex flex-column justify-content-between px-3 py-3">
              {/* Company Profiles */}
              <div className="d-flex flex-column ">
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      className="rounded-circle mt-3"
                      width={48}
                      height={48}
                      src="https://img.freepik.com/vettori-premium/icona-predefinita-del-profilo-dell-avatar-immagine-dell-utente-dei-social-media-icona-dell-avatar-grigio-silhouette-del-profilo-vuoto-illustrazione-vettoriale_561158-3485.jpg?w=360"
                      alt="profileImg"
                    />
                    <div className="flex-column">
                      <div className="m-3">
                        <h5>Company Name</h5>
                        <span className="text-muted">Role</span>
                      </div>
                      <div className="m-3">
                        <h6>Title Job</h6>
                        <p className="text-muted">Description</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-column">
                    <div className="text-end fs-4 mb-1">
                      <button className="rounded-display">
                        <AiOutlineClose className="mt-2 mx-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* line horizontal */}
            <hr className="mx-4" />
            <Container>
              <div className="d-flex justify-content-center mx-2">
                <button className="showall-btn rounded-2 mb-1 fw-medium w-100" style={{ height: "41px" }}>
                  Mostra tutto
                </button>
              </div>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RecommendedJobs;
