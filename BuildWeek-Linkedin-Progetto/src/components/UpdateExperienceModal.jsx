import { BsPencil } from "react-icons/bs";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const UpdateExperienceModal = (props) =>{

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow}>
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
         {/* experience head title */}
        <Modal.Header closeButton>
          <Modal.Title>Modifica esperienza</Modal.Title>
        </Modal.Header>
        {/* experience content */}
        <Modal.Body>
          {/* Form */}
          <Form>
            {/*Role */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-muted custom-font">
                Qualifica *
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Retail Sales Manager"
                autoFocus
              />
            </Form.Group>
            {/* Company*/}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-muted custom-font">
                Azienda o organizzazione*
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Microsoft"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="d-flex gap-3 mb-3"
              controlId="exampleForm.ControlInput1"
              >
              {/* start date */}
              <div  className="w-100">
                <Form.Label className="text-muted custom-font">
                  Data inizio
                </Form.Label>
                <Form.Control type="date" autoFocus />
              </div>
              {/* end date */}
              <div className="w-100">
                <Form.Label className="text-muted custom-font">
                  Data fine
                </Form.Label>
                <Form.Control type="date" autoFocus />
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
              />
            </Form.Group>
            {/* Area City*/}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-muted custom-font">
                Localita *
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Rimini"
                autoFocus
              />
            </Form.Group>
            {/* Upload image */}
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label className="text-muted custom-font">Carica immagine *</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Aggiungi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateExperienceModal;