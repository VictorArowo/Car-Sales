import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => props.removeFeature(props.feature.id)}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(
  null,
  actions
)(AddedFeature);
