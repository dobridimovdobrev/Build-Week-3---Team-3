import Experience from "./Experience";
import CreateExperienceModal from "./CreateExperienceModal";
import UpdateExperienceModal from "./UpdateExperienceModal";
import { Container, Row, Col } from "react-bootstrap";




const ExperiencesList = () => {
  return (
    <Container className="bg-white rounded-3 my-2">
      <Container>
        {/* experience top */}
        <Row>
          <Col className="d-flex justify-content-between p-3">
            <h5>Esperienza</h5>
            <div className="d-flex gap-3">
              <CreateExperienceModal />
              <UpdateExperienceModal />
            </div>
          </Col>
        </Row>
        {/* experience body */}
        <Row>
          <Col>
            <Experience />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ExperiencesList;
