import { Container, Row, Col } from "react-bootstrap";

const MainPostCreator = () => {
  return (
    <Container className="bg-white rounded-3 my-4">
      {/* post creation */}
      <Row className="">
        <Col className="d-flex justify-content-between p-3">
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
        <Col className="d-flex justify-content-between p-3"></Col>
      </Row>
      {/* file type */}
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default MainPostCreator;
