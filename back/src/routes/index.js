const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const postUser = require('../controllers/postUser');
const login = require('../controllers/login');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');
const { conn } = require('../DB_connection');
const server = require("../server");

conn
  .sync({alter:true})
  .then(()=>{
    server.listen("3001",()=>{
      console.log("Listening on port",3001)
    })
  })
  .catch((err)=>console.log(err))




const router = Router();

router.get("/onsearch/:id", getCharById);

router.get("/detail/:id", getCharDetail);

//********************************************* */

router.post('/user', postUser);
router.get('/login', login);
router.post('/login', login);
router.post('/fav', postFav);
router.get('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router;
