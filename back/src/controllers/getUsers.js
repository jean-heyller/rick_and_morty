const { User } = require('../DB_connection');

const getUsers = async (req, res) => {
    try {
        const usuarios = await User.findAll();

        return res.status(200).json(usuarios);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensaje: error.message });
    }
};

module.exports = getUsers;