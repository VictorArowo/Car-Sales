import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const props = useSelector(state => state.feature);

  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

export default Header;
