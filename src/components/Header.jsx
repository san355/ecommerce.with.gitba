import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom";
export const Header = ({cart}) => {
  return (
    <div className='navbar'>
        <div className='logo'>FoodCart</div>
        <ul>
            <li>
                <Link to={"/"}>home</Link>
            </li>
            <li>
                <Link to={"/cart"}>
                <span className='cart-count'>{cart.length}</span>view cart</Link>
            </li>
        </ul>
        
    </div>
  );
};
