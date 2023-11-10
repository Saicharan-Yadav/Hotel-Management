import React,{useState,useEffect} from 'react'
// import "./App.css"
import Navbar from "./Navbar"
import Cards from "./Cards"

function Home({setCart,addCart}) {
  // const [cartdata,setcartdata]=useState([])
  return (
    // <div>
    <div className="App">
    <Navbar />
    <Cards setCart={setCart} addCart={addCart}/>
    </div>
    // </div>
  )
}

export default Home