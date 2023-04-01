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

    const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    const newUser =  await Admin.create({ email, password: hashPass, });

    // const token = jwt.sign({newUser}, SECRET_KEY, { expiresIn: '24h' });

    const token = jwt.sign({ id: newUser._id }, SECRET_KEY, { expiresIn: '24h' });
    
    res.status(201).json({
        status: 'success',
        code: 201,
        data: {
            user: {
                email,
                token,
            }
        }
    });
}

module.exports = {
    signup: ctrlWrapper(signup)
};