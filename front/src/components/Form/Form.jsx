import React from "react";
import { useState } from "react";
import validate from "./validation";
import style from "./Form.module.css";

export default function Form({onSubmit,onRegister}){

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

      function handleSubmitRegister(event) {
        event.preventDefault();
        const errors = validate(userData);
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
          console.log("funciono")
          onRegister(userData);
        };
      };
        
      
    return(
        <div className={style.div}>
            <form className={style.form}>
                <label className={style.email} htmlFor="email">email</label>
                <input className={style.input_email} onChange ={handleInputChange} value={userData.email}type="text" name="email" />
                {errors.email && <span className="error">{errors.email}</span>}
                <label className={style.password}htmlFor="password">password</label>
                <input onChange ={handleInputChange} value={userData.password}type="text" name="password"/>
                {errors.password && <span className="error">{errors.password}</span>}           
                <div className={style.buttons}>
                <button className ={style.btn} onClick={handleSubmit} type="button">Login</button>     
                <button className ={style.btn} onClick={handleSubmitRegister} type="button">Registrase</button> 
                </div>
            </form>
        </div>
    );
};