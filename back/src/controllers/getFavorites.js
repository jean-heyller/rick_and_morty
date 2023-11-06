// Importar el modelo de Favoritos
const {Favorite} = require('../DB_connection');

// Crear el controlador
const getFavorites = async (req, res) => {
    try {
        // Obtener todos los favoritos
        const favorites = await Favorite.findAll();

        // Enviar los favoritos como respuesta
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los favoritos', error });
    }
};

module.exports = getFavorites;