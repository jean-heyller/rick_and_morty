import axios from "axios";
import e from "cors";

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
export const GET_USERS = "GET_USERS";

/* 
   Las constantes anteriores se utilizan como tipos de acciones en Redux, 
   para describir el tipo de acción que se está realizando en la aplicación.
*/

// Acción para iniciar sesión
export const login = (userData) => {
    return async function (dispatch) {
        try {
            const URL_BASE = "http://localhost:3001";
            const response = await axios.post(`${URL_BASE}/rickandmorty/user?`, userData);
            dispatch({ type: LOGIN, payload: response.data });
        }
        catch {
            throw new Error("Error");
        }
    }
}


//acción asincrónixa para traer todos los usuarios
export const getUsers = ()=>{
  return async function(dispatch){
    try{
      const URL_BASE = "http://localhost:3001";
      const response = await axios.get(`${URL_BASE}/rickandmorty/users?`);
      dispatch({type:GET_USERS, payload:response.data});
    }catch{
      throw new Error('Error');
    }
  }
}

// Acción asincrónica para agregar un favorito
export const addFavorite = (character) => {
    return async function (dispatch) {
        const URL_BASE = "http://localhost:3001";
        // Realiza una solicitud GET a la API para obtener los detalles del personaje
        const response = await axios.post(`${URL_BASE}/rickandmorty/fav?`, character);
        // Despacha la acción con los detalles del personaje como carga
        dispatch({ type: ADD_FAVORITE, payload: response.data });
    };
};


// obtiene todos los usuarios de la api de rick and morty
export const getCharacters = (page) => {
  return async function(dispatch) {
    const URL_BASE = "https://rickandmortyapi.com/api/character"
    try {
      const response = await axios.get(page === 1 ? URL_BASE : `${URL_BASE}?page=${page}`);
      dispatch({ type: GET_CHARACTERS, payload: response.data });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error('Error de red al intentar obtener datos.');
      } else {
        throw new Error('Error desconocido al obtener datos.');
      }
    }
  };
};


//crear un usuario

export const createUser = (user) =>{
  return async function(dispatch){
    const URL_BASE = "http://localhost:3001";
    const response = await axios.post(`${URL_BASE}/user`,user);
    dispatch({type:LOGIN, payload:response.data});
  }
}



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

// Acción para eliminar un favorito de un usuario
export const deleteFav = (id, email) => {
    return async function (dispatch) {
        const URL_BASE = "http://localhost:3001";
        // Realiza una solicitud DELETE a la API para eliminar el favorito
        const response = await axios.delete(`${URL_BASE}/rickandmorty/fav?id=${id}&email=${email}`);
        // Despacha la acción con la lista de favoritos como carga
        dispatch({ type: REMOVE_FAVORITE, payload: response.data });
    };
}

// Acción para limpiar los detalles de un personaje
export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
};
