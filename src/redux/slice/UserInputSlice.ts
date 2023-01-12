import { createSlice} from "@reduxjs/toolkit";

type InputType={
    userInput:string;
};
const initialState:InputType={
  userInput:"",
};

const inputSlice=createSlice(
{
name:"userInput",
initialState,
reducers:{
    userInputMethod:(state,action)=>
    {
        state.userInput=action.payload
    }, 
}
}
);
const InputActions=inputSlice.actions;
export default InputActions;
export const InputReducer=inputSlice.reducer;