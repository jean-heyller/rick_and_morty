const { User } = require('../DB_connection');

const postUser = async (req, res) => {
    try {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ msg: "Faltan datos" });
    }
    const [usuario, created] = await User.findOrCreate({
        where: { email },
        defaults: { password },
    });
    if (created) {
        return res.status(201).json(usuario);
    } else {
        return res.status(200).json(usuario);
    }
    } catch (error) {
    return res.status(500).json({ msg: "Hubo un error al guardar el usuario" });
    }
};

module.exports = postUser;