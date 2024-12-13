import {INCREMET} from '../types/counterTypes';

export const incrementCount = () => {
  return async dispatch => {
    dispatch({
      type: INCREMET,
    });
  };
};
