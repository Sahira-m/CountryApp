
import React ,{Fragment,useState} from "react";
import { useSelector,useDispatch } from "react-redux";
//mui
import TableCell from '@mui/material/TableCell';
import FavoriteIcon from  "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { blueGrey, pink } from "@mui/material/colors";
import Alert from '@mui/material/Alert';
import { Snackbar } from "@mui/material";

//redux store, types ,css
import "./countryItem.css";
import countryActions from "../../redux/slice/countrySlice";
import { CountryType } from "../../types/type";
import { RootState,AppDispatch } from "../../redux/store";
import { Link } from "react-router-dom";

type ListTypes={
    countries:CountryType;    
}

export default function CountryItem({countries}:ListTypes)
{
  // search part

  const dispatch=useDispatch<AppDispatch>();
  const favaoriteList=useSelector((state:RootState)=>state.country.favoriteList);
  const isDuplicated=favaoriteList.some((favoritrItem:any)=>
  favoritrItem.name.common.toLocaleLowerCase()===countries.name.common.toLocaleLowerCase());
  
//snackbar logic
const [open, setOpen] = useState(false);
const [openFail, setOpenFail] = useState(false);
const [alertMessage,setAlert]=useState<boolean>(false);      
const handleClick = () => {
  setOpen(true);
  setAlert(true);
};
const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
setOpenFail(false);
    setOpen(false);
  }; 
function addFavorite()
{
handleClick();
   if(isDuplicated)
   {
    setAlert(false);
    setOpen(true);
   } 
   else
   {
    dispatch(countryActions.favoriteLists(countries));
    setAlert(true);
    setOpenFail(true);
   }
   
  }
  return(<Fragment>
   
  <TableCell component="th" scope="row">
  <img src={countries.flags.png} alt={countries.name.common} className="flagImage"></img>
  </TableCell>
  <TableCell align="right">{countries.name.common}</TableCell>
  <TableCell align="right">{countries.region}</TableCell>
  <TableCell align="right">{countries.population}</TableCell>
  <TableCell align="right">
  <ul>
       {countries.languages ? (
        Object.entries(countries.languages).map(([key]) => (
      
            <p key={key}> <span>{countries.languages[key]}</span></p>
           
         ))
       ) : (
         <li>No Languages</li>
       )}
     </ul>
       </TableCell>
       <TableCell align="right"> <IconButton aria-label="add to favorites" onClick={addFavorite}>
       <FavoriteIcon  sx={{ color: isDuplicated ? pink[500] : blueGrey }}>
       </FavoriteIcon> 
          </IconButton>
          {
!alertMessage ? 
(    
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert severity="warning">The favorite item exist already</Alert>
        </Snackbar>
      
      ):
      
        <Snackbar  open={openFail} autoHideDuration={1000} onClose={handleClose}>
        <Alert severity="success">Item Added Succesfully</Alert>
        </Snackbar>
    
} 
        </TableCell>
       <TableCell align="right">
           <Link to={`/countries/${countries.name.common}`}  > 
            MoreDetails
          </Link>{" "}  </TableCell>

</Fragment>

);

} 

 





        





 


