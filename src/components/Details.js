import { Header } from "./Header";
import { bizdata } from "../states/Globalstate";
import axios from "axios";
import { GoogleMap, useJsApiLoader , Marker } from "@react-google-maps/api";
import './Details.css'

export let Details = () => {

let url = window.location.href
let id = url.charAt(url.length - 1)
let biz = [{...bizdata.get()[id]}]
let location = biz[0].address

// const { isLoaded } = useJsApiLoader({
//  id: 'google-map-script',
//  googleMapsApiKey: "AIzaSyDWp36X7jis-7uL6rywBY77rR2WTTKaiH0"
// })

return <>
  <Header />
  <div>
   {biz.map((item,ix) => {
    return <div key={ix}>
     <h2>{item.name}</h2>
     <h3>{item.address}</h3>
     <h3>{item.hours}</h3>
     <span>{item.description}</span>
     <div>Hello</div>
    </div>
    </div>
   })}
  </div>
  </>
}




