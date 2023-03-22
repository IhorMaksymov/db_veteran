const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const Joi = require('joi');

const adminSchema = Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    token: {
        type: String,
        default: null
    }
}, { versionKey: false, timestamps: true })

adminSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

const joiRegisterSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});

const joiLoginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
})

const Admin = model('admin', adminSchema);

module.exports = {
    Admin,
    joiRegisterSchema,
    joiLoginSchema
};