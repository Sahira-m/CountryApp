import countryActions from "../redux/slice/CountrySlice";
import { AppDispatch } from "../redux/store";

const url=`https://restcountries.com/v3.1/all`;
export function fetchCountryUrl()
{
   return async(dispatch:AppDispatch)=>
   {
    const response =await fetch(url);
    const countryDetails=await response.json();
    dispatch(countryActions.isLoadSets());
dispatch(countryActions.countryLists(countryDetails));

   }

}
 