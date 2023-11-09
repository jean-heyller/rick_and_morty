const Joi = require('joi');
const { User } = require('../DB_connection');

const schema = Joi.object({
    email: Joi.string().pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')).message('El formato del correo electrónico es inválido').required(),
    password: Joi.string().min(6).required(),
});

const postUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const { error } = schema.validate({ email, password });
        if (error) {
            return res.status(400).json({ msg: error.details[0].message });
        }

        const [usuario, created] = await User.findOrCreate({
          where: { email },
          defaults: { password },
      });

        if (created) {
            return res.status(201).json(usuario);
        } else {
            return res.status(400).json({msg: "usuario exitentes"});
        }
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

module.exports = postUser;