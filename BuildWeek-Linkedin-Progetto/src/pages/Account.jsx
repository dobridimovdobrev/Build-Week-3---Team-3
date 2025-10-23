import Profile from "../components/Profile";
import ExperiencesList from "../components/ExperiencesList";
import Sidebar from "../components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import SideConsulted from "../components/SideConsulted";
import KnownUsers from "../components/KnownUsers";
import Advertising from "../components/Advertising";

const Account = () => {
  return (
    <Container>
      <Row className="gap-3">
        {/* main content */}
        <Col className="p-1" lg={8}>
          <Profile />
          <ExperiencesList />
        </Col>
        {/* sidebar */}
        <Col className="p-1 custom-width" lg={4}>
          <Sidebar />
          <SideConsulted />
          <Advertising />
          <KnownUsers />
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
