//verificar si el usuario existe
import axios from "axios"



export const userRequets = () => {
  //  const loginUser = async (userData) => {
  //   console.log(userData)
  //   const URL_BASE = "http://localhost:3001";
  //   const response = await axios.get(`${URL_BASE}/rickandmorty/login?email=${userData.email}&password=${userData.password}`);

  // }
  // const registerUser = async (userData) => {
  //   console.log(userData)
  //   const URL_BASE = "http://localhost:3001";
  //   const response = await axios.post(`${URL_BASE}/rickandmorty/user?`, userData);
    
  // }
  // verifica si el usuario existe recibe un objeto con email y password y un array de usuarios
  const verifyUser = (user, users) => {
    const userExists = users.find(
      (u) => u.email === user.email
    );
    if (userExists) {
      if (userExists.password === user.password) {
        console.log("userExists")
        return true;
      } else {
        return "Contraseña incorrecta";
      } 
    }else{
      return false;
    }
  }


  return { verifyUser}
}

