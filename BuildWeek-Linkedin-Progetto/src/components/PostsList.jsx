import { useState, useEffect } from "react";

const PostList = () => {
  const [articles, setArticles] = useState([]);

  /* const userId = "68f6048d6dfc200015d39891"; */
  const url = "https://striveschool-api.herokuapp.com/api/posts/";
  const apiKey = import.meta.env.VITE_LINKEDIN_KEY;

  /* const [isLoading, setIsLoading] = useState(false); */

  const PostsFetchApi = async () =>{
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

            console.log(data);
            
            setArticles(data);

          } else {
            throw new Error("Fetch articles list failed");
          }
        } catch (error) {
          console.log(error);
        }
      }
    
      useEffect(() => {
        PostsFetchApi();
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);





      return (<p>Hello</p>
    
    
      );
  }
  
  
  
  
  






export default PostList;
