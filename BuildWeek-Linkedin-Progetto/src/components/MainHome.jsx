import Sidebar from "../components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import SideConsulted from "../components/SideConsulted";
import KnownUsers from "../components/KnownUsers";
import MainProfile from "./MainProfile";
import MainPostCreator from "./MainPostCreator";

const MainHome = () => {
  return (
    <Container>
      <Row className="g-0 ">
        {/* main content */}
        <Col className="p-1 left-sidebar-width" lg={3}>
          <MainProfile />
        </Col>
        <Col className="p-1" lg={6}>
          <MainPostCreator />
        </Col>
        {/* sidebar */}
        <Col className="p-1" lg={3}>
          <Sidebar />
          <SideConsulted />
          <KnownUsers />
        </Col>
      </Row>
    </Container>
  );
};

export default MainHome;
