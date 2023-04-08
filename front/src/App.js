import './App.css'
import Cards from './components/Cards/Cards'
import Nav from "./components/Nav/Nav"
import { useState,useEffect } from "react";
import { Routes,Route,useLocation,useNavigate } from 'react-router-dom';
import About from "./components/About/About"
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favoristes';


function App() {
   // ! HOOKS
   const [characters, setCharacters] = useState([]);
   const { pathname } = useLocation();
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();
   const username = "heyller-19@outlook.com";
   const password = "1password";

   useEffect(() => {
      !access && navigate("/");
   }, [access]);

   // ! EVENT HANDLERS
   const onSearch = (id) => {
      const URL_BASE = "http://localhost:3001";
      // const KEY = "2d0fd52418f5.d3d6077a3b4c1857914f";

      if (characters.find((char) => char.id === id)) {
         return alert("Personaje repetido");
      }

      fetch(`${URL_BASE}/onsearch/${id}`)
         .then((response) => response.json())
         .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert("Algo salió mal");
         }
         });
   };

   const onClose = (id) => {
   // porque filter.... no modifica el array original
      setCharacters(characters.filter((char) => char.id !== id));
   };

   const login = (userData) => {
      if (userData.username === username && userData.password === password) {
         setAccess(true);
         navigate("/home");
      } else {
         alert("Credenciales incorrectas");
      }
   };
   return (
   <div className='App' style={{ padding: '25px' }}>
   {pathname !== "/" && <Nav onSearch={onSearch} />}
   <Routes>
      <Route path='/' element= {<Form onSubmit={login} />}/>
      <Route path="/home" element= {<Cards characters={characters} onClose={onClose} />}/>
      <Route path='/favorites' element = {<Favorites />} />
      <Route path='/About' element = {<About />} />
      <Route path='detail/:detailId' element={<Detail/>}/>
   </Routes>
   
   </div>
   );
};

export default App;
