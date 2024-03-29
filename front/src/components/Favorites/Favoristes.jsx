import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from "../Favorites/Favorites.module.css";
import { filterFavorite, orderFavorite, getFavorites } from "../../redux/actions";
import { useEffect } from "react";

const Favorites = () => {
  const Favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const updateFavorites = () => {
    console.log("update");
    dispatch(getFavorites());
  };

  const ordenar = (e) => {
    const { value } = e.target;
    dispatch(orderFavorite(value));
  };

  const filtrar = (e) => {
    const { value } = e.target;
    dispatch(filterFavorite(value));
  };

  return (
    <div className={style.div}>
      <div>
        <select name="order" onChange={ordenar}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="filter" onChange={filtrar}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      {Favorites.map(({ id, name, species, gender, image }) => {
        return (
          <Card updateFavorites={updateFavorites} id={id} name={name} species={species} gender={gender} image={image} />
        );
      })}
    </div>
  );
};

export default Favorites;