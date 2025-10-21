import Profile from "../components/Profile";
import Sidebar from "../components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row className="g-0">
        {/* main content */}
        <Col className="p-1" lg={8}>
          <Profile />
        </Col>
        {/* sidebar */}
        <Col className="p-1" lg={4}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
