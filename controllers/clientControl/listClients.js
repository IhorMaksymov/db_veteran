const { Client } = require('../../models/clientSchema');

const { ctrlWrapper } = require('../../helpers');

const listClients = async (_, res) => {
    const clients = await Client.find();
    res.status(200).json(clients);
}

module.exports = {
    listClients: ctrlWrapper(listClients),
}