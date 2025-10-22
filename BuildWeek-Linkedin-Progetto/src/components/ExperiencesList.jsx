import Experience from "./Experience";
import CreateExperienceModal from "./CreateExperienceModal";
import UpdateExperienceModal from "./UpdateExperienceModal";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

const ExperiencesList = () => {
  const [experiences, setExperiences] = useState([]);
  const userId = "68f6048d6dfc200015d39891";
  const url = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;
  const apiKey = import.meta.env.VITE_LINKEDIN_KEY;

  const ExperienceListApi = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Questo e data:", data);
        setExperiences(data);
      } else {
        throw new Error("Fetch experience list failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ExperienceListApi();
    console.log(experiences);
  }, []);

  return (
    <Container className="bg-white rounded-3 my-2">
      <Container>
        {/* experience top */}
        <Row>
          <Col className="d-flex justify-content-between p-3">
            <h5>Esperienza</h5>
            <div className="d-flex gap-3">
              <CreateExperienceModal />
              <UpdateExperienceModal />
            </div>
          </Col>
        </Row>
        {/* experience body */}
        <Row>
          <Col>
            {experiences.map((experience) => {
              return (
                <Experience key={experience._id} experience={experience} />
              );
            })}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ExperiencesList;
