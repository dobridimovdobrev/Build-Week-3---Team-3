import { Container, Row, Col, NavLink } from "react-bootstrap";
import { HiUserAdd } from "react-icons/hi";

const Connections = () => {
  return (
    <Container>
      <Row>
        <Col className="mt-3 p-0">
          <div className="bg-white rounded-2">
            {/* Connections */}
            <div className="d-flex justify-content-between px-3 py-3">
              <NavLink className="lh-1 connection-link ">
                <h6>Collegamenti</h6>
                <p className="text-muted fs-6">Espandi la tua rete</p>
              </NavLink>
              <button className="d-flex">
                <HiUserAdd className="fs-5" />
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Connections;
