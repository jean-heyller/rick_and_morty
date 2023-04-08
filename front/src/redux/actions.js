export const ADD = "ADD";
export const REMOVE ="REMOVE";
export const FILTER = "FILTER";
export const ORDER = "ORDER"
export const agregar = (id)=>{
    return{type:"ADD",payload:id}
};
export const remover = (id)=>{
    return{ type:"REMOVE", payload:id}
};
export const filterCards = (gender) =>{
    return{ type:"FILTER", payload:gender}
}
export const orderCards = (id) =>{
    return{ type:"ORDER", payload:id}
}