import {configureStore} from "@reduxjs/toolkit";

import {countryReducer} from "./slice/CountrySlice";
import {countrydetailsReducer} from "./slice/CountryDetailSlice"
import {InputReducer} from "./slice/UserInputSlice";
const store=configureStore({
    reducer:
    {
      country:countryReducer,
      countryData: countrydetailsReducer,
      userInput:InputReducer,
     },

     middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck:false,
      }), 
});
    export type RootState=ReturnType<typeof store.getState>;
    export default store;
    export type AppDispatch=typeof store.dispatch;
        