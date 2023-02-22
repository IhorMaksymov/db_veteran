const Joi = require('joi');

const Contact = require('../models/contact');

const {
    HttpError,
    ctrlWrapper
} = require('../helpers');

const addSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
})

const getAll = async (req, res) => {
        const contacts = await Contact.find({}, 'name email phone');
        res.status(200).json(contacts);
}

const getById = async (req, res) => {
        const { id } = req.params;
        const contactById = await Contact.findById(id);
        if (!contactById) { 
            throw HttpError(404, 'Not found'); 
        }
        res.status(200).json(contactById);
}

const addNewContact = async (req, res) => {    
        const contacts = await Contact.create(req.body);
        res.status(201).json(contacts); 
}

const updateById = async (req, res) => {
    const { id } = req.params;
    const updataContact = await Contact.findByIdAndUpdate(id, req.body, {new: true});
    if (!updataContact) {
        throw HttpError(404, 'Not found')
    }
    res.status(200).json(updataContact)
}

const removeById = async (req, res) => {
    const { id } = req.params;
    const removeContact = await Contact.findByIdAndRemove(id);
    if (!removeContact) {
        throw HttpError(404, 'Not found')
    }
    res.json({message: 'Contact deleted'})
}

module.exports = {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    addNewContact: ctrlWrapper(addNewContact),
    updateById: ctrlWrapper(updateById),
    removeById: ctrlWrapper(removeById),
}