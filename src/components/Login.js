import React, { useEffect } from "react";
import { Header } from "./Header";
import './Login.css'
import { checkAuth } from "./CheckAuth";
import { Navigate } from "react-router-dom";

export let Login = () => {

    let setCookies = () => {
     document.cookie = "loggedIn=true"
    }

 return (
  <>
  <Header />
  {
   checkAuth() ? 
  <Navigate to="/listings" />
  : <div id="form">
  <form onSubmit={setCookies}>
      <section>
        <label for="username"></label>
        <input type="text" id="username" placeholder="Username" required/>
      </section>
      <section>
        <label for="password"></label>
        <input type="password" id="password" placeholder="Password" required/>
      </section>    
      <section>
        <button id="login" type="submit">LOGIN</button>
      </section>
  </form>
  </div>
  }
  </>
 )
}