const { Schema, model } = require('mongoose');

const contactShema = Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
}, {versionKey: false, timestamps: true});

const Contact = model('contact', contactShema);

module.exports = Contact;