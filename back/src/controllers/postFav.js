const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
        try {
        const { name, origin, status, image, species, gender } = req.body;

        // Verifica si los datos requeridos están presentes
        if (!name || !origin || !image || !species || !gender) {
            return res.status(401).json({ mensaje: 'Faltan datos' });
        }

        // Crea un nuevo personaje favorito y lo guarda en la base de datos
        await Favorite.create({name, origin,image,species, gender });

        // Busca todos los personajes favoritos guardados en la base de datos
        const favoritos = await Favorite.findAll();

        // Responde con el arreglo de personajes favoritos
        return res.status(200).json(favoritos);
        } catch (error) {
        console.error(error);
        return res.status(500).json({ mensaje: 'Hubo un error al guardar el personaje favorito' });
        }
};

module.exports = postFav;
