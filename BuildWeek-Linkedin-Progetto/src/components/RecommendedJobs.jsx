import { Container, Row, Col } from "react-bootstrap";
import JobsList from "./JobsList";
import { LuArrowRight } from "react-icons/lu";

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
            <button className="showall-btn w-100 border-top fw-medium" style={{ height: "41px" }}>
              Mostra tutto <LuArrowRight className="mb-1" />
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RecommendedJobs;
