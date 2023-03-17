import { useSelector,useDispatch} from "react-redux";
import Card from "../Card/Card";
import style from "../Favorites/Favorites.module.css"
import { filterCards,orderCards} from "../../redux/actions"
const Favorites = ()=>{
    const  Favorites = useSelector((state)=> state.myFavorites);
    const dispatch = useDispatch();
    
    const ordenar = (e)=>{
        const {value} = e.target
        dispatch(orderCards(value))
    }
    const filtrar = (e)=>{
        const  {value } = e.target;
        dispatch(filterCards(value))
    }
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
                {Favorites.map(({id,name,species,gender,image})=> {
                    return(
                    <Card
                    id = {id}
                    name = {name}
                    species = {species}
                    gender = {gender}
                    image = {image}
                    />
                    );
                    })}
                    </div>
                    );
};
export default Favorites;
