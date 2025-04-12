// frontend/src/components/AddContact.js
import React, { useState } from 'react';
import axios from 'axios';

const AddContact = ({ onContactAdded }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [designation, setDesignation] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !designation) {
      setMessage('All fields are required!');
      return;
    }

    const newContact = { name, email, phone, designation };

    try {
      const response = await axios.post('http://localhost:3002/api/contacts', newContact);
      setMessage(`Contact added: ${response.data.name}`);
      setName('');
      setEmail('');
      setPhone('');
      setDesignation('');
      onContactAdded(); // Refresh list
    } catch (error) {
      setMessage('Error adding contact.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type="text" placeholder="Designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
        <button type="submit">Add Contact</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddContact;


/*
// src/components/AddContact.js
import React, { useState } from 'react';
import axios from 'axios';

const AddContact = ({ contacts, setContacts }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation check
    if (!name || !email) {
      setMessage('Please fill out all fields.');
      return;
    }

    const newContact = { name, email };

    try {
      const response = await axios.post('http://localhost:3002/api/contacts', newContact);
      setMessage(`Contact added successfully: ${response.data.name}`);
      setName('');
      setEmail('');

      // Update the state directly without re-fetching from the server
      setContacts([...contacts, response.data]); // Add the new contact to the state
    } catch (error) {
      setMessage('Error adding contact. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <button type="submit">Add Contact</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default AddContact;
*/

/*// src/components/AddContact.js

import React, { useState } from 'react';
import axios from 'axios';

const AddContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); // New state for phone
  const [designation, setDesignation] = useState(''); // New state for designation
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation check
    if (!name || !email || !phone || !designation) {
      setMessage('Please fill out all fields.');
      return;
    }

    const newContact = { name, email, phone, designation };

    try {
      const response = await axios.post('http://localhost:3002/api/contacts', newContact);
      setMessage(`Contact added successfully: ${response.data.name}`);
      setName('');
      setEmail('');
      setPhone('');
      setDesignation('');
    } catch (error) {
      setMessage('Error adding contact. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone"
          />
        </div>
        <div>
          <label>Designation:</label>
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            placeholder="Enter designation"
          />
        </div>
        <button type="submit">Add Contact</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default AddContact;

*/

/*  Old code
import React, { useState } from 'react';
import axios from 'axios';

const AddContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation check
    if (!name || !email) {
      setMessage('Please fill out all fields.');
      return;
    }

    const newContact = { name, email };

    try {
      const response = await axios.post('http://localhost:3002/api/contacts', newContact);
      setMessage(`Contact added successfully: ${response.data.name}`);
      setName('');
      setEmail('');
    } catch (error) {
      setMessage('Error adding contact. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '10px' }}>Add Contact</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default AddContact;
*/
