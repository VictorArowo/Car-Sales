import { ADD_FEATURE, REMOVE_FEATURE } from '../types';

export const addFeature = id => {
  return {
    type: ADD_FEATURE,
    payload: {
      id
    }
  };
};

export const removeFeature = id => {
  return {
    type: REMOVE_FEATURE,
    payload: {
      id
    }
  };
};
