const usersCtrl = {};
const User = require('../models/User');

usersCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

usersCtrl.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new User({
        username
    });
    await newUser.save();
    res.json({messaje: 'User Created'});
};

usersCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({messaje: 'User Deleted'});
};


module.exports = usersCtrl;