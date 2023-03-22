const express = require('express');

const router = express.Router();

const {
    listClients,
} = require('../../controllers/clientControl');

router.get('/', listClients);

module.exports = router;