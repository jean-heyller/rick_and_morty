const { Favorite, User } = require('../DB_connection');

const postFav = async (req, res) => {
    try {
        const { id, name,image, species, gender, email } = req.body;

        // Verifica si los datos requeridos están presentes
        if (!id|| !name  || !image || !species || !gender || !email) {
            return res.status(401).json({ mensaje: 'Faltan datos' });
        }

        // Busca al usuario en la base de datos
        const user = await User.findOne({ where: { email } });

        // Si el usuario no existe, envía un mensaje de error
        if (!user) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        // Crea un nuevo personaje favorito
        const favorite = await Favorite.create({id, name, image, species, gender });

        // Agrega el personaje favorito al usuario
        await user.addFavorite(favorite);

        // Guarda el usuario
        await user.save();


        // Responde con el arreglo de personajes favoritos
        return res.status(200).json(favorite);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensaje: 'Hubo un error al guardar el personaje favorito' });
    }
};

module.exports = postFav;