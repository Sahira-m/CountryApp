
import React ,{Fragment} from "react";

//Mui
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

//redux srore,css, types
import { CountryType } from "../../types/type";
import "./FavoriteItem.css";
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
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function FavoriteItem({countries}:ListTypes)
{
   
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
      
</StyledTableRow>
</Fragment>);
}



 


