import React from 'react';
import { useDispatch } from 'react-redux';
import { REMOVE_FEATURE } from '../redux/types';

const AddedFeature = props => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: REMOVE_FEATURE,
      payload: {
        id: props.feature.id
      }
    });
  };
  return (
    <li>
      <button className="button" onClick={handleClick}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
