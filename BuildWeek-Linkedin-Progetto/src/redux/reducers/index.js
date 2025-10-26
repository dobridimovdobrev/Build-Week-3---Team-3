import { GET_EXPERIENCES, GET_JOBS } from "../actions";

const initialState = {
  experiences: {
    list: [],
  },
  jobs: {
    list: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCES:
      return {
        ...state,
        experiences: { ...state.experiences, list: action.payload },
      };

    case GET_JOBS:
      return {
        ...state,
        jobs: { ...state.jobs, list: action.payload },
      };

    default:
      return state;
  }
};

export default mainReducer;
