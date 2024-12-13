import {ADD_COUNT, DECREMET, INCREMET, RESET} from '../types/counterTypes';

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

export const resetCount = () => {
  return async dispatch => {
    dispatch({
      type: RESET,
    });
  };
};

export const addCount = count => {
  return async dispatch => {
    dispatch({
      type: ADD_COUNT,
      payload: count,
    });
  };
};
