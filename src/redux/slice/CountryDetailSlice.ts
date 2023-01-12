import { createSlice } from "@reduxjs/toolkit";
import { CountryType } from "../../types/type";

type StateType = {
  countryItem: CountryType[];
};
const initialState: StateType = {
  countryItem:[] ,
};

const countryDetailsSlice = createSlice({
  name:"countryData",
  initialState,
  reducers: {
    countryDetails: (state, action) => {
      state.countryItem = action.payload;
    },
  },
});
 const countryDetailsAction = countryDetailsSlice.actions;
 export default countryDetailsAction;
export const countrydetailsReducer = countryDetailsSlice.reducer;
