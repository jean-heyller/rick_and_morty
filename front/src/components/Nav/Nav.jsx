import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from 'react-router-dom';
import style from './Nav.module.css'

class Nav extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div className={style.nav}>
                <Link to="/about"><h3>ABOUT</h3> </Link>
                <Link to="/home"><h3>HOME</h3> </Link>
                <Link to="/favorites"><h3>Favoritos</h3> </Link>
                <SearchBar onSearch={this.props.onSearch} />
            </div>
        );
    };
};
export default Nav;