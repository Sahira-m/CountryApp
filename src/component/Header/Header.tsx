import  React from 'react';
import {Link} from "react-router-dom"; 
import { useSelector } from 'react-redux';
import { useState } from 'react';

//Mui
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FavoriteIcon from  "@mui/icons-material/Favorite";
import HouseIcon from '@mui/icons-material/House';

//Redux store
import { RootState } from '../../redux/store';


export default function Header()
 {
    const favaoriteList=useSelector((state:RootState)=>state.country.favoriteList);
    const style = { textDecoration: 'none' };
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

   //const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =useState<null | HTMLElement>(null);
    const [auth, setAuth] = useState(true);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  }; 
         return (
         <Box sx={{ flexGrow: 0 }}>
              <AppBar position="static">
               <Toolbar>
                  <IconButton
                     size="large"
                   edge="start"
                     color="inherit"
                   aria-label="open drawer"
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                   <Typography
                    variant="h6"
                    noWrap
                     component="div"
                     sx={{ display: { xs: 'none', sm: 'block' } }}
                   >
                    Country
                   </Typography> 
                     <Box sx={{ flexGrow: 100,position:'relative' ,marginLeft:140 }} >  
                 <Link style={style}   to="/" >
                 <HouseIcon sx={{ color: "white" }}/> 
                 </Link>
              
                    </Box>
                 <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Login' : 'Logout'}
        /> 
                 {auth && (
          
               <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                 color="inherit" 
              >
                <AccountCircle sx={{ color: auth ? "green" :"red"  }} />


           


              </IconButton> 
             
          )}
                 <Box  sx={{ flexGrow: 20}} >
                        <Link style={style}  to="/favorite"> 
                        <Badge badgeContent={favaoriteList.length} color="error">
                        <FavoriteIcon sx={{ color: favaoriteList.length>0 ?"pink[200]" : "white" }} />  </Badge>
                       </Link>   
                   </Box>
               </Toolbar>
             </AppBar>             
            </Box> 
             
                );
 
        }