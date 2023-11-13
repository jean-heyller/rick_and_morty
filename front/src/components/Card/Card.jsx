import style from "./Card.module.css";
import { Link } from 'react-router-dom';
import { deleteFav,getFavorites,addFavorite } from "../../redux/actions";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";




function Card({id, name,origin, species, gender, image, onClose,updateFavorites }) {
   const [isFav, setIsFav] = useState(false);
    const dispatch = useDispatch();
    const [favorites, setFavorites] = useState([]);
    
    

   const userData = JSON.parse(localStorage.getItem('userData'));
   const email = userData.email;
   
  // useEffect(() => {
  //   dispatch(getFavorites());
  // }
  // ,[]);

  


  const myFavorites = useSelector((state) => state.myFavorites);

    useEffect(() => {
  const isFavorite = myFavorites.some((fav) => fav.id === id);
  setIsFav(isFavorite);
}, []);



const handleFavorite = () => {
  if (isFav) {
    setIsFav(false);
    dispatch(async (dispatch) => {
      await dispatch(deleteFav(id, email));
      updateFavorites();
    });
  } else {
    setIsFav(true);
    dispatch(
      addFavorite({
        id,
        email: userData.email,
        name,
        origin,
        species,
        gender,
        image,
      })
    );
  }
  console.log("favorito", isFav);
};

   

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
         <img className={style.imagen}src={image} alt="" /></>
      </div>
   );
}


export default Card;




