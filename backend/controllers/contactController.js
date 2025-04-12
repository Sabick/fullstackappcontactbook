// backend/controllers/contactController.js
const asyncHandler = require("express-async-handler");
const Contact = require("../models/Contact");

// @desc Get all contacts
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

// @desc Create new contact
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone, designation } = req.body;

  if (!name || !email || !phone || !designation) {
    res.status(400);
    throw new Error("All fields are required!");
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
    designation,
  });

  res.status(201).json(contact);
});

// @desc Get a contact
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

// @desc Update a contact
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedContact);
});

// @desc Delete a contact
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: `Contact ${req.params.id} deleted` });
});

module.exports = {
  createContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact,
};



/*
const Contact = require("../models/Contact");
const asyncHandler = require("express-async-handler");

// @desc Get all contacts
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

// @desc Create a new contact
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone, designation } = req.body;

  if (!name || !email || !phone || !designation) {
    res.status(400);
    throw new Error("All fields are required!");
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
    designation,
  });

  res.status(201).json(contact);
});

// @desc Get a single contact
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  res.status(200).json(contact);
});

// @desc Update a contact
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});

// @desc Delete a contact
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }

  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: `Contact ${req.params.id} deleted` });
});

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };

*/


/*//Requires all field
const Contact = require("../models/Contact");
const asyncHandler = require("express-async-handler");

// @desc Create new contact
// POST /api/contacts
const createContact = asyncHandler(async (req, res) => {
  try {
    const { name, email, phone, designation } = req.body;

    if (!name || !email || !phone || !designation) {
      res.status(400);
      throw new Error("All fields are required!");
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      designation,
    });

    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = { createContact, getContacts, getContact, updateContact, deleteContact };


*/

/*  Old code
// contactController.js
const Contact = require("../models/Contact")
const asyncHandler = require("express-async-handler");


const getContacts = asyncHandler (async (req, res) =>  {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});
  
// @desc Create new contacts
// // contactController.js
// POST /api/contacts

const createContact = asyncHandler (async (req, res) => {
    try {
        const {name, email, phone, designation} = req.body;
        if (!name || !email || !phone || !designation)
         {
         res.status(400);
         throw new Error("All fields are required!");
         }
         const contact = await Contact.create({
            name, email, phone, designation
         });
         res.status(201).json(contact);
    } catch(error) {
        res.status(500).json({error: error.message});

    }
 
  });

// @desc get single new contacts
// // contactController.js
// POST /api/contacts/:id

const getContact = asyncHandler (async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("Contact Not Found")
    }
    res.status(200).json(contact);
  });

// @desc update new contacts
// // contactController.js
// POST /api/contacts/:id

const updateContact = asyncHandler (async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact){
      console.error("Contact not found", req.params.id);
        res.status(404);
        throw new Error("Contact Not Found")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id, 
        req.body,
        {new: true}
    );
    console.log("Updated Contact", updatedContact);
    res.status(200).json(updatedContact);
  });

// @desc delete new contacts
// // contactController.js
// POST /api/contacts/:id

const deleteContact = asyncHandler( async (req, res) => {
  if (!contact){
    console.error("Contact not found", req.params.id);
      res.status(404);
      throw new Error("Contact Not Found")
  }
  await Contact.deleteOne({_id: req.params.id})
    res.status(200).json({message: `Delete  Contact  fors ${req.params.id}`});
  });

  module.exports = {getContacts, createContact, getContact, updateContact, deleteContact} // export just the function
  
*/

  