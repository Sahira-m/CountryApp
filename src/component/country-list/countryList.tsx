import  React, { useEffect,useState }  from "react";
import { useSelector,useDispatch } from "react-redux";
//mui
import CountryItem from "../country-item/CountryItem";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Tooltip ,IconButton} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import "./CountryList.css";
import { RootState,AppDispatch } from "../../redux/store";
import { fetchCountryUrl } from "../../thunk/CountryReads";
import PageLaoad from "../Page-Load/PageLoad";
import countryActions from "../../redux/slice/countrySlice";
//component
//types
import { CountryType } from "../../types/type";


export default function CountryList()
{
 //new code 
 const dispatch = useDispatch<AppDispatch>();
 const arrayDispatch=useDispatch();
 const isLoading = useSelector((state: RootState) => state.country.isLoad);
 const [sortButton, setSortButton]=useState<boolean>(false);
/*  useEffect(() => {
    dispatch(fetchCountryUrl);
  }, []); */
 //new codes
const countryList=useSelector((state:RootState)=>state.country.countryList);
//console.log("Country list is",countryList);
 useEffect(()=>
{dispatch(fetchCountryUrl());},
[dispatch]); 
const userInput = useSelector(
  (state: RootState) => state.userInput.userInput);
  let countryResult;
  if(userInput)
  countryResult=countryList.filter((country:CountryType)=> country.name.common.toLocaleLowerCase().includes(userInput.toLowerCase()) );
else
countryResult=countryList;

    //console.log("country res list is",countryResult);
    //console.log("country list is",countryList);
    //console.log("Uip",userInput);
    const sortedCountry = [...countryResult];
    function ascendingCountry()
     {   
      setSortButton(true);
      const sorted = sortedCountry.sort((a, b) => {
        if (a.name.common > b.name.common) {
          return 1;
        }
    
        if (a.name.common < b.name.common) {
          return -1;
        }
        return 0;
      });
       arrayDispatch(countryActions.countryLists(sorted)); 
     }
     function descendingCountry()
     {   
      setSortButton(false);
      const sorted = sortedCountry.sort((a, b) => {
        if (a.name.common < b.name.common) {
          return 1;
        }
    
        if (a.name.common > b.name.common) {
          return -1;
        }
        return 0;
      });
       arrayDispatch(countryActions.countryLists(sorted)); 
     }

    return(
      <div>
      {isLoading ? <PageLaoad></PageLaoad> : ""}
    <TableContainer component={Paper} className="table" > 
        <Table sx={{ minWidth:100 }} size="small" aria-label="a dense table"  className="table">
          <TableHead>
            <TableRow>
              <TableCell>Flag</TableCell>
              <TableCell align="right">Name <Tooltip title="SortByNames">
                  {sortButton? (
                    <IconButton onClick={descendingCountry}>
                      <ArrowDownwardIcon fontSize="small" />
                    </IconButton>
                  ) : (
                    <IconButton onClick={ascendingCountry}>
                      <ArrowUpwardIcon fontSize="small" />
                    </IconButton>
                  )}
                </Tooltip>
              </TableCell>
              <TableCell align="right">Region</TableCell>
              <TableCell align="right">Population</TableCell>
              <TableCell align="right">Languages</TableCell>
              <TableCell align="right">Favorite</TableCell>
              <TableCell align="right">Details </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           
  {
    sortedCountry.map((countries)=>
    
    <TableRow  key={crypto.randomUUID()}
    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
  <CountryItem countries={countries}  key={crypto.randomUUID()} ></CountryItem>
  </TableRow>
    
      )
  }
      </TableBody>
        </Table>
      </TableContainer> 
      </div>
       )
;
}

