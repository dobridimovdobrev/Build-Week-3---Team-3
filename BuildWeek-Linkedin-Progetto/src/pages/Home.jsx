import Profile from "../components/Profile";
import Sidebar from "../components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row>
        {/* main content */}
        <Col lg={8}>
          <Profile />
        </Col>
        {/* sidebar */}
        <Col lg={4}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
