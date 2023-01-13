import React from "react";
import {Routes,Route} from "react-router-dom";


//pages 
import Favorite from "./pages/favorite/Favorite";
import {Home} from "./pages/home/Home";
//css redux store and thunk
import "./App.css";

import CountryDetails from "./pages/countryDetails/CountryDetails";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
function App()
 {
   const theme = createTheme({
    typography: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
    },
  }); 
 
  return <div className="App">
     <ThemeProvider theme={theme}> 
    <Header></Header>
    <Routes>
<Route path= "" element={<Home></Home>} ></Route>
<Route path= "/favorite" element={<Favorite></Favorite>}  ></Route>
<Route path="/countries/:name" element={<CountryDetails />}></Route>
    </Routes>
       <Footer></Footer> 
       </ThemeProvider> 
  </div>;
}
export default App;
