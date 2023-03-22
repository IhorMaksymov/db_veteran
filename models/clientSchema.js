const { Schema, model } = require('mongoose');
const Joi = require('joi');

const clientSchema = Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact']
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: [true, 'Set phone for contact'],
        minlength: 6
    }
    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'adnim',
    // }
}, { versionKey: false });

const updateClientSchema = Joi.object({
    email: Joi.string().required(),
    phone: Joi.string().required(),
    name: Joi.string().required(),
});

const Client = model('client', clientSchema);

module.exports = {
    Client,
    updateClientSchema,
};