import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import { Listings } from "./components/Listings";
import { Details } from "./components/Details";
import { Login } from "./components/Login";
import { NewListing } from "./components/NewListing";
import { checkAuth } from "./components/CheckAuth";

const ProtectedRoute = ({ children }) => {
 return checkAuth() ? children : <Navigate to="/" />;
}

let Router = () => {
 
 return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/listings' element={<Listings />} />
      <Route path='/details/:id' element={<Details />} />
      <Route
       path="/newlisting"
       element={
       <ProtectedRoute>
       <NewListing />
       </ProtectedRoute>
      }
      />
    </Routes>
 )
}

export default Router
