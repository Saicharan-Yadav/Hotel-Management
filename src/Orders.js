import React from 'react'
import Navbar from './Navbar.js'
import './CSS/table.css'
function Orders({addCart}) {
  function Tcount(){
    addCart.forEach((d)=>count+=d.price*d.count)
    return count;
  }
  let count=0;
  return (
    <>
    <Navbar/>
    <div style={{marginTop:"100px"}}>
    <table id="customers">
  <tr>
    <th>Item</th>
    <th>Hotel</th>
    <th>Price</th>
    <th>Count</th>
    <th>Total Price</th>


  </tr>
    {addCart.map(d=><tr>
      <td>{d.item}</td>
      <td>{d.Hotel}</td>
      <td>{d.price}</td>
      <td>{d.count}</td>
      <td>{d.count*d.price}</td>
  
   
    </tr> )} 
    </table>
    </div>
    
    <h3> <b>Total Bill =</b> </h3>
    <h2>₹
    {Tcount()}
    </h2>
    
 
  
    </>
  )
}

export default Orders