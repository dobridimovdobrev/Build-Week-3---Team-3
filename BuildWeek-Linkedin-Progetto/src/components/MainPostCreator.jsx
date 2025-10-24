import { useState } from "react";
import { Container, Row, Col, Modal, Form, Button, Alert } from "react-bootstrap";
import { IoLogoYoutube } from "react-icons/io";
import { HiOutlinePhoto } from "react-icons/hi2";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { createPost } from "../api/postsApi";

const MainPostCreator = ({ onPostCreated }) => {
  const [showModal, setShowModal] = useState(false);
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
    setPostText("");
    setPostImage("");
    setError(null);
    setSuccess(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!postText.trim()) {
      setError("Il testo del post non può essere vuoto");
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);

      const newPost = await createPost({
        text: postText,
        image: postImage,
        username: "Dobri Dobrev",
      });

      setSuccess(true);
      setPostText("");
      setPostImage("");

      if (onPostCreated) {
        onPostCreated(newPost);
      }

      setTimeout(() => {
        handleCloseModal();
        setSuccess(false);
      }, 1500);
    } catch (error) {
      console.error("Errore nella creazione del post:", error);
      setError("Si è verificato un errore durante la creazione del post.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Container className="bg-white rounded-3 mt-4">
        <Row className="align-items-baseline" style={{ maxHeight: "66px" }}>
          <Col xl={1} className="d-flex p-3">
            <div>
              <img
                className="rounded-circle"
                width={48}
                height={48}
                src="https://media.licdn.com/dms/image/v2/D4D35AQHFJd2I_oy15A/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1706905293996?e=1761577200&v=beta&t=7Ce6ci5DVj05UJAXAcOzFCNFr6lmqQ63DyctmefRxRE"
                alt=""
              />
            </div>
          </Col>
          <Col xl={11} className="d-flex mt-1 p-3 pb-0">
            <div className="input-group">
              <input
                type="text"
                className="form-control rounded-pill home-post-button"
                style={{ height: "48px" }}
                placeholder="Crea un post"
                onClick={handleOpenModal}
                readOnly
              />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-evenly align-items-baseline" style={{ maxHeight: "66px" }}>
          <Col xl={11} className="d-flex">
            <Col xl={4} className="p-2">
              <button className="home-post-button rounded-2 py-2" onClick={handleOpenModal}>
                <IoLogoYoutube className="fs-4 text-success me-1 mb-1" />
                Video
              </button>
            </Col>
            <Col xl={4} className="p-2">
              <button className="home-post-button rounded-2 py-2" onClick={handleOpenModal}>
                <HiOutlinePhoto className="fs-4 text-primary me-1 mb-1" />
                Foto
              </button>
            </Col>
            <Col xl={4} className="p-2">
              <button className="home-post-button rounded-2 py-2" onClick={handleOpenModal}>
                <HiOutlineNewspaper className="fs-4 text-danger-emphasis me-1 mb-1" />
                Scrivi un articolo
              </button>
            </Col>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Crea un post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">Post creato con successo!</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Di cosa vuoi parlare?"
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                disabled={isSubmitting}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>URL Immagine</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci l'URL dell'immagine"
                value={postImage}
                onChange={(e) => setPostImage(e.target.value)}
                disabled={isSubmitting}
              />
              {postImage && (
                <div className="mt-2">
                  <img
                    src={postImage}
                    alt="Anteprima"
                    style={{ maxWidth: "100%", maxHeight: "200px", objectFit: "contain" }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/400x200?text=Immagine+non+valida";
                    }}
                  />
                </div>
              )}
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Pubblicazione in corso..." : "Pubblica"}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MainPostCreator;
