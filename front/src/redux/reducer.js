import { REMOVE_FAVORITE,FILTER_FAVORITE,ORDER_FAVORITE,
  GET_FAVORITES,GET_CHARACTER_DETAIL,CLEAN_DETAIL,ADD_FAVORITE
  ,GET_CHARACTERS,LOGIN,GET_USERS,
} from "./actions";
const initialState = {
    myFavorites: [],
    backupFavorites: [],
    characterDetail: {},
    allCharacters: [],
    user: {},
    users:[],

};
const rootReducer = (state = initialState,action) =>{    
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                user: action.payload,
            };
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                backupFavorites: [...state.backupFavorites, action.payload]
            };
        case GET_CHARACTERS:
            return {
                ...state,
                allCharacters: action.payload.results,
            };    
        case REMOVE_FAVORITE:
        return {
            ...state,
            myFavorites:state.myFavorites.filter(
                (char)=>char.id !==action.payload   
            )
            };
        case FILTER_FAVORITE:
            const {backupFavorites} = state
            const favorites = backupFavorites.filter(
                (char)=>char.gender == action.payload)
            return{
                ...state,
                myFavorites:favorites,
            };
        case ORDER_FAVORITE:
        const orderedFavorites = state.allCharacters.sort((a, b) =>
        action.payload === 'Ascendente' ? a.id - b.id : b.id - a.id)
            return{
                ...state,
                myFavorites: orderedFavorites
            };
        case GET_CHARACTER_DETAIL:
            return {
                ...state,
                characterDetail: action.payload,
            };    
        case CLEAN_DETAIL:
            return {
                ...state,
                characterDetail: {},
            };
        case GET_FAVORITES:
            return { ...state, myFavorites: action.payload };
        default:
            return { ...state };
    };
};
export default rootReducer;