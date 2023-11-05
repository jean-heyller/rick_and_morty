const Joi = require('joi');
const { User } = require('../DB_connection');

const schema = Joi.object({
    email: Joi.string().pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')).message('El formato del correo electrónico es inválido').required(),
    password: Joi.string().min(6).required(),
});

const login = async (req, res) => {
    try {
        const { email, password } = req.query;

        const { error } = schema.validate({ email, password });
        if (error) {
            return res.status(400).json({ mensaje: error.details[0].message });
        }

        const usuario = await User.findOne({ where: { email: email } });

        console.log(usuario)

        if (!usuario) {
            return res.status(402).json({ mensaje: 'Usuario no encontrado' });
        }

        if (usuario.password !== password) {
            return res.status(403).json({ mensaje: 'Contraseña incorrecta' });
        }

        return res.status(200).json({ access: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensaje: error.message });
    }
};

module.exports = login;