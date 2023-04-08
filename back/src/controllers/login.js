const { User } = require('../DB_connection');

const login = async (req, res) => {
    try {
        const { email, password } = req.query;

        if (!email || !password) {
        return res.status(400).json({ mensaje: 'Faltan datos' });
        }

        const usuario = await User.findOne({ where: { correoElectronico: email } });

        if (!usuario) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        if (usuario.contraseña !== password) {
        return res.status(403).json({ mensaje: 'Contraseña incorrecta' });
        }
        return res.status(200).json({ access: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensaje: 'Hubo un error al iniciar sesión' });
    }
};

module.exports = login;

