const { Favorite,User } = require('../DB_connection');

const deleteFav = async (req, res) => {
    try {
        // Obtiene el ID del personaje  y el usuario del query de la solicitud
        const { id, email } = req.query;

        //Busca al usuario en la base de datos
        const user = await User.findOne({ where: { email } });

        //Elimina el personaje favorito del usuario
         await user.removeFavorite(id);

        //  Elimina el personaje favorito con el ID proporcionado
        await Favorite.destroy({ where: { id: id } });

        // Responde con el arreglo de personajes favoritos
        return res.status(200).json(id);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensaje: error.message });
    }
};

module.exports = deleteFav;
