import { Container, Row, Col } from "react-bootstrap";

const LinkedNews = () => {
  return (
    <Container>
      <Row>
        <Col className="mt-4 p-0">
          <div className="bg-white rounded-2 border">
            {/* Consulted Profiles */}
            <div className="d-flex flex-column justify-content-between px-3 py-3">
              <div>
                <h4>LinkedIn Notizie</h4>
                <p className="text-muted">Storie principali</p>
              </div>
              {/* Profiles */}
              <div className="mt-1 px-3 py-3">
                <h6>Le Top Startups 2025 in Italia</h6>
                <p className="text-muted fs-6">8 giorni fa • 4'867 lettori</p>
              </div>
              <div className="mt-1 px-3 py-3">
                <h6>Le Top Startups 2025 in Italia</h6>
                <p className="text-muted fs-6">8 giorni fa • 4'867 lettori</p>
              </div>
              <div className="mt-1 px-3 py-3">
                <h6>Le Top Startups 2025 in Italia</h6>
                <p className="text-muted fs-6">8 giorni fa • 4'867 lettori</p>
              </div>
              <div className="mt-1 px-3 py-3">
                <h6>Le Top Startups 2025 in Italia</h6>
                <p className="text-muted fs-6">8 giorni fa • 4'867 lettori</p>
              </div>
              <div className="mt-1 px-3 py-3">
                <h6>Le Top Startups 2025 in Italia</h6>
                <p className="text-muted fs-6">8 giorni fa • 4'867 lettori</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LinkedNews;
