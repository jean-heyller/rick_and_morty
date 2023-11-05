import React from "react";
import { useState } from "react";
import validate from "./validation";
import style from "./Form.module.css";

export default function Form({onSubmit}){

    const [userData, setUserData] = useState({ username: '', password: '' });
    const [errors,setErrors] = useState({
        name: '',
        email: '',
        message: '',
     });

    function handleInputChange(event) {
        setUserData({...userData,[event.target.name]:event.target.value});
    };
    function handleSubmit(event) {
        event.preventDefault();
        const errors = validate(userData);
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
          onSubmit(userData);
        };
      };
    return(
        <div className={style.div}>
            <form onSubmit={handleSubmit} className={style.form}>
                <h1>Ingresar Usuario</h1>
                <label className={style.username} htmlFor="username">username:</label>
                <input onChange ={handleInputChange} value={userData.username}type="text" name="username" />
                {errors.username? <span className="error">{errors.username}</span>:null}
                <label className={style.password}htmlFor="password">password:</label>
                <input onChange ={handleInputChange} value={userData.password}type="text" name="password"/>
                {errors.password && <span className="error">{errors.password}</span>}           
                <button className ={style.btn}type="submit">LOGIN</button>     
            </form>
        </div>
    );
};
