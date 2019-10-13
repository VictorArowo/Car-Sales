import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_FEATURE } from '../redux/types';

const AdditionalFeature = props => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: ADD_FEATURE,
      payload: {
        id: props.feature.id
      }
    });
  };
  return (
    <li>
      <button className="button" onClick={handleClick}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
