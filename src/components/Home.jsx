import {useState} from 'react';
import data from "../assets/product.json";
import "./Home.css";
import { Product } from "./Product";


export const Home = () => {
    const[Products]= useState(data);
  return (
    <div className='product-container'>
        {Products.map((product) => (
          <Product key={product.id} product={product}/>
        ))}
    </div>
  );
};
