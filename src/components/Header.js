import React from "react";
import './Header.css'
import { Link } from "react-router-dom";
import { authenticated } from "../states/Globalstate";


export let Header = () => {

 const linkStyle = {
  textDecoration: "none",
  color: 'white'
};

 return (
  <>
  <div className="main">
  <section className="left">
   <h4>Austin Small Buisness</h4>
   </section>
   <section className="right">
   <Link style={linkStyle} to="/listings">Listings</Link>
   {
   authenticated.get() ?
   <>
    <Link style={linkStyle} to="/newlisting">Add</Link>
    <Link style={linkStyle} to="/">LOGOUT</Link> 
   </>
  
   : 
   <Link style={linkStyle} to="/">Login</Link>
   }
   </section>
  </div>
  {
  authenticated.get() ?
  <div className="userbar">
   Logged in as: username
  </div>
  :null
 }
  
  </>
 )
} 