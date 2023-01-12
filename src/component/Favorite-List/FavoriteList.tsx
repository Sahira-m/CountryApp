import React , { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";

//redux store ,component,thunk file
import { RootState,AppDispatch } from "../../redux/store";
import { fetchCountryUrl } from "../../thunk/CountryReads";
import FavoriteItem from "../Favorite-Item/FavoriteItem";
import PageLaoad from "../Page-Load/PageLoad";


//Mui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//css
import "./FavoriteList.css";

  
export default function FavoriteList()
{
    const favoriteList=useSelector((state:RootState)=>state.country.favoriteList);
    const isLoading=useSelector((state:RootState)=>state.country.isLoad);
    const dispatch=useDispatch<AppDispatch>();
    useEffect(()=>
    {dispatch(fetchCountryUrl());},
    [dispatch]);
   
    return(
      <div> 
        {isLoading?<PageLaoad></PageLaoad>:""}
    <TableContainer component={Paper} >
        <Table sx={{ minWidth: 700 }} aria-label="customized table" className="table">
          <TableHead>
            <TableRow>
              <TableCell>Flag</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Region</TableCell>
              <TableCell align="right">Population</TableCell>
              <TableCell align="right">Languages</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
  {
  favoriteList.map((countries:any)=>
  
  <FavoriteItem countries={countries} key={crypto.randomUUID()}></FavoriteItem>
     
      )
  }   
          </TableBody>
        </Table>
      </TableContainer>
      </div>);
}