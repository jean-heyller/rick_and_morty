const axios = require("axios");
const getCharByld = ((req,res)=>{
    const { id } = req.params;
    axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response=>{
        const characters = 
        {
        id: response.data.id,
        image: response.data.image,
        name: response.data.name,
        gender: response.data.gender,
        species: response.data.species,
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(characters));
    })
    .catch((error)=>{
        res.writeHead(500,{ "Content-Type": "text/plain" });
        return res.end(error);
    })
    
    

})
module.exports = getCharByld;