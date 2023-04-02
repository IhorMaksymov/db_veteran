const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Admin } = require('../../models/adminSchema');

const { ctrlWrapper, HttpError } = require('../../helpers');

const { SECRET_KEY } = process.env;

const signup = async (req, res) => {
    const { email, password } = req.body;
    const candidate = await Admin.findOne({ email });
    if (candidate) {
        throw HttpError(409, `User with ${email} already exist`)
    }

    const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    const user = new Admin({ email, password: hashPass });

    console.log(user);
    console.log(user._id);

    const payload = {
        id: user._id
    }

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });

    const newUser = await Admin.create({_id: user._id, email: user.email, password: user.password, token});

    console.log(newUser)

    res.status(201).json({
        status: 'success',
        token,
        user: {
            email,
        }
        
    });
}

module.exports = {
    signup: ctrlWrapper(signup)
};