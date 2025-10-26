import { Container, Row, Col } from "react-bootstrap";
import MainProfile from "../components/profile/MainProfile";
import RecommendedJobs from "../components/jobs/RecommendedJobs";
import Connections from "../components/sidebars/left-sidebar/Connections";
import ProfileOptions from "../components/sidebars/left-sidebar/ProfileOptions";

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
