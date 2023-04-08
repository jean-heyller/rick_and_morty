import { ADD,REMOVE ,FILTER,ORDER} from "./actions";
const initialState ={
    myFavorites: [],
    allCharacters: [],
};
const reducer = (state= initialState,action) =>{
    switch(action.type){
        case ADD:
        return{
            ...state,
                myFavorites:[...state.allCharacters,action.payload],
                allCharacters:[...state.allCharacters,action.payload],
        }
        case REMOVE:
        return{
            ...state,
            myFavorites:state.myFavorites.filter(
                (char)=>char.id !==action.payload   
            )
        };
        case FILTER:
            const {allCharacters} = state
            const favorites = allCharacters.filter(
                (char)=>char.gender == action.payload)
            return{
                ...state,
                myFavorites:favorites,
        }
        case ORDER:
        const orderedFavorites = state.allCharacters.sort((a, b) =>
        action.payload === 'Ascendente' ? a.id - b.id : b.id - a.id)
            return{
                ...state,
                myFavorites: orderedFavorites
            }
        default:
            return{...state}
    }
}
export default reducer;