import React from "react";
import {Routes,Route} from "react-router-dom";


//pages 
import Favorite from "./pages/Favorite/Favorite";
import {Home} from "./pages/Home/Home";
//css redux store and thunk
import "./App.css";

import CountryDetails from "./pages/Country-Details/CountryDetails";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
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
