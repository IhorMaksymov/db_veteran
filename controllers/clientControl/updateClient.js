const { Client } = require('../../models/clientSchema');

const { ctrlWrapper, HttpError } = require('../../helpers');

const updateClient = async (req, res) => {
    const { id } = req.params;
    const upClient = await Client.findByIdAndUpdate(id, req.body, { new: true });
    if (!upClient) {
        throw HttpError(404, 'Not found client');
    }
    res.status(200).json(upClient);
}

module.exports = {
    updateClient: ctrlWrapper(updateClient),
}