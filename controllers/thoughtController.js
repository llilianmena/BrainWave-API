const { Thought, User } = require('../models');

module.exports = {
    async getThoughts(req, res) {
        const thoughts = await Thought.find();
        res.json(thoughts);
    },

    async getThoughtById(req, res) {
        const thought = await Thought.findOne({ _id: req.params.id });
        res.json(thought);
    },

    async createThought(req, res) {
        const thought = await Thought.create(req.body);
        await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: thought._id } });
        res.json(thought);
    },

    async updateThought(req, res) {
        const thought = await Thought.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.json(thought);
    },

    async deleteThought(req, res) {
        await Thought.findOneAndDelete({ _id: req.params.id });
        res.json({ message: 'Thought deleted!' });
    }
};
