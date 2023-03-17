import { useState } from "react";
export default function SearchBar({onSearch}) {
   const [character, setcharacter] = useState("");
   const handleChange = (event) => {
      setcharacter(event.target.value);
    };
   return (
      <div>
         <input 
         type='search'
         onChange={handleChange}
          />
         <button onClick={() => onSearch(character)}>Agregar</button>
      </div>
   ); 
}
