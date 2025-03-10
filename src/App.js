import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {

  return (
    <div className="boxes">
      <Provider store={store}>
        <div className="box">
          <Header />
          <AddedFeatures />
        </div>
        <div className="box">
          <AdditionalFeatures />
          <Total />
        </div>
      </Provider>
    </div>
  );
};

export default App;
