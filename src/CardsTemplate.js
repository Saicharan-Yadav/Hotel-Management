import React from "react";



function CardsTemplate({ food,setCart,addCart}) {
  
  
  
  return (
    <div className="card">
      <img
        src={food.img}
        alt="John"
        style={{ width: "100%" }}
      />
      <h1>
        <b>{food.item}</b>
      </h1>
      <p ><b>₹{food.price}</b></p>
      <p>{food.Hotel}</p>
      <p>
        <button 
        onClick={()=>{
          const tf=addCart.some(item=>item.item===food.item)
          if(tf){
            return addCart.map(items=>items.item===food.item ? items.count++:items)
          }
          else{
         setCart(prevItems=>[...prevItems,{...food,count:1}])
          }
           window.alert("Added To Cart Sucessfully")
        
        }}
        >Add to cart</button>
      </p>
    </div>
  );
}

export default CardsTemplate;
