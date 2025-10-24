const apiUrl = "https://striveschool-api.herokuapp.com/api/posts/";
const apiKey = import.meta.env.VITE_LINKEDIN_KEY;

// get method for the list
export const getAllPosts = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("fetch articles list failed");
    }
  } catch (error) {
    console.error(error);
   
  }
};

// get method for id
export const getPostById = async (postId) => {
  try {
    const response = await fetch(`${apiUrl}${postId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`fetch article by id failed: ${postId}`);
    }
  } catch (error) {
    console.error(error);
    
  }
};

// post method to create
export const createPost = async (postData) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ 
        text: postData.text,
        image: postData.image,
        username: postData.username || "Dobri Dobrev"
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("create article failed");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// put method to update
export const updatePost = async (postId, postData) => {
  try {
    const response = await fetch(`${apiUrl}${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ text: postData.text }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`update article by id failed: ${postId}`);
    }
  } catch (error) {
    console.error(error);
   
  }
};

// delete method
export const deletePost = async (postId) => {
  try {
    const response = await fetch(`${apiUrl}${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (response.ok) {
      return true;
    } else {
      throw new Error(` post delete failed with id: ${postId}`);
    }
  } catch (error) {
    console.error(error);
    
  }
};
