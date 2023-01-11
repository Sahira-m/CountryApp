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
      //console.log("favorite actionpayload list is",action.payload);
      state.isLoad=false;
    },
    isLoadSets:(state)=>
    {
      state.isLoad=true;
    }

}
}
);
const countryActions=countrySlice.actions;
export default countryActions;
export const countryReducer=countrySlice.reducer;