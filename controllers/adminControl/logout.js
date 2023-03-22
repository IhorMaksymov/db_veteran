const { Admin } = require('../../models/adminSchema');

const { ctrlWrapper } = require('../../helpers');

const logout = async (req, res) => {
    const { _id } = req.user;
    await Admin.findByIdAndUpdate(_id, { token: null });
    res.status(204).json();
}

module.exports = {
    logout: ctrlWrapper(logout),
}