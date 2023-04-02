const { Admin } = require('../models/adminSchema');

const jwt = require('jsonwebtoken');

const { HttpError } = ('../helpers');

const { SECRET_KEY } = process.env;

const adminCurrent = async (req, res, next) => {

    console.log(req.headers)

    const { authorization = '' } = req.headers;
    const [bearer, token] = authorization.split(' ');

    console.log(bearer)

    try {
        if (bearer !== 'Bearer') {
            res.status(401).json({ message: 'Not authrized token1' });
            // throw HttpError(401, 'Not authrized');
        }
        const {id} = jwt.verify(token, SECRET_KEY);

        console.log(id)

        const user = await Admin.findById(id);

        console.log(user)

        if (!user || !user.token) {
            res.status(401).json({ message: 'Not authrized token2' });
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