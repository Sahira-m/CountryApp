import React from "react";

//Components
import Search from "../../component/Search-Component/Search";
import CountryList from "../../component/country-list/CountryList";
 import "./Home.css";
export function Home(  )
{ 
 return <div className="home">

<Search></Search>
<CountryList></CountryList>

</div>;
}