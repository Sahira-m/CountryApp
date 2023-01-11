import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

//redux
import { fetchCountryUrl } from "../../thunk/CountryDetails";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { AppDispatch } from "../../redux/store";

//mui
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";

import "./CountryDetails.css"
export default function CountryDetails()
 {
const name = useParams();
const Apiurl = "https://restcountries.com/v3.1/name/" + name.name;
const countryDetails = useSelector((state: RootState) =>state.countryData.countryItem);
console.log("apiurl is ",Apiurl);
const dispatch = useDispatch<AppDispatch>();
 useEffect(() => {
  dispatch(fetchCountryUrl(Apiurl));
}, [dispatch,Apiurl]);
return( <div className="cards">
<Card sx={{ maxWidth: 400 }} className="card">
  <CardHeader
    avatar={
      <Avatar
        sx={{ bgcolor:"yellowgreen" }}
      >{countryDetails[0]?.name.common.charAt(0)}</Avatar>
    }
    action={""}
    title={countryDetails[0]?.name.common}
    subheader={countryDetails[0]?.region}
  />
  <CardMedia
    className="flag"
    component="img"
    height="190"
    image={countryDetails[0]?.flags.svg}
    alt="Flags"
  />
  <CardContent>
    <Typography variant="body2" color="text.secondary">
      Population: {countryDetails[0]?.population}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Languages:
    </Typography>
    <ul>
       {countryDetails[0]?.languages ? (
        Object.entries(countryDetails[0]?.languages).map(([key]) => (
      
            <p key={key}> <span>{countryDetails[0]?.languages[key]}</span></p>
           
         ))
       ) : (
         <li>No Languages</li>
       )}
     </ul>
  </CardContent>
</Card>
</div>
);
};







 
 