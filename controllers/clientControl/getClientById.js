const { Client } = require('../../models/clientSchema');

const { ctrlWrapper, HttpError } = require('../../helpers');

const getClientById = async (req, res) => {
    const { id } = req.params;
    const clientById = await Client.findById(id);
    if (!clientById) {
        throw HttpError(404, 'Not found client');
    }
    res.status(200).json(clientById);
}

module.exports = {
    getClientById: ctrlWrapper(getClientById),
}