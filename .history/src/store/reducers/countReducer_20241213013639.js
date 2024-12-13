import {ADD_COUNT, DECREMET, INCREMET, RESET} from '../types/counterTypes';

const initialState = {
  count: 1,
};
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMET:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMET:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    case ADD_COUNT:
      return {
        ...state,
        count: action.payload,
      };

    default:
      return state;
  }
};
export default countReducer;
