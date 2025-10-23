import { Container, Row, Col } from "react-bootstrap";
import { HiUserAdd } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { LuRepeat2 } from "react-icons/lu";
import { BsSendFill } from "react-icons/bs";

const PostLinkedin = () => {
  return (
    <Container>
      <Row>
        <Col className="mt-3 p-0">
          <div className="bg-white  rounded-2 border">
            {/* Posts users */}
            <div className="d-flex flex-column justify-content-between px-3 py-3">
              {/* Profiles */}
              <div className="d-flex flex-column ">
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      className="rounded-circle mt-3"
                      width={48}
                      height={48}
                      src="https://img.freepik.com/vettori-premium/icona-predefinita-del-profilo-dell-avatar-immagine-dell-utente-dei-social-media-icona-dell-avatar-grigio-silhouette-del-profilo-vuoto-illustrazione-vettoriale_561158-3485.jpg?w=360"
                      alt="profileImg"
                    />
                    <div className="flex-column">
                      <div className="m-3">
                        <h5>Name Surname</h5>
                        <span className="text-muted">Role</span>
                      </div>
                      <div className="m-3">
                        <h6>Title post</h6>
                        <p className="text-muted">Text</p>
                        <p className="text-muted">Image</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-column">
                    <div className="text-end fs-4 mb-1">
                      <button className="rounded-display">
                        <AiOutlineClose className="mt-2 mx-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* line horizontal */}
            <hr className="mx-4" />
            <Container>
              <div className="d-flex justify-content-between mx-2">
                <button className="showall-btn rounded-2 mb-1 fw-medium" style={{ height: "41px" }}>
                  <AiOutlineLike className="fw-5" /> Consiglia
                </button>
                <button className="showall-btn rounded-2 mb-1 fw-medium" style={{ height: "41px" }}>
                  <BiMessageRoundedDetail className="fw-5" /> Commenta
                </button>
                <button className="showall-btn rounded-2 mb-1 fw-medium" style={{ height: "41px" }}>
                  <LuRepeat2 className="fw-5" /> Diffondi il post
                </button>
                <button className="showall-btn rounded-2 mb-1 fw-medium" style={{ height: "41px" }}>
                  <BsSendFill className="fw-5" /> Invia
                </button>
              </div>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PostLinkedin;
