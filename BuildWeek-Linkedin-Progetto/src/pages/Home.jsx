import { Container, Row, Col } from "react-bootstrap";
import MainProfile from "../components/MainProfile";
import MainPostCreator from "../components/MainPostCreator";
import Advertising from "../components/Advertising";
import LinkedNews from "../components/LinkedNews";
import PostLinkedin from "../components/PostLinkedin";
import AdvisedProfile from "../components/AdvisedProfile";
import Connections from "../components/Connections";
import ProfileOptions from "../components/ProfileOptions";

const Home = () => {
  return (
    <Container>
      <Row className="g-0 ">
        {/* main content */}
        <Col className="p-1 left-sidebar-width" lg={3}>
          <MainProfile />
          <Connections />
          <ProfileOptions />
        </Col>
        <Col className="p-1" lg={6}>
          <MainPostCreator />
          <AdvisedProfile />
          <PostLinkedin />
        </Col>
        {/* sidebar */}
        <Col className="p-1" lg={3}>
          <LinkedNews />
          <Advertising />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
