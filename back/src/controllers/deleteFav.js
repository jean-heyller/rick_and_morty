const { Favorite } = require('../DB_connection');

const deleteFav = async (req, res) => {
    try {
        const { id } = req.params;

        // Elimina el personaje favorito con el ID proporcionado
        await Favorite.destroy({ where: { id: id } });

        // Busca todos los personajes favoritos guardados en la base de datos
        const favoritos = await Favorite.findAll();

        // Responde con el arreglo de personajes favoritos
        return res.status(200).json(favoritos);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensaje: 'Hubo un error al eliminar el personaje favorito' });
    }
};

module.exports = deleteFav;
