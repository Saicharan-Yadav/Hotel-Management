import logo from './logo.svg';
// import './App.css';
import React,{useState,useEffect,useRef} from "react"
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Cart from './Cart';
import Orders from './Orders';

function App() {
  const [addCart,setCart]=useState([]);
  

  return (
    <>
     <Routes>
     <Route exact path="/" element={<Home  setCart={setCart} addCart={addCart}/>}/>
     <Route path="cart" element={<Cart addCart={addCart} setCart={setCart}   />}/>
     <Route path="orders" element={<Orders  addCart={addCart}  />}/>

     </Routes>
   
        </>
  );
}

export default App;
