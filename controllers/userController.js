const { User } = require('../models');

module.exports = {
    async getUsers(req, res) {
        const users = await User.find().populate('thoughts').populate('friends');
        res.json(users);
    },

    async getUserById(req, res) {
        const user = await User.findOne({ _id: req.params.id }).populate('thoughts').populate('friends');
        res.json(user);
    },

    async createUser(req, res) {
        const user = await User.create(req.body);
        res.json(user);
    },

    async updateUser(req, res) {
        const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.json(user);
    },

    async deleteUser(req, res) {
        await User.findOneAndDelete({ _id: req.params.id });
        res.json({ message: 'User deleted!' });
    }
};
