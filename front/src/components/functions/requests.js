//verificar si el usuario existe
import axios from "axios"



export const userRequets = () => {
   const loginUser = async (userData) => {
    console.log(userData)
    const URL_BASE = "http://localhost:3001";
    const response = await axios.get(`${URL_BASE}/rickandmorty/login?email=${userData.email}&password=${userData.password}`);

  }
  const registerUser = async (userData) => {
    console.log(userData)
    const URL_BASE = "http://localhost:3001";
    const response = await axios.post(`${URL_BASE}/rickandmorty/user?`, userData);
    
  }

  return {loginUser, registerUser}
}

