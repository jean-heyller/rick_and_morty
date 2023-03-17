import './App.css'
import Cards from './components/Cards/Cards'
import Nav from "./components/Nav/Nav"
import { useState,useEffect } from "react";
import { Routes,Route,useLocation,useNavigate } from 'react-router-dom';
import About from "./components/About/About"
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favoristes';


function App () {
 const [characters, setCharacters] = useState([]);
 function onSearch(character) {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
} 
const onClose = (id) => {
  // porque filter.... no modifica el array original
  setCharacters(characters.filter((char) => char.id !== id));
};
const location = useLocation();
const navNuevo = location.pathname !=="/";
const navigate = useNavigate();
const [access, setAccess] = useState(false);
const username = 'ejemplo@gmail.com';
const password = '1password';

function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
};
useEffect(() => {
  !access && navigate('/');
}, [access]);

  return (
    <div className='App' style={{ padding: '25px' }}>
    {navNuevo && <Nav onSearch={onSearch}/>}
    <Routes>
      <Route path='/' element= {<Form onSubmit={login} />}/>
      <Route path="/home" element= {<Cards characters={characters} onClose={onClose} />}/>
      <Route path='/favorites' element = {<Favorites />} />
      <Route path='/About' element = {<About />} />
      <Route path='detail/:detailId' element={<Detail/>}/>
    </Routes>
    
    </div>
  )
}

export default App
