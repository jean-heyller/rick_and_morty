import React, { useState } from "react";
import Card from "../Card/Card";
import style from "./pagination.module.css"

function PaginacionTabla({ datos, filasPorPagina ,onClose }) {
  const [paginaActual, setPaginaActual] = useState(1);
  const totalPaginas = Math.ceil(datos.length / filasPorPagina);

  const indiceUltimaFila = paginaActual * filasPorPagina;
  const indicePrimeraFila = indiceUltimaFila - filasPorPagina;
  const filasActuales = datos.slice(indicePrimeraFila, indiceUltimaFila);

  const handleClickPagina = (pagina) => {
    setPaginaActual(pagina);
  };
  const next = ()=>{
    if(paginaActual===totalPaginas){
      window.alert("no puedes avanzar mas")
    };
    if(paginaActual<totalPaginas){
      setPaginaActual(paginaActual+1)
    }
  };
  const previous = ()=>{
    if(paginaActual===1){
      window.alert("no puedes retroceder mas")
    };
    if(paginaActual>1){
      setPaginaActual(paginaActual-1)
    };
  };
  const renderizarBotones = () => {
    const botones = [];

    for (let i = 1; i <= totalPaginas; i++) {
      botones.push(
        <button key={i} onClick={() => handleClickPagina(i)} className={`${style.button} ${i === paginaActual ? style.active : ''}`}>
          {i}
        </button>
      );
    }

    return botones;
  };

  return (
      <div  className={style.principal}>
        <div className={style.buttons}>{renderizarBotones()}</div>
        <div className={style}>
        
        </div>
        <div className={style.cards}>
        {filasActuales.map(({ image, name, gender, id, species}) => {
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
        })}
        ;
        </div>
        <div className={style.buttonNav}>
        <button onClick={previous}>previous<span className="arrow-right"></span></button>
        <button onClick={next}><span className={style.arrowLeft}></span>next</button>
        </div>
    </div>
  );
};

export default PaginacionTabla;
