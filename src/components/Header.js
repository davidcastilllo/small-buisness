import React from "react";
import './Header.css'
import { Link } from "react-router-dom";

export let Header = () => {

 const linkStyle = {
  textDecoration: "none",
  color: 'white'
};

 return (
  <div className="main">
  <section className="left">
   <h4>Austin Small Buisness</h4>
   </section>
   <section className="right">
   <Link style={linkStyle} to="/listings">Listings</Link>
   <Link style={linkStyle} to="/">Login</Link>
   </section>
  </div>
 )
} 