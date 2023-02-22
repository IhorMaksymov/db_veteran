const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

// const contactsPath = path.join(__dirname, 'contacts.json');
const Contact = require('../models/contact');

// const getAll = async () => {
//     const data = await fs.readFile(contactsPath, 'utf-8');
//     return JSON.parse(data);
// }

// const getById = async (id) => {
//     const contacts = await getAll();
//     const result = contacts.find(item => item.id === id);
//     return result || null;
// }

// const add = async (req, res) => {
//     const contacts = await Contact.create(req.body);
//     res.status(200).json(contacts);
// }

// const update = async (id, data) => {
//     const { name, email, phone } = data;
//     const contacts = await getAll();
//     const upContact = contacts.find(contact => contact.id === id);

//     if (upContact) {
//         upContact.id = id;
//         upContact.name = name;
//         upContact.email = email;
//         upContact.phone = phone;
//     }
  
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

//   return upContact;
// }

// const deleteById = async (id) => {
//     const contacts = await getAll();
//     const newContacts = contacts.filter(contact => contact.id !== id);
//     await fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2));
//     return newContacts;
// }

// module.exports = {
//     getAll,
//     getById,
//     add,
//     update,
//     deleteById,
// }
// module.exports = {
//     add,
// }