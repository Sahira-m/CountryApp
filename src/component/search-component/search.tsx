import React from "react";
import { useState } from 'react';
import { useDispatch } from "react-redux";
//mui
import TextField from '@mui/material/TextField';
import { InputBase } from "@mui/material";
import "./Search.css"
//slice
import  InputActions from "../../redux/slice/UserInputSlice"

export default function Search()
{
    const [userInput, setUserInput]=useState<string>("");
    const dispatch=useDispatch();
    function getConutryName(event: React.ChangeEvent<HTMLInputElement>)
    {
      const input =event.target.value;
     setUserInput(input); 
     dispatch(InputActions.userInputMethod(userInput));
    
     
    } 

     function keyPress()
    {
       //if (e.keycode === 13)
    // {
         setUserInput(""); 
     
          dispatch(InputActions.userInputMethod(userInput));
     //}
    }
    
    return<div className="Text-Field">

<TextField value={userInput} 
 id="standard-basic"
  label="Standard"
   variant="standard"
  type="search" 
  onChange={getConutryName}
  //onkeyPress ={()=>keyPress}
  //onKeyDown={keyPress}
  
  />
    <InputBase  ></InputBase>
    </div>
    ;
}