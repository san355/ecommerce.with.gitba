import { useState} from "react";
import{ BrowserRouter, Route ,Routes} from "react-router-dom";
import { CartContext } from './components/CartContext';
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Viewcart} from "./components/Viewcart";
import "./App.css";


function Foot() {
  
  const[cart,setCart]=useState([]);
  return (
  <CartContext.Provider value={{cart,setCart}}>
  <BrowserRouter>
  <Header cart={cart}/>
  <div className='container'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Viewcart/>}/>
    </Routes>
  </div>
  </BrowserRouter>
  </CartContext.Provider >
  
  );
}

export default Foot ;
