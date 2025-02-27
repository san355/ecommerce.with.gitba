import {useContext,useState,useEffect} from 'react';
import './Viewcart.css';
import { CartContext } from './CartContext';

export const Viewcart = () => {
    const {cart}=useContext(CartContext);
    const[total,setTotal]=useState(0);
    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amt),0));
    },[cart]);
  return (
    <>
    <h1 className='cart-heading'>Cart Products</h1>

    <div className='cart-container'>
        {cart.map((product) => (
            <div className='cart-product' key={product.id}>
                <div className='img'>
                    <img src={product.pic} height={50}  width={50} alt='image'/>
                </div>
                <div className='cart-product-details'>
                    <h3>{product.name}</h3>
                    <p>price Rs:{product.amt}</p>
                </div>
            </div>    
        ))}
    </div>
    <h2 className='cart-amt'>Total amount Rs:{total}</h2>
    </>
  );
}
