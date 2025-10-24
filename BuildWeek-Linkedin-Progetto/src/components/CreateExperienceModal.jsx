import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { BsPlusLg } from "react-icons/bs";
import Alert from "react-bootstrap/Alert";
import { Container } from "react-bootstrap";
import { fetchExperiencesAction } from "../redux/actions";
import { useDispatch } from "react-redux";

const CreateExperienceModal = (props) => {
  const [showAlert, setShowAlert] = useState(false);

  const [show, setShow] = useState(false);

  const userId = "68f6048d6dfc200015d39891";
  const baseUrl = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;
  const apiKey = import.meta.env.VITE_LINKEDIN_KEY;
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    createExperienceApi();
  };

  const [formInputData, setFormInputData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
    image: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormInputData({ ...formInputData, [name]: value });
  };

  const createExperienceApi = async () => {
    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(formInputData),
      });

      if (response.ok) {
        /* const data = await response.json(); */
        setShowAlert(true);
        setFormInputData({
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          area: "",
          image: "",
        });

          //aggiorna la lista del experiences globalmente
        dispatch(fetchExperiencesAction(baseUrl, apiKey));

        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      } else {
        throw new Error("Create experience failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={handleShow}>
        <BsPlusLg className="fs-5" />
      </button>

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Form onSubmit={handleSubmit}>
          {/* experience  title */}
          <Modal.Header className="border-0" closeButton>
            <Modal.Title>Aggiungi esperienza</Modal.Title>
          </Modal.Header>
          {showAlert && (
            <Container className="mt-2">
              <Alert variant="success">Esperienza creata con successo!</Alert>
            </Container>
          )}

          <Modal.Body>
            {/*role */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-muted custom-font">
                Qualifica *
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Retail Sales Manager"
                autoFocus
                name="role"
                value={formInputData.role}
                onChange={handleInput}
              />
            </Form.Group>
            {/* company*/}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-muted custom-font">
                Azienda o organizzazione*
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Microsoft"
                autoFocus
                name="company"
                value={formInputData.company}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group
              className="d-flex gap-3 mb-3"
              controlId="exampleForm.ControlInput1"
            >
              {/* start date */}
              <div className="w-100">
                <Form.Label className="text-muted custom-font">
                  Data inizio
                </Form.Label>
                <Form.Control
                  type="date"
                  autoFocus
                  name="startDate"
                  value={formInputData.startDate}
                  onChange={handleInput}
                />
              </div>
              {/* end date */}
              <div className="w-100">
                <Form.Label className="text-muted custom-font">
                  Data fine
                </Form.Label>
                <Form.Control
                  type="date"
                  autoFocus
                  name="endDate"
                  value={formInputData.endDate}
                  onChange={handleInput}
                />
              </div>
            </Form.Group>

            {/* description */}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-muted custom-font">
                Descrizione
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Inserisci testo ..."
                name="description"
                value={formInputData.description}
                onChange={handleInput}
              />
            </Form.Group>
            {/* area*/}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-muted custom-font">
                Localita *
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Rimini"
                autoFocus
                name="area"
                value={formInputData.area}
                onChange={handleInput}
              />
            </Form.Group>
            {/* image */}
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label className="text-muted custom-font">
                Carica immagine *
              </Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={formInputData.image}
                onChange={handleInput}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="primary">
              Aggiungi
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default CreateExperienceModal;
