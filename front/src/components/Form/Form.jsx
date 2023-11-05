import React from "react";
import { useState } from "react";
import validate from "./validation";
import style from "./Form.module.css";

export default function Form({onSubmit}){

    const [userData, setUserData] = useState({ email: '', password: '' });
    const [errors,setErrors] = useState({});

    function handleInputChange(event) {
      setUserData(prevUserData => {
        const updatedUserData = {...prevUserData, [event.target.name]: event.target.value};
        if(event.target.value.length === 0) {
          updatedUserData[event.target.name] = '';
        } else if (updatedUserData.email !== '' || updatedUserData.password !== '') {
          const errors = validate(updatedUserData);
          setErrors(errors);
        } else {
          setErrors({});
        }
        return updatedUserData;
      });
    };

    function handleSubmit(event) {
        event.preventDefault();
        const errors = validate(userData);
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
          console.log("funciono")
          onSubmit(userData);
        };
      };
    return(
        <div className={style.div}>
            <form onSubmit={handleSubmit} className={style.form}>
                <h1>Ingresar Usuario</h1>
                <label className={style.email} htmlFor="email">email:</label>
                <input onChange ={handleInputChange} value={userData.email}type="text" name="email" />
                {errors.email && <span className="error">{errors.email}</span>}
                <label className={style.password}htmlFor="password">password:</label>
                <input onChange ={handleInputChange} value={userData.password}type="text" name="password"/>
                {errors.password && <span className="error">{errors.password}</span>}           
                <button className ={style.btn}type="submit">LOGIN</button>     
            </form>
        </div>
    );
};