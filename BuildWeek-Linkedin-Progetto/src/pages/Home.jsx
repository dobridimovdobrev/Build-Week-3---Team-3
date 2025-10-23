import { Container, Row, Col } from "react-bootstrap";
import MainProfile from "../components/MainProfile";
import MainPostCreator from "../components/MainPostCreator";
import Advertising from "../components/Advertising";
import LinkedNews from "../components/LinkedNews";
import PostLinkedin from "../components/PostLinkedin";
import AdvisedProfile from "../components/AdvisedProfile";
import PostList from "../components/PostsList";


const Home = () => {
  return (
    <Container>
      <Row className="g-0 ">
        {/* main content */}
        <Col className="p-1 left-sidebar-width" lg={3}>
          <MainProfile />
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
