// src/index.js

import React from 'react';         // Import React
import ReactDOM from 'react-dom';  // Import ReactDOM for rendering React components
import App from './App';           // Import the main App component
import './index.css';              // Import global styles

// Rendering the App component to the root div
ReactDOM.render(
  <React.StrictMode>
    <App />  {/* The App component */}
  </React.StrictMode>,
  document.getElementById('root')  // Renders into the element with id 'root' in index.html
);
