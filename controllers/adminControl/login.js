const jwt = require('jsonwebtoken');

const { Admin } = require('../../models/adminSchema');

const { ctrlWrapper, HttpError } = require('../../helpers');

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await Admin.findOne({ email });
    if (!user || !user.comparePassword(password)) {
        throw HttpError(401, 'Email or password is wrong');
    }

    const payload = {
        id: user._id,
    }

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
    await Admin.findByIdAndUpdate(user._id, { token });
    res.status(201).json({
        status: 'success',
        token,
        user: {
            email,
        }
        
    });
}

module.exports = {
    login: ctrlWrapper(login),
}