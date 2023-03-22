const bcrypt = require('bcryptjs');

const { Admin } = require('../../models/adminSchema');

const { ctrlWrapper, HttpError } = require('../../helpers');

const signup = async (req, res) => {
    const { email, password } = req.body;
    const user = await Admin.findOne({ email });
    if (user) {
        throw HttpError(409, `User with ${email} already exist`)
    }

    const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    await Admin.create({ email, password: hashPass });
    res.status(201).json({
        status: 'success',
        code: 201,
        data: {
            user: {
                email,
            }
        }
    });
}

module.exports = {
    signup: ctrlWrapper(signup)
};