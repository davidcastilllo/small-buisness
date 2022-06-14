import React, { useEffect } from "react";
import { Header } from "./Header";
import './Login.css'
import { authenticated, authenticated } from "../states/Globalstate";
import { useState as hookState } from "@hookstate/core";


export let Login = () => {

    let auth = useState(authenticated)

    console.log(auth.get())
    
    // let cookies = cookie.parse('loggedIn')
    // console.log('before', cookies)

    let setCookies = () => {
        console.log('You clicked me')
    }

 return (
  <>
  <Header />
  <div id="form">
  <form onSubmit={() => {setCookies()}}>
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
  </>
 )
}