import { Header } from "./Header";
import { Link } from "react-router-dom";
import { checkAuth } from "./CheckAuth";
import { bizdata } from "../states/Globalstate";
import { useState } from "@hookstate/core";
import './Listings.css'
import redTrash from './redTrash.png'

export let Listings = () => {

  let bizList = useState(bizdata)

  let deleteBiz = (id) => {
   let newBizData = JSON.parse(JSON.stringify(bizList.get()))
   newBizData.splice(id,1)
   bizList.set([...newBizData])
  }

  const linkStyle = {
   color: 'black'
 };
 

 return ( 
 <>
 <Header />
 <div id="centerDiv">
 <table id="bizTable">
        <thead className="bizHead">
            <tr>
                <th className="bizTitles">Name</th>
                <th className="bizTitles">Description</th>
                <th className="bizTitles">Hours</th>
                <th className="bizTitles">Address</th>
                {checkAuth()?<th className="bizTitles">Delete</th>:null}
            </tr>
        </thead>
        <tbody className="bizBody">
            {bizList.get().map((item,ix) => {
             return <tr key={ix}>
              <td className="bizData"><Link style={linkStyle} to={'/details/' + ix} >{item.name}</Link></td>
              <td className="bizData">{item.description}</td>
              <td className="bizData">{item.hours}</td>
              <td className="bizData">{item.address}</td>
              {checkAuth() ? <td className="bizData"><img src={redTrash} onClick={() => {deleteBiz(ix)}} id='TrashImg' /></td>:null}
             </tr>
            })}
        </tbody>
    </table>
</div>
 </>
 )
}