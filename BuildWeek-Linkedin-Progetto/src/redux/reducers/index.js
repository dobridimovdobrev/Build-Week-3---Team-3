import { GET_EXPERIENCES } from "../actions";

const initialState = {
  experiences: {
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

    default:
      return state;
  }
};

export default mainReducer;
