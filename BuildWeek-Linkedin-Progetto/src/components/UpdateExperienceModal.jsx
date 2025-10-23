import { BsPencil, BsTrash } from "react-icons/bs";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";
import Alert from "react-bootstrap/Alert";


const UpdateExperienceModal = (props) => {
  const [show, setShow] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [formData, setFormData] = useState({});
  const [successExperienceId, setSuccessExperienceId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [experienceToDelete, setExperienceToDelete] = useState(null);

  const userId = "68f6048d6dfc200015d39891";
  const baseUrl = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;
  const apiKey = import.meta.env.VITE_LINKEDIN_KEY;

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    fetchExperiences();
  };

  
  const fetchExperiences = async () => {
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
        setExperiences(data);
      } else {
        console.error("Errore nel caricamento delle esperienze");
      }
    } catch (error) {
      console.error(error);
    }
  };

  
  const handleSelect = (experience) => {
    setSelectedExperience(experience);
    
    
    const formatDate = (dateString) => {
      if (!dateString) return "";
      const date = new Date(dateString);
      return date.toISOString().split('T')[0];
    };
    
    setFormData({
      role: experience.role || "",
      company: experience.company || "",
      startDate: formatDate(experience.startDate),
      endDate: formatDate(experience.endDate),
      description: experience.description || "",
      area: experience.area || "",
      image: experience.image || ""
    });
  };

  
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const updateExperience = async (experienceId) => {
    try {
      const response = await fetch(`${baseUrl}/${experienceId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessExperienceId(experienceId);
        fetchExperiences(); 
        
        setTimeout(() => {
          setSuccessExperienceId(null);
        }, 3000);
      } else {
        console.error("Errore nell'aggiornamento dell'esperienza");
      }
    } catch (error) {
      console.error(error);
    }
  };

  
  const handleSubmit = (e, experienceId) => {
    e.preventDefault();
    updateExperience(experienceId);
  };

  
  const handleDeleteClick = (e, experience) => {
    e.stopPropagation(); 
    setExperienceToDelete(experience);
    setShowDeleteModal(true);
  };

 
  const deleteExperience = async (experienceId) => {
    try {
      const response = await fetch(`${baseUrl}/${experienceId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      });

      if (response.ok) {
        fetchExperiences();
        setShowDeleteModal(false);
      } else {
        console.error("Errore nell'eliminazione dell'esperienza");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* delete confirm modal */}
      <Modal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        centered
        size="md"
      >
        <Modal.Header closeButton>
          <Modal.Title>Conferma eliminazione</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {experienceToDelete && (
            <p>Sei sicuro di voler eliminare l'esperienza "{experienceToDelete.role}" presso {experienceToDelete.company}?</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Annulla
          </Button>
          <Button 
            variant="danger" 
            onClick={() => experienceToDelete && deleteExperience(experienceToDelete._id)}
          >
            Elimina
          </Button>
        </Modal.Footer>
      </Modal>

      <button 
        className="rounded-circle border-0 bg-white d-flex justify-content-center align-items-center"
        style={{ width: "40px", height: "40px" }}
        onClick={handleShow}
      >
        <BsPencil className="fs-5" />
      </button>

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modifica esperienza</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          {experiences.length === 0 ? (
            <p className="text-center py-3">Caricamento esperienze...</p>
          ) : (
            <Accordion>
              {experiences.map((experience, index) => (
                <Accordion.Item eventKey={index.toString()} key={experience._id}>
                  <Accordion.Header onClick={() => handleSelect(experience)}>
                    <div className="w-100 position-relative">
                      <div>
                        <strong>{experience.role}</strong> presso {experience.company}
                        <BsTrash 
                          className="text-danger ms-1 icon-align-top" 
                          style={{ cursor: 'pointer' }}
                          onClick={(e) => handleDeleteClick(e, experience)}
                        />
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Form onSubmit={(e) => handleSubmit(e, experience._id)}>
                      {/* Role */}
                      <Form.Group className="mb-3" controlId="formRole">
                        <Form.Label className="text-muted custom-font">
                          Qualifica *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Esempio: Retail Sales Manager"
                          name="role"
                          value={selectedExperience && selectedExperience._id === experience._id ? formData.role : ""}
                          onChange={handleInput}
                          required
                        />
                      </Form.Group>
                      
                      {/* Company */}
                      <Form.Group className="mb-3" controlId="formCompany">
                        <Form.Label className="text-muted custom-font">
                          Azienda o organizzazione *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Esempio: Microsoft"
                          name="company"
                          value={selectedExperience && selectedExperience._id === experience._id ? formData.company : ""}
                          onChange={handleInput}
                          required
                        />
                      </Form.Group>
                      
                      {/* Date */}
                      <Form.Group className="d-flex gap-3 mb-3" controlId="formDates">
                        {/* Start date */}
                        <div className="w-100">
                          <Form.Label className="text-muted custom-font">
                            Data inizio
                          </Form.Label>
                          <Form.Control
                            type="date"
                            name="startDate"
                            value={selectedExperience && selectedExperience._id === experience._id ? formData.startDate : ""}
                            onChange={handleInput}
                          />
                        </div>
                        {/* End date */}
                        <div className="w-100">
                          <Form.Label className="text-muted custom-font">
                            Data fine
                          </Form.Label>
                          <Form.Control
                            type="date"
                            name="endDate"
                            value={selectedExperience && selectedExperience._id === experience._id ? formData.endDate : ""}
                            onChange={handleInput}
                          />
                        </div>
                      </Form.Group>
                      
                      {/* Description */}
                      <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label className="text-muted custom-font">
                          Descrizione
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Inserisci testo ..."
                          name="description"
                          value={selectedExperience && selectedExperience._id === experience._id ? formData.description : ""}
                          onChange={handleInput}
                        />
                      </Form.Group>
                      
                      {/* Area */}
                      <Form.Group className="mb-3" controlId="formArea">
                        <Form.Label className="text-muted custom-font">
                          Località *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Esempio: Rimini"
                          name="area"
                          value={selectedExperience && selectedExperience._id === experience._id ? formData.area : ""}
                          onChange={handleInput}
                          required
                        />
                      </Form.Group>
                      
                      {/* Image */}
                      <Form.Group controlId="formImage" className="mb-3">
                        <Form.Label className="text-muted custom-font">
                          URL Immagine
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="image"
                          value={selectedExperience && selectedExperience._id === experience._id ? formData.image : ""}
                          onChange={handleInput}
                        />
                      </Form.Group>
                      
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          {successExperienceId === experience._id && (
                            <Alert variant="success" className="py-1 px-2 mb-0">Esperienza aggiornata con successo!</Alert>
                          )}
                        </div>
                        <Button type="submit" variant="primary">
                          Aggiorna
                        </Button>
                      </div>
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UpdateExperienceModal;
