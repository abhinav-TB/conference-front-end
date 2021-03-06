import React from 'react'
import {Link} from 'react-router-dom'
import "./navbar.css"
import logo from '../../assets/logo.png'
import cusat from '../../assets/CUSAT LOGO.png'

export default function navbar() {
    return (
     
        <div className="nav">
            <div>
             <Link to='/' style={{textDecoration: 'none'}}>
            <img src={logo}/>
            </Link>
           </div>
           
           <Link to='/' style={{textDecoration: 'none'}}>
           <div className="title">
               <div>
                   <span>ISBIS_Kochi</span>
               </div>
               <div>
                   <span>Conference [2020] </span>
               </div>
           </div>
           </Link>

           <div>
            <span>About </span>
           </div>
           <div>
            <span>Speakers </span>
           </div>
           <div>
               <Link to ="/commities" style={{textDecoration: 'none'}}>
               <span>committees </span>
               </Link>
         
           </div>
           <div>
            <span>Scientific_Programme </span>
           </div>
           <div>
            <span>More </span>
           </div>
           <div>
            <button className="login-btn">Login</button>
           </div>
           <div>
            <img src={cusat}/>
           </div>
        
            
        </div>
    )
}
