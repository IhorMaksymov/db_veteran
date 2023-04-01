const { Admin } = require('../models/adminSchema');

const jwt = require('jsonwebtoken');

const { HttpError } = ('../helpers');

const { SECRET_KEY } = process.env;

const adminCurrent = async (req, res, next) => {
    const { authorization = '' } = req.headers;
    const [bearer, token] = authorization.split(' ');
    try {
        if (bearer !== 'Bearer') {
            res.status(401).json({ message: 'Not authrized' });
            // throw HttpError(401, 'Not authrized');
        }
        const { email } = jwt.verify(token, SECRET_KEY);
        const user = await Admin.findById(email);
        if (!user || !user.token) {
            res.status(401).json({ message: 'Not authrized' });
            // throw HttpError(401, 'Not authrized');
        }

        req.user = user;
        next();
    } catch (error) {
        if (error.message === 'Invalid sugnature') {
            error.status = 401
        }
        throw error;
    }
}

module.exports = adminCurrent;