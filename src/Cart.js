import React from 'react'
import Navbar from './Navbar'
import "./CSS/cards.css"


import Newcart from './Newcart';
import {useNavigate} from "react-router-dom"

function Cart(props) {

  const navigate=useNavigate()


  return (
    <div>
    
<div style={{display:"inline"}} >
<Navbar/>
<button  className="order"  onClick={()=>{ 
  navigate("/orders")
}}>
   <b>Proceed to Order</b> </button></div>
    
     
      
    <div >
    <Newcart  addCart={props.addCart} setCart={props.setCart}  />
    </div>
    

    
 
    </div>
  )
}

export default Cart