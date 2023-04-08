// Importa Axios
const axios = require("axios");

// Declarar y exportar la función getCharDetail
const getCharDetail = (req, res) => {
  const { id } = req.params;
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const characterData = {
        image: response.data.image,
        name: response.data.name,
        gender: response.data.gender,
        status: response.data.status,
        origin: response.data.origin.name,
        species: response.data.species,
      };

      // Devolver respuesta con status 200 y Content-Type application/json
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(characterData));
    })
    .catch((error) => {
      // Devolver respuesta con status 500 y Content-Type text/plain
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(error.message);
    });
};

module.exports = getCharDetail;
