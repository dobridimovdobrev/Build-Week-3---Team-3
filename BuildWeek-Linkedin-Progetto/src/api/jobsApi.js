const baseUrl = "https://striveschool-api.herokuapp.com/api/posts/";
const apiKey = import.meta.env.VITE_LINKEDIN_KEY;


export const jobsFetchAll = async () => {

    try {
        const response = await fetch(baseUrl, {
            method: "GET",
            headers:{
                "Content-Type":"application/json",
                authorization: `bearer ${apiKey}`
            }          
        });

        if(response.ok){
            const data = await response;
            console.log(data);
            
        }else{
            throw new Error("Fetch jobs list failed");
        }

    } catch (error) {
        console.log(error);
    }

}