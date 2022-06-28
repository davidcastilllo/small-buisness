import { Header } from "./Header";
import { bizdata } from "../states/Globalstate";
import { useState } from "@hookstate/core";
import './NewListing.css'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";

let url = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key='
let key = 'AIzaSyDWp36X7jis-7uL6rywBY77rR2WTTKaiH0';

let Map = () => {
 return (
   <GoogleMap
     defaultZoom={10}
     defaultCenter={{ lat: 30.267153, lng: -97.743057 }} 
     >
     <Marker position={{ lat: 30.2672, lng: -97.7431 }}/>
   </GoogleMap>
 )
};

export let NewListing = () => {

 let bizList = useState(bizdata)
 let WrappedMap = withScriptjs(withGoogleMap(Map));

 let addData = (e) => {
  e.preventDefault();
  console.log('I added Data!')
  let newEntry = {
   name: document.getElementById('name').value
   ,description: document.getElementById('description').value
   ,hours: document.getElementById('hours').value
   ,address: document.getElementById('address').value
  }
  let newBizData = JSON.parse(JSON.stringify(bizList.get()))
  newBizData.push(newEntry) 
  bizList.set([...newBizData])
  console.log(bizList.get())
 }

 return (
  <>
  <Header /> 
  <div id="body">
  <div className="form">
  <form onSubmit={addData} id="newBiz">
      <section>
        <label for="name"></label>
        <input type="text" placeholder="Name" id="name" required />
      </section>
      <section>
        <label for="address"></label>
        <input type="text" placeholder="Address" id="address" required/>
      </section>
      <section>
        <label for="hours"></label>
        <input type="text" placeholder="Hours(ex. 8AM-9PM)" id="hours" required/>
      </section>    
      <section>
        <label for="description"></label>
        <input type="text" placeholder="Description" id="description" required/>
      </section>        
      <section>
        <button id="save" type="submit">SAVE</button>
      </section>
  </form>
  </div>
  <div id="googlemaps">
      <WrappedMap
        googleMapURL={`${url}${key}`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  </div>
  </>
 )
}