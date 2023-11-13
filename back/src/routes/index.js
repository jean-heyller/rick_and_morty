
const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const postUser = require('../controllers/postUser');
const login = require('../controllers/login');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');
const getUsers = require('../controllers/getUsers');
const getFavorites = require('../controllers/getFavorites');


const router = Router();


router.get("/onsearch/:id", getCharById);

router.get("/detail/:id", getCharDetail);

//********************************************* */

router.post('/rickandmorty/user', postUser);
router.get('/rickandmorty/login', login);
router.get('/rickandmorty/users',getUsers);
router.post('/rickandmorty/login', login);
router.post('/rickandmorty/fav', postFav);
router.get('/rickandmorty/fav', postFav);
router.delete('/rickandmorty/fav', deleteFav);
router.get('/rickandmorty/getFav',getFavorites);

module.exports = router;
