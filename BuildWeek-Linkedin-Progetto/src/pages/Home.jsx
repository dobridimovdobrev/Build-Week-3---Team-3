import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import MainProfile from "../components/MainProfile";
import MainPostCreator from "../components/MainPostCreator";
import Advertising from "../components/Advertising";
import LinkedNews from "../components/LinkedNews";
import AdvisedProfile from "../components/AdvisedProfile";
import PostList from "../components/PostsList";
import { getAllPosts } from "../api/postsApi";

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [postsPerPage] = useState(20);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const data = await getAllPosts();
      
      const sortedPosts = [...data].sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      
      setAllPosts(sortedPosts);
      setVisiblePosts(sortedPosts.slice(0, postsPerPage));
      setError(null);
    } catch (error) {
      console.error("Errore nel caricamento dei post:", error);
      setError("Si è verificato un errore nel caricamento dei post.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePostCreated = (newPost) => {
    const updatedAllPosts = [newPost, ...allPosts];
    setAllPosts(updatedAllPosts);
    setVisiblePosts(updatedAllPosts.slice(0, postsPerPage));
  };
  
  const loadMorePosts = () => {
    const nextPosts = allPosts.slice(0, visiblePosts.length + postsPerPage);
    setVisiblePosts(nextPosts);
  };

  return (
    <Container>
      <Row className="g-0">
        <Col className="p-1 left-sidebar-width" lg={3}>
          <MainProfile />
        </Col>
        
        <Col className="p-1" lg={6}>
          <MainPostCreator onPostCreated={handlePostCreated} />
          <AdvisedProfile />
          
          {isLoading ? (
            <div className="bg-white rounded-2 border p-4 text-center mt-3">
              <p>Caricamento post in corso...</p>
            </div>
          ) : error ? (
            <div className="bg-white rounded-2 border p-4 text-center text-danger mt-3">
              <p>{error}</p>
            </div>
          ) : (
            <>
              {visiblePosts.map((post) => (
                <div key={post._id} className="mt-3">
                  <PostList post={post} onPostDeleted={() => fetchPosts()} />
                </div>
              ))}
              
              {visiblePosts.length < allPosts.length && (
                <div className="d-flex justify-content-center mt-4 mb-4">
                  <Button 
                    variant="outline-primary" 
                    onClick={loadMorePosts}
                    className="rounded-pill px-4"
                  >
                    Mostra altri post
                  </Button>
                </div>
              )}
            </>
          )}
        </Col>
        
        <Col className="p-1" lg={3}>
          <LinkedNews />
          <Advertising />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
