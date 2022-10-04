import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './container_1';
import Container2 from './container_2';
import Container3 from './container_3';
import Container4 from './container_4';
import Container5 from './container_5';
import Container6 from './cotainer_6';


// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Container2/>
    <Container3/>
    <Container4/>
    <Container5/>
    <Container6/>
  </React.StrictMode>
);

// reportWebVitals();
