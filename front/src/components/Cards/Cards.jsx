import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import style from './Cards.module.css';
import { useDispatch,useSelector } from "react-redux";
import Pagination from '../pagination/pagination';
import { getCharacters } from '../../redux/actions';
export default function Cards({ onClose }) {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.allCharacters);
  const count = useSelector((state) => state.count);
  // pagina actual
  const [currentPage, setCurrentPage] = useState(1);
  //total de personjaes
  const [characters, setCharacters] = useState([]);
  // personajes por pagina
  const totalPages = Math.ceil(count / 20);

  const [loading, setLoading] = useState(false);
  
  //array de botones
  const botones = [];
  
 // crea los botones de paginación
 const renderizarBotones = () => {
  const botones = [];

  for (let i = 1; i <= totalPages; i++) {
    botones.push(
      <button key={i} onClick={() => handleClickPagina(i)} className={`${style.button} ${i === currentPage ? style.active : ''}`}>
        {i}
      </button>
    );
  }

  return botones;
};
useEffect(() => {
  setCharacters(character);
}, [character]);
//trae los primeros personajes
useEffect(() => {
  dispatch(async (dispatch) => {
    await dispatch(getCharacters(currentPage));
    setCharacters(character);
  });
}, []);
// cambia la pagina
const handleClickPagina = (numPagina) => {
  setCurrentPage(numPagina);
  setLoading(true);
  dispatch(async (dispatch) => {
    await dispatch(getCharacters(numPagina));
    setCharacters(character);
    setLoading(false);
    console.log("personajes", character);
  });
};
 
  return (
    <di>
      <div className={style.cards}>
      {loading ? (
        <p>Cargando</p>
      ): (
        characters.map(({ image, name, gender, id, species}) => {
          return (
            <Card
              id={id}
              name={name}
              gender={gender}
              image={image}
              species={species}
              onClose={onClose}
            />
          );
        })
      )
      }
      
    </div>
    <div className={style.buttons}>{renderizarBotones()}</div>
    </di>
    
  );
};