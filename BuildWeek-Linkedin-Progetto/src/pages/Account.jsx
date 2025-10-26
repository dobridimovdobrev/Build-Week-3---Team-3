import Profile from "../components/profile/Profile";
import ExperiencesList from "../components/experiences/ExperiencesList";
import Sidebar from "../components/sidebars/right-sidebar/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import SideConsulted from "../components/sidebars/right-sidebar/SideConsulted";
import KnownUsers from "../components/sidebars/right-sidebar/KnownUsers";
import Advertising from "../components/sidebars/right-sidebar/Advertising";

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
