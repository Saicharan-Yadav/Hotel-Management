import React from "react";
import { useState, useEffect } from "react";
import "./CSS/cards.css";

import CardsTemplate from "./CardsTemplate";
import axios from "axios";

function Cards({ setCart, addCart }) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("https://hotel-data-a8k9.onrender.com/foodItems").then((res) => {
      console.log("*******************************");
      console.log(res);
      console.log("*******************************");

      setdata(res.data);
    });
  }, []);
  return (
    <>
      {data.map((d) => (
        <CardsTemplate food={d} setCart={setCart} addCart={addCart} />
      ))}
    </>
  );
}

export default Cards;
