import { Container, Row, Col } from "react-bootstrap";
import { IoLogoYoutube } from "react-icons/io";
import { HiOutlinePhoto } from "react-icons/hi2";
import { HiOutlineNewspaper } from "react-icons/hi2";

const MainPostCreator = () => {
  return (
    <Container className="bg-white rounded-3 my-4">
      {/* post creation */}
      <Row className="align-items-baseline" style={{ maxHeight: "66px" }}>
        <Col xl={1} className="d-flex p-3">
          <div>
            <img
              className="rounded-circle "
              width={48}
              height={48}
              src="https://media.licdn.com/dms/image/v2/D4D35AQHFJd2I_oy15A/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1706905293996?e=1761577200&v=beta&t=7Ce6ci5DVj05UJAXAcOzFCNFr6lmqQ63DyctmefRxRE"
              alt=""
            />
          </div>
        </Col>
        <Col xl={11} className="d-flex mt-1 p-3 pb-0">
          <div className="input-group ">
            <input type="text" className="form-control rounded-pill home-post-button" style={{ height: "48px" }} placeholder="Crea un post" />
          </div>
        </Col>
      </Row>
      {/* file type */}
      <Row className="justify-content-evenly align-items-baseline" style={{ maxHeight: "66px" }}>
        <Col xl={11} className="d-flex ">
          <Col xl={4} className=" p-2">
            <button className="home-post-button rounded-2 py-3">
              <IoLogoYoutube className="fs-4 text-success me-1 mb-1" />
              Video
            </button>
          </Col>
          <Col xl={4} className=" p-2">
            <button className="home-post-button rounded-2 py-3">
              <HiOutlinePhoto className="fs-4 text-primary me-1 mb-1" />
              Foto
            </button>
          </Col>
          <Col xl={4} className=" p-2">
            <button className="home-post-button rounded-2 py-3">
              <HiOutlineNewspaper className="fs-4 text-danger-emphasis me-1 mb-1" />
              Scrivi un articolo
            </button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPostCreator;
