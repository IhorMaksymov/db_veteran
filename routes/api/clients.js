const express = require('express');

const router = express.Router();

const {
    listClients,
    getClientById,
    addClient,
    updateClient,
    remove,
} = require('../../controllers/clientControl');

const {
    isValidId,
    validateBody,
    adminCurrent
} = require('../../middlewares');

const { updateClientSchema } = require('../../models/clientSchema');

router.get('/', adminCurrent, listClients);

router.get('/:id', isValidId, getClientById);

router.post('/', adminCurrent, validateBody(updateClientSchema), addClient);

router.put('/:id', isValidId, validateBody(updateClientSchema), updateClient);

router.delete('/:id', isValidId, remove);

module.exports = router;