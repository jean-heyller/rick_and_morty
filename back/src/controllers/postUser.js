const {User} = require('../DB_connection');
const { copy } = require('../routes');

const postUser  = async (req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({msg:"faltan datos"})
        }
        const usuario = await User.create({email,password});
        return res.status(200).json(usuario);
    }catch (error){
    return res.status(500).json({msg:"Hubo un error al guardar el usuario"})
    };
};  

module.exports = postUser;