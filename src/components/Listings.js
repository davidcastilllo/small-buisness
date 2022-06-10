import { Header } from "./Header";
import { Link } from "react-router-dom";

export let Listings = () => {
 return ( 
 <>
 <Header />
  <div>Listings Page!</div>
  <Link to="/details">Show Details</Link>
 </>
 )
}