const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Admin } = require('../../models/adminSchema');

const { ctrlWrapper, HttpError } = require('../../helpers');

const { SECRET_KEY } = process.env;

const signup = async (req, res) => {
    const { email, password } = req.body;
    const user = await Admin.findOne({ email });
    if (user) {
        throw HttpError(409, `User with ${email} already exist`)
    }

    console.log(req.headers)

    const payload = {
        email,
    }

    const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });

    await Admin.create({ email, password: hashPass, token });
    res.status(201).json({
        status: 'success',
        code: 201,
        token,
        user: {
            email,
        }
        
    });
}

module.exports = {
    signup: ctrlWrapper(signup)
};