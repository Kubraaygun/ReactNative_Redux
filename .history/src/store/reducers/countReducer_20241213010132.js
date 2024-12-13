import {DECREMET, INCREMET, RESET} from '../types/counterTypes';

const initialState = {
  count: 0,
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

    default:
      return state;
  }
};
export default initialState;
