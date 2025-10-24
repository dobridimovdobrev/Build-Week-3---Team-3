import { Container, Row, Col } from "react-bootstrap";
import MainProfile from "../components/MainProfile";
import RecommendedJobs from "../components/RecommendedJobs";
import Connections from "../components/Connections";
import ProfileOptions from "../components/ProfileOptions";

const Jobs = () => {
  return (
    <Container>
      <Row className="gap-3 ">
        {/* job content */}
        <Col className="p-1 left-sidebar-width " lg={3}>
          <MainProfile />
          <Connections />
          <ProfileOptions />
        </Col>
        <Col className="p-1" lg={9}>
          <RecommendedJobs />
        </Col>
      </Row>
    </Container>
  );
};

export default Jobs;
