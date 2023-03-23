const { Client } = require('../../models/clientSchema');

const { ctrlWrapper, HttpError } = require('../../helpers');

const remove = async (req, res) => {
    const { id } = req.params;
    const removeClient = await Client.findByIdAndRemove(id);
    if (!removeClient) {
        throw HttpError(404, 'Not found client');
    }
    res.json({ message: 'Client deleted' });
}

module.exports = {
    remove: ctrlWrapper(remove),
}