import style from "./Card.module.css";
import { Link } from 'react-router-dom';
import { removeFavorite,getFavorites,addFavorite } from "../../redux/actions";
import { useState,useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import axios from "axios";


function Card({id, name,origin, species, gender, image, onClose, myFavorites }) {
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   
   const addFavorite = (character) => {
      // Obtener los datos del usuario del almacenamiento local
    const userData = JSON.parse(localStorage.getItem('userData'));
    character.email = userData.email;
      axios
         .post("http://localhost:3001/rickandmorty/fav", character)
         .then(console.log("todo ok"))
   };

   const removeFavorite = async (id) => {
      await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
      dispatch(getFavorites());
   };

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFavorite(id);
      } else {
         setIsFav(true);
         //
         addFavorite({
         name,
         origin,
         species,
         gender,
         image,
         });
      }
   };
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
         setIsFav(true);
         }
      });
   }, [myFavorites]);
   return (
      <div className={style.tarjeta}>
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )};
         <><button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`} >
         <h5 className="card-title">{name}</h5>
         </Link>
         <h2 className={style.name}>name = {name}</h2>
         <h2 className={style.species} >especies = {species}</h2>
         <h2 className={style.gender}>gender = {gender}</h2>
         <img clasName={style.image}src={image} alt="" /></>
      </div>
   );
};
const mapDispatchToProps = (dispatch) => {
   return {
      removeFavorite: (id) => {
         dispatch(removeFavorite(id));
      },
   };
};
const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);




