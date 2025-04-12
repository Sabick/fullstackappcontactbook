// frontend/src/components/ContactList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddContact from './AddContact';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:3002/api/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div>
      <AddContact onContactAdded={fetchContacts} />
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact._id}>
            <strong>{contact.name}</strong> - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
