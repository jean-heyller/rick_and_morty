import Card from '../Card/Card';
import style from './Cards.module.css';
import { getFavorites } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Cards({ characters,onClose}) {
   const dispatch = useDispatch();
   useEffect(() => {
   dispatch(getFavorites());
   }, []);
   return (
   <div className={style.tarjetas}>
      {characters.map(({id,name,species,gender,image})=> {
         return(
         <Card
         id = {id}
         name = {name}
         species = {species}
         gender = {gender}
         image = {image}
         onClose = {onClose}
         />
         );
      })}
   </div>
   );
};
