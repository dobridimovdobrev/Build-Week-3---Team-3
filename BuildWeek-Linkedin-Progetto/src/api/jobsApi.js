const baseUrl = "https://strive-benchmark.herokuapp.com/api/jobs?&limit=10 ";
const apiKey = import.meta.env.VITE_LINKEDIN_KEY;


export const jobsFetchAllApi = async () => {

    try {
        const response = await fetch(baseUrl, {
            method: "GET",
            headers:{
                "Content-Type":"application/json",
                authorization: `bearer ${apiKey}`
            }          
        });

        if(response.ok){
            const data = await response.json();
            /* console.log("Questo console e della data", data); */
            return data;
            
        }else{
            throw new Error("Fetch jobs list failed");
        }

    } catch (error) {
        console.log(error);
    }

}