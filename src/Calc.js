// import { useState } from "react";
import React, {useState} from "react";

const Calc = () =>{
    const [error,seterror] = useState(false)
    const [errormsg,seterrormsg ] = useState('')
    return (
        <div className="calc">
     <h1>React calc</h1>
     <input type='number' id='num1' name='num1' placeholder='enter a number'></input>
     <input type='number' id='num2' name='num2' placeholder='enter a number'></input>
     <div className='buttons'>
      <button className='add'>+</button>
      <button className='substract'>-</button>
      <button className='multi'>*</button>
      <button className='div'>/</button>
     </div>

     <h3 className={`status ${error }`}>error</h3>
     <p className='message'>result</p>
    </div>
    )
};

export default Calc;