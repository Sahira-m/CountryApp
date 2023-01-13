import React from "react";

//Components
import Search from "../../component/searchComponent/Search";
import CountryList from "../../component/countryList/CountryList";
 import "./Home.css";
export function Home(  )
{ 
 return <div className="home">

<Search></Search>
<CountryList></CountryList>

</div>;
}