import { Header } from "./Header";
import { bizdata } from "../states/Globalstate";
import './Details.css'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";

let url = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key='
let key = 'AIzaSyDWp36X7jis-7uL6rywBY77rR2WTTKaiH0';

let Map = () => {

 let winurl = window.location.href
 let id = winurl.charAt(winurl.length - 1)
 let biz = [{...bizdata.get()[id]}]

 return (
   <GoogleMap
     defaultZoom={10}
     defaultCenter={{ lat: 30.267153, lng: -97.743057 }} 
     >
      {biz.map((item,ix) => {
       return <Marker position={{ lat: item.lat, lng: item.long }}/>
      })}
     
   </GoogleMap>
 )
};

export let Details = () => {

 let WrappedMap = withScriptjs(withGoogleMap(Map));
 let winurl = window.location.href
let id = winurl.charAt(winurl.length - 1)
let biz = [{...bizdata.get()[id]}]

return <>
  <Header />
  <div id="container">
  <div id="detailsBody">
   {biz.map((item,ix) => {
    return <div key={ix}>
     <h2 className="bizTitle">{item.name}</h2>
     <h3 className="bizAddress">{item.address}</h3>
     <h3 className="bizHours">{item.hours}</h3>
     <span className="bizDesc">{item.description}</span>
    </div>
   })}
   <div id="detailsMap">
      <WrappedMap
        googleMapURL={`${url}${key}`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
    </div>
    </div>
  </>
}




