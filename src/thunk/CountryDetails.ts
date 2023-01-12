import countryDetailsAction from "../redux/slice/CountryDetailSlice";
import { AppDispatch } from "../redux/store";


export  function fetchCountryUrl(url:string)
{
   return async(dispatch:AppDispatch)=>
   {
    const response =await fetch(url);
    const countryDetails=await response.json();
    dispatch(countryDetailsAction.countryDetails(countryDetails)); 

   }

}