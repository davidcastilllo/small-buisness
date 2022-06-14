import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import { Listings } from "./components/Listings";
import { Details } from "./components/Details";
import { Login } from "./components/Login";
import { Admin } from "./components/Admin";
import { NewListing } from "./components/NewListing";
import { authenticated } from "./states/Globalstate";

const ProtectedRoute = ({ children }) => {
 return authenticated.get() ? children : <Navigate to="/" />;
}

let Router = () => {
 
 return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/listings' element={<Listings />} />
      <Route path='/details' element={<Details />} />
      <Route
       path="/admin"
       element={
       <ProtectedRoute>
       <Admin />
       </ProtectedRoute>
      }
      />
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
