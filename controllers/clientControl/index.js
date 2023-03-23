const { listClients } = require('./listClients');
const { addClient } = require('./addClient');
const { getClientById } = require('./getClientById');
const { updateClient } = require('./updateClient');
const { remove } = require('./remove');

module.exports = {
    listClients,
    addClient,
    getClientById,
    updateClient,
    remove,
}