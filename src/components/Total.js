import React from 'react';
import { useSelector } from 'react-redux';

const Total = () => {
  const props = useSelector(state => state.feature);

  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

export default Total;
