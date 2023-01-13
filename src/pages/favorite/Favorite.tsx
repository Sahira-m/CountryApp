import React from "react";

//Componenets
import FavoriteList from "../../component/favoriteList/FavoriteList";
import "./Favorite.css"
export default function FavoritePage() 
{
return(
     <div className="favorite">
         <FavoriteList></FavoriteList> 
      </div> 
      );  
}