import React, { useState } from "react";

import "../style/Button.css"



const Button = ({type,variant,className,id,onClick,size,children})=>{
    

    const [activeCard,setActiveCard] = useState(false)

    const containerClick =() => {
       setActiveCard(!activeCard)
    }



const handleClickonSub = () => {
    <button 
    variant ="W"
    onClick ={handleClickonYr}
    >2023</button>
       <button
        variant ="W"
       onClick ={handleClickonYr}>2022</button>
    
 }
 
 
 const handleClickonYr = () => {
    <button variant ="W" onClick ={handleClickonDate}
 >Date</button>
   <button 
    variant ="W"
   onClick ={handleClickonDate}
 >Date</button> 
 
   }
    const handleClickonDate = () => {
       <button 
       variant ="W"
      onClick ={handleClickonShift}
    >SHIFT-1</Button>
      <button 
       variant ="W"
      onClick ={handleClickonShift}
    >SHIFT-2</button>
    }
     
    const handleClickonShift = () => {
    
       
 }
    
    
    return {
         <button

          type ={type ? type : "button"}
          variant={variant}
          className={className? `btn-component ${className}` : "btn-component" }} 
          id={id}
          onClick={onClick}      
          size={size}

           >
           {children}
           
           </button>
    


};
export default Button;





