import React,{useState,useEffect} from 'react'


function Newcarttemp({item,setCart,addCart}) {
  
  


 return (
   
   
   
   <> 

 
    <div className="card remove"  >
    <img src={item.img} alt="John" style={{width:"100%"}}/>
    <h1><b>{item.item}</b></h1>
    <p className="title" style={{color:"Black"}}>₹{ (item.price)*item.count}<b style={{float:"right",marginRight:"40px",color:"black"}}><b>Count:</b>{
      item.count
    }</b></p>
    <p>{item.Hotel}</p>
      
    
    <p>
    <div style={{display:"flex"}}>
    <button style={{backgroundColor:"#01949A"}} onClick={()=>{
      setCart([...addCart.filter(e=>e.item!==item.item),{...item,count:item.count-1}])
    }}>Decrease</button>
    
    <button style={{backgroundColor:"#004369"}} onClick={()=>{
      setCart([...addCart.filter(e=>e.item!==item.item),{...item,count:item.count+1}])

    }}>Add More</button>
    <button style={{backgroundColor:"#E32636"}} onClick={()=>{
      
      const tf=addCart.some(it=>it.id===item.id)
      if(tf){
      const arr=addCart.filter((it)=> it.id!==item.id)
      console.log(arr);
      setCart(arr);
    }
      }} >Delete </button>
      </div>
    </p>
    </div>
 
    </>
    
    
   
    
  )
}

export default Newcarttemp