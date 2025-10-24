import { useState } from "react";
import { Container, Row, Col, Modal, Form, Button, Alert } from "react-bootstrap";
import { AiOutlineClose, AiOutlineLike } from "react-icons/ai";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { LuRepeat2 } from "react-icons/lu";
import { BsSendFill, BsThreeDots } from "react-icons/bs";
import { deletePost, updatePost } from "../api/postsApi";

const PostList = ({ post, onPostDeleted }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editText, setEditText] = useState("");
  const [editImage, setEditImage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleDeletePost = async () => {
    try {
      await deletePost(post._id);
      if (onPostDeleted) {
        onPostDeleted();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditPost = () => {
    setEditText(post.text || "");
    setEditImage(post.image || "");
    setShowEditModal(true);
    setError(null);
    setSuccess(false);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    if (!editText.trim()) {
      setError("Il testo del post non può essere vuoto");
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);
      
      await updatePost(post._id, { 
        text: editText,
        image: editImage
      });
      
      setSuccess(true);
      
      setTimeout(() => {
        handleCloseModal();
        if (onPostDeleted) {
          onPostDeleted(); 
        }
      }, 1500);
    } catch (error) {
      console.error("Errore nell'aggiornamento del post:", error);
      setError("Si è verificato un errore durante l'aggiornamento del post.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Modal show={showEditModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Modifica post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">Post aggiornato con successo!</Alert>}
          
          <Form onSubmit={handleSubmitEdit}>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Di cosa vuoi parlare?"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                disabled={isSubmitting}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>URL Immagine</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci l'URL dell'immagine"
                value={editImage}
                onChange={(e) => setEditImage(e.target.value)}
                disabled={isSubmitting}
              />
              {editImage && (
                <div className="mt-2">
                  <img 
                    src={editImage} 
                    alt="Anteprima" 
                    style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'contain' }} 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x200?text=Immagine+non+valida';
                    }}
                  />
                </div>
              )}
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button 
                variant="primary" 
                type="submit" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Aggiornamento in corso..." : "Aggiorna"}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      
      <Container>
        <Row>
          <Col className="p-0">
            <div className="bg-white rounded-2 border">
            <div className="d-flex flex-column justify-content-between px-3 py-3">
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      className="rounded-circle mt-3"
                      width={48}
                      height={48}
                      src={post.user?.image || "https://img.freepik.com/vettori-premium/icona-predefinita-del-profilo-dell-avatar-immagine-dell-utente-dei-social-media-icona-dell-avatar-grigio-silhouette-del-profilo-vuoto-illustrazione-vettoriale_561158-3485.jpg?w=360"}
                      alt="profileImg"
                    />
                    <div className="flex-column">
                      <div className="m-3">
                        <h5>{post.user ? `${post.user.name} ${post.user.surname}` : post.username}</h5>
                        <span className="text-muted">{new Date(post.createdAt).toLocaleDateString()}</span>
                      </div>
                      <div className="m-3">
                        <p>{post.text}</p>
                        {post.image && (
                          <div className="mt-2">
                            <img 
                              src={post.image} 
                              alt="Immagine del post" 
                              style={{ maxWidth: '100%', borderRadius: '8px' }}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.style.display = 'none';
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex-column">
                    <div className="text-end fs-4 mb-1 d-flex">
                      <button 
                        className="rounded-display border-0 bg-transparent"
                        onClick={handleEditPost}
                      >
                        <BsThreeDots className="mt-2 mx-1" />
                      </button>
                      <button 
                        className="rounded-display border-0 bg-transparent"
                        onClick={handleDeletePost}
                      >
                        <AiOutlineClose className="mt-2 mx-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
    </>
  );
};

export default PostList;
