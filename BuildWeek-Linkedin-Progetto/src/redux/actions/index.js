import { jobsFetchAllApi } from "../../api/jobsApi";

export const GET_EXPERIENCES = "GET_EXPERIENCES";
export const getExperiencesAction = (data) => ({
  type: GET_EXPERIENCES,
  payload: data,
});


export const fetchExperiencesAction= (baseUrl,apiKey) => {

    return async (dispatch) => { try {
      const response = await fetch(baseUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        /* setExperiences(data); */
         dispatch(getExperiencesAction(data));
      } else {
        console.error("Errore nel caricamento delle esperienze");
      }
    } catch (error) {
      console.error(error);
    }}
}

export const GET_JOBS = "GET_JOBS";
export const getJobsAction = (data) => ({
  type: GET_JOBS,
  payload: data,
});

export const fetchJobsAction = () => {
  return async (dispatch) => {
    try {
      const result = await jobsFetchAllApi();
      if (result && result.data) {
        dispatch(getJobsAction(result.data));
      }
    } catch (error) {
      console.error(error);
    }
  };
}