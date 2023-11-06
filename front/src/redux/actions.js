import axios from "axios";

// Definición de constantes para tipos de acciones
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FILTER_FAVORITE = "FILTER_FAVORITE";
export const ORDER_FAVORITE = "ORDER_FAVORITE";
export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_FAVORITES = "GET_FAVORITES";
export const LOGIN = "LOGIN";
export const GET_CHARACTERS = "GET_CHARACTERS";

/* 
   Las constantes anteriores se utilizan como tipos de acciones en Redux, 
   para describir el tipo de acción que se está realizando en la aplicación.
*/

// Acción para agregar un favorito (actualmente comentada)
/* 
export const addFavorite = (id) => {
    return { type: "ADD", payload: id };
};

*/
//verificar si el usuario existe
export const login = (email,password) =>{
  console.log("entro al login")
  return async function(){
    const URL_BASE = "http://localhost:3001";
    const response = await axios.get(`${URL_BASE}/login?email=${email}&password=${password}`);
    return(response.data);
  }
}

export const getCharacters = ()=>{
  return async function(dispatch){
    try{
      const URL_BASE = "https://rickandmortyapi.com/api/character"
      const response = await axios.get(`${URL_BASE}`)
      dispatch({ type: GET_CHARACTERS, payload: response.data });
    }catch{
      throw new Error('Error');
    }
  }
} 

//crear un usuario

export const createUser = (user) =>{
  return async function(dispatch){
    const URL_BASE = "http://localhost:3001";
    const response = await axios.post(`${URL_BASE}/user`,user);
    return(response.data);
  }
}

// Acción para eliminar un favorito
export const removeFavorite = (id) => {
    return { type: "REMOVE_FAVORITE", payload: id };
};

//verificar usuario

// Acción para filtrar favoritos por género
export const filterFavorite = (gender) => {
    return { type: "FILTER_FAVORITE", payload: gender };
};

// Acción para ordenar favoritos por algún criterio
export const orderFavorite = (id) => {
    return { type: "ORDER_FAVORITE", payload: id };
};

// Acción asincrónica para obtener detalles de un personaje
export const getCharacterDetail = (id) => {
    return async function (dispatch) {
        const URL_BASE = "http://localhost:3001";
        // Realiza una solicitud GET a la API para obtener detalles del personaje
        const response = await axios.get(`${URL_BASE}/detail/${id}`);
        // Despacha la acción con los detalles del personaje como carga
        dispatch({ type: GET_CHARACTER_DETAIL, payload: response.data });
    };
};

// Acción asincrónica para obtener la lista de favoritos
export const getFavorites = () => {
    return async function (dispatch) {
        const URL_BASE = "http://localhost:3001";
        // Realiza una solicitud GET a la API para obtener la lista de favoritos
        const response = await axios.get(`${URL_BASE}/rickandmorty/getFav`);
        // Despacha la acción con la lista de favoritos como carga
        dispatch({ type: GET_FAVORITES, payload: response.data });
    };
};

// Acción para limpiar los detalles de un personaje
export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
};
