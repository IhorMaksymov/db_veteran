const express = require('express');

const { validateBody, adminCurrent } = require('../../middlewares');

const {
    signup,
    login,
    logout,
    current
} = require('../../controllers/adminControl');

const router = express.Router();

const { joiRegisterSchema, joiLoginSchema } = require('../../models/adminSchema');

router.post('/signup', validateBody(joiRegisterSchema), signup);

router.post('/login', validateBody(joiLoginSchema), login);

router.get('/logout', adminCurrent, logout);

router.get('/current', adminCurrent, current);

module.exports = router;