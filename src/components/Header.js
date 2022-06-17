import React from "react";
import './Header.css'
import { Link } from "react-router-dom";
import { checkAuth } from "./CheckAuth"

export let Header = () => {

 const linkStyle = {
  textDecoration: "none",
  color: 'white'
};

let Hello = () => {
  document.cookie = "loggedIn=true; max-age=0"
}

 return (
  <>
  <div className="main">
  <section className="left">
   <h4>Austin Small Buisness</h4>
   </section>
   <section className="right">
   <Link style={linkStyle} to="/listings">Listings</Link>
   {
   checkAuth() ?
   <>
    <Link style={linkStyle} to="/newlisting">Add</Link>
    <Link style={linkStyle} to="/" onClick={Hello}>LOGOUT</Link>
   </>
   : 
   <Link style={linkStyle} to="/">Login</Link>
   }
   </section>
  </div>
  {
  checkAuth() ?
  <div className="userbar">
   Logged in as: username
  </div>
  :null
 }
  
  </>
 )
} 