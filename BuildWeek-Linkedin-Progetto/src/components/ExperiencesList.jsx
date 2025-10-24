import Experience from "./Experience";
import CreateExperienceModal from "./CreateExperienceModal";
import UpdateExperienceModal from "./UpdateExperienceModal";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperiencesAction, GET_EXPERIENCES, getExperiencesAction } from "../redux/actions";


const ExperiencesList = () => {
 /*  const [experiences, setExperiences] = useState([]); */
  const userId = "68f6048d6dfc200015d39891";
  const baseUrl = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;
  const apiKey = import.meta.env.VITE_LINKEDIN_KEY;
  
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experiences.list);

  const ExperienceListApi = async () => {
    try {
      const response = await fetch(baseUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        /* setExperiences(data); */
        /* dispatch({type:GET_EXPERIENCES, payload:data}); */
        dispatch(getExperiencesAction(data));
      } else {
        throw new Error("Fetch experience list failed");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
   /*  ExperienceListApi(); */
    dispatch(fetchExperiencesAction(baseUrl, apiKey));
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
