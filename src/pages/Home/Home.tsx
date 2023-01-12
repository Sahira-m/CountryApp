import React from "react";

//Components
import Search from "../../component/search-component/search";
import CountryList from "../../component/country-list/countryList";
 import "./Home.css";
export function Home(  )
{ 
 return <div className="home">

<Search></Search>
<CountryList></CountryList>

</div>;
}