import { Container, Row, Col } from "react-bootstrap";
import JobsList from "./JobsList";

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
              <JobsList />
              {/* line horizontal */}
              <hr className="mx-4" />
            </div>
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
