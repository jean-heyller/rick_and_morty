// Importando módulos y componentes necesarios
import './App.css';

import axios from "axios";
import Swal from 'sweetalert2'

import Cards from './components/Cards/Cards';
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from "./components/About/About";
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favoristes';
import { getCharacters,login,getUsers,getFavorites } from "./redux/actions";
import {userRequets} from "./components/functions/requests"


function App() {
   // ! HOOKS
  const [characters, setCharacters] = useState([]); // Variable de estado para almacenar datos de personajes
  const { pathname } = useLocation(); // Obtiene la ruta actual desde la URL
  const [access, setAccess] = useState(false); // Variable de estado para gestionar el acceso del usuario
  const navigate = useNavigate(); // Función para navegación programática
  const [user, setUser] = useState({}); // Variable de estado para almacenar datos del usuario
  const [users, setUsers] = useState([]); // Variable de estado para almacenar datos de usuarios

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
    dispatch(getUsers());
  }, []);

 
  const allCharacters = useSelector((state) => state.allCharacters);
  const allUsers = useSelector((state) => state.users);
  const {verifyUser} = userRequets();

  
  
  useEffect(() => {
    console.log("se ejecuto")
    setUsers(allUsers);
    setCharacters(allCharacters);
  }, [allUsers, allCharacters]);


   useEffect(() => {
      // Redirige a la página de inicio de sesión si no se ha concedido acceso
      !access && navigate("/");
   }, [access]);

   

   // Función para manejar el inicio de sesión del usuario
   const loginUser = (userData) => {
    const checkUser = verifyUser(userData,users)
    if(checkUser === true){
      setUser(userData);
      setAccess(true);
      navigate("/home");
      Swal.fire({
        title: '¡Éxito!',
        text: 'Inicio de sesión exitoso',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    }else if(checkUser == 'Contraseña incorrecta'){
      Swal.fire({
        title: 'Error',
        text: 'Contraseña incorrecta',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }else{
      Swal.fire({
        title: 'Error',
        text: 'Usuario no encontrado',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
  }

   // Función para agregar un personaje a la lista de favoritos
   const onSearch = (id) => {
      console.log(characters)
      const URL_BASE = "http://localhost:3001"; // URL base para la API
      // const KEY = "2d0fd52418f5.d3d6077a3b4c1857914f";

      // Verifica si el personaje con el ID proporcionado ya está en la lista
      if (characters.find((char) => char.id == id)) {
         return alert("Personaje repetido"); // Muestra una alerta si el personaje ya está en la lista
      }
      else{
        alert("busqueda")
        fetch(`${URL_BASE}/onsearch/${id}`)
         .then((response) => response.json())
         .then((data) => {
         if (data.name) {
            // Si los datos se obtienen con éxito, agrégalos a la lista de personajes
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert("Algo salió mal"); // Muestra una alerta si hubo un problema con la solicitud a la API
         }
         });
      }
      // Obtiene datos del personaje por ID desde la API
   };

   // Función para eliminar un personaje de la lista de favoritos
   const onClose = (id) => {
      // Usa el método filter para crear un nuevo array sin el personaje que se va a eliminar
      setCharacters(characters.filter((char) => char.id !== id));
   };



  const register = (userData) => {
    dispatch(login(userData));
    setAccess(true);
    navigate("/home");
  }

   return (
   <div className='App' style={{ padding: '25px' }}>
   {pathname !== "/" && <Nav onSearch={onSearch} />}
   <Routes>
      <Route path='/' element= {<Form onSubmit={loginUser} onRegister={register}/>}/> // Muestra el formulario de inicio de sesión en la página raíz
      <Route path="/home" element= {<Cards characters={characters} onClose={onClose} />}/> // Muestra la lista de personajes en la página de inicio
      <Route path='/favorites' element = {<Favorites />} /> // Muestra la página de favoritos
      <Route path='/About' element = {<About />} /> // Muestra la página de Acerca de
      <Route path='detail/:detailId' element={<Detail/>}/> // Muestra la página de detalle para un personaje específico
   </Routes>

   </div>
   );
};

export default App;
