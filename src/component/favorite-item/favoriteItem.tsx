
import React ,{Fragment, useEffect} from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
//Mui
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {Snackbar,Alert} from "@mui/material";


//redux srore,css, types
import { CountryType } from "../../types/type";
import countryActions from "../../redux/slice/countrySlice";
import "./FavoriteItem.css";
import { Button } from "@mui/material";

type ListTypes={
    countries:CountryType;    
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
   backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
 },
 [`&.${tableCellClasses.body}`]: {
   fontSize: 14,
 },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
   backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function FavoriteItem({countries}:ListTypes)
{
  // snacbar
const [openRemove, setOpenRemove] = useState(false);
  const deleteDispatch=useDispatch();
  const handleClick = () => {
    setOpenRemove(true);

  };
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    } 
    setOpenRemove(false);
  }
  function removeFromFavorite(name:string): void
  {
  handleClick();
  setOpenRemove(true);
   deleteDispatch(countryActions.removeFromFavorite(name));
   
  }
 
  return(<Fragment>
    <StyledTableRow key={crypto.randomUUID()} className ="CountryTable" >
  <StyledTableCell component="th" scope="row" width={30}>
  <img src={countries.flags.png} alt={countries.name.common} className="flagImage"></img>
  </StyledTableCell>
  <StyledTableCell align="right" width={30}>{countries.name.common}</StyledTableCell>
  <StyledTableCell align="right" width={30}>{countries.region}</StyledTableCell>
  <StyledTableCell align="right" width={30}>{countries.population}</StyledTableCell>
  <StyledTableCell align="right" width={30}>
   <ul>
       {countries.languages ? (
        Object.entries(countries.languages).map(([key]) => (
           <li key={key}>{countries.languages[key]}</li>
         ))
       ) : (
         <li>No Languages</li>
       )}
     </ul> 
       </StyledTableCell> 
       
      <StyledTableCell>
      <Button variant="text" onClick={()=>removeFromFavorite(countries.name.common)} sx={{color:"black"}}>DELETE</Button>
         
      <Snackbar  open={openRemove} autoHideDuration={1000} onClose={handleClose}>
        <Alert severity="success">{countries.name.common} Removed Succesfully</Alert>
    </Snackbar>
      
      </StyledTableCell>
      
</StyledTableRow>


 
</Fragment>);
}



 


