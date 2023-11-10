import React from 'react'

import Newcarttemp from './Newcarttemp'

function Newcart(props) {
  console.log(props.addCart)
 
  return (
    <>
    
    {props.addCart.map(item=>
     <Newcarttemp  item={item} addCart={props.addCart}  setCart={props.setCart}   />
  
  )}
  
  
    </>
     
  )
}

export default Newcart