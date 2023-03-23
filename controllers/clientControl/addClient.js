const { Client } = require('../../models/clientSchema');

const { ctrlWrapper } = require('../../helpers');

const addClient = async (req, res) => {
    const client = await Client.create(req.body);
    res.status(201).json(client);
}

module.exports = {
    addClient: ctrlWrapper(addClient),
}