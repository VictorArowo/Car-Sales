import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { useSelector } from 'react-redux';

const AdditionalFeatures = () => {
  const props = useSelector(state => state.feature);

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
