import style from "./Card.module.css";
import { Link } from 'react-router-dom';
import { agregar } from "../../redux/actions";
import { remover } from "../../redux/actions";
import {connect} from "react-redux"
import { useState,useEffect } from "react";

const Card =({id,name,species,gender,image,onClose,myFavorites,agregar,remover,}) =>{
   const [isFav,setIsFav] = useState(false)
   function handleFavorite(){
      if(isFav){
         setIsFav(false);
         remover(id)
      }else{
         setIsFav(true);
         agregar({
            id,name,species,gender,image,onClose
         })
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
}
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    agregar: (id) => {
      dispatch(agregar(id));
    },
    remover: (id) => {
      dispatch(remover(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);




