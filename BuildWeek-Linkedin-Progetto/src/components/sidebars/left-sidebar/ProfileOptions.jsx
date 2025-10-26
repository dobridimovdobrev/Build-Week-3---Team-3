import { Container, Row, Col, NavLink } from "react-bootstrap";
import { FaBookmark } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { BiNews } from "react-icons/bi";
import { BsCalendarEvent } from "react-icons/bs";

const ProfileOptions = () => {
  return (
    <Container>
      <Row>
        <Col className="mt-3 p-0">
          <div className="bg-white rounded-2">
            {/* ProfileOptions */}
            <div className="d-flex justify-content-between px-3 pt-3 pb-1">
              <NavLink className="lh-1 connection-link ">
                <h6>
                  <FaBookmark /> Elementi salvati
                </h6>
              </NavLink>
            </div>
            <div className="d-flex justify-content-between px-3 py-1">
              <NavLink className="lh-1 connection-link ">
                <h6>
                  <HiUserGroup /> Gruppi
                </h6>
              </NavLink>
            </div>
            <div className="d-flex justify-content-between px-3 py-1">
              <NavLink className="lh-1 connection-link ">
                <h6>
                  <BiNews /> Newsletter
                </h6>
              </NavLink>
            </div>
            <div className="d-flex justify-content-between px-3 pt-1 pb-3">
              <NavLink className="lh-1 connection-link ">
                <h6>
                  <BsCalendarEvent /> Eventi
                </h6>
              </NavLink>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileOptions;
