import React, { useState } from 'react';
import Card from '../Card/Card';
import style from './Cards.module.css';
import { getFavorites } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Pagination from './pagination'; // Asegúrate de tener un componente de paginación

export default function Cards({ characters, onClose }) {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  console.log(characters); // Estado para la página actual

 // Agrega currentPage a las dependencias del efecto

  return (
    <div className={style.tarjetas}>
      <Pagination datos={characters} onClose={onClose} filasPorPagina={4}   />
    </div>
  );
};