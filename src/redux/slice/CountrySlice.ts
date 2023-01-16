import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {CountryType } from "../../types/type";

type stateType={
    countryList:CountryType[];
    favoriteList:CountryType[];
    isLoad:boolean;
    
};
const initialState:stateType={
   countryList:[],
   favoriteList:[],
   isLoad:true,
};

const countrySlice=createSlice(
{
name:"country",
initialState,
reducers:{
    countryLists:(state,action)=>
    {
      state.countryList=action.payload;
      state.isLoad=false;
    },
    favoriteLists:(state,action:PayloadAction<CountryType>)=>
    {
      state.favoriteList.push(action.payload);
      state.isLoad=false;
      
    },
    isLoadSets:(state)=>
    {
      state.isLoad=true;
    },

    removeFromFavorite: (state, action) => {
      let index = 0;
      for (let i = 0; i < state.favoriteList.length; i++) 
      {
        if (state.favoriteList[i].name.common === action.payload) {
          index = i;
          break;
        }
      }
      state.favoriteList.splice(index, 1);
    },
    

}
}
);
const countryActions=countrySlice.actions;
export default countryActions;
export const countryReducer=countrySlice.reducer;