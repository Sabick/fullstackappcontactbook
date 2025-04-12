// frontend/src/App.js
import React from 'react';
import './App.css';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
      <h1>Contact Management App</h1>
      <ContactList />
    </div>
  );
}

export default App;
