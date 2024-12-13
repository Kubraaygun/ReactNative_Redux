import {DECREMET, INCREMET} from '../types/counterTypes';

export const incrementCount = () => {
  return async dispatch => {
    dispatch({
      type: INCREMET,
    });
  };
};

export const decrementCount = () => {
  return async dispatch => {
    dispatch({
      type: DECREMET,
    });
  };
};

export const incrementCount = () => {
  return async dispatch => {
    dispatch({
      type: INCREMET,
    });
  };
};
