import { Container, Row, Col } from "react-bootstrap";
import { BsPencil } from "react-icons/bs";
const Sidebar = () => {
  return (
    <Container className="custom-width">
      <Row>
        <Col className="mt-4 p-0">
          <div className="bg-white rounded-2">
            {/* profile language */}
            <div className="d-flex justify-content-between px-3 py-3">
              <div>
                <h5>Lingua del profilo</h5>
                <p className="text-muted">Italiano</p>
              </div>
              <button className="d-flex">
              <BsPencil className="fs-5" />
              </button>
            </div>
            {/* line horizontal */}
            <hr className="mx-4" />
            {/* profile url */}
            <div className="d-flex justify-content-between px-3 py-3">
              <div>
                <h5>Profilo pubblico e URL</h5>
                <p className="text-muted">www.linkedin.com/in/dobri-dimov-dobrev-34bb95296</p>
              </div>
              <button className="d-flex">
              <BsPencil className="fs-5" />
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
