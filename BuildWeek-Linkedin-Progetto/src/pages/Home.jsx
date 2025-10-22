import Profile from "../components/Profile";
import ExperiencesList from "../components/ExperiencesList";
import Sidebar from "../components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import SideConsulted from "../components/SideConsulted";
import KnownUsers from "../components/KnownUsers";

const Home = () => {
  return (
    <Container>
      <Row className="g-0">
        {/* main content */}
        <Col className="p-1" lg={8}>
          <Profile />
          <ExperiencesList />
        </Col>
        {/* sidebar */}
        <Col className="p-1" lg={4}>
          <Sidebar />
          <SideConsulted />
          <KnownUsers />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
