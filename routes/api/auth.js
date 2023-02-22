const express = require('express');

const { validateBody } = require('../../middlewares');
const { ctrlWrapper } = require('../../helpers');

const { register } = require('../../controllers/auth');

const router = express.Router();

const { joiRegisterSchema, joiLoginSchema } = require('../../models/user');

router.post('/register', validateBody(joiRegisterSchema), ctrlWrapper(register));

module.exports = router;