/* eslint-disable no-console */
import React from 'react';

const App = () => {
  fetch('/api/star-wars')
    .then(res => res.json())
    .then(data => console.log(data));

  return <h1>Hello Star Wars!</h1>;
};

export default App;
