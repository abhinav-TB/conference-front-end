import React from 'react'
import boat from '../../assets/houseboat.png'
import './intro.css'

export default function intro() {
    return (
        <div className="Introcontainer">
            <div className="descri">
               <div style={{fontSize:35}}>
                   <span >CONFERENCE COMMITTEES</span>
               </div>
              
              <div style ={{fontSize:30, color:"#52D4E1",fontWeight:"bold"}}>
                  <span>#ISBISKOCHI2020</span>
              </div>
              <div style ={{fontSize:30, color:"#52D4E1",fontWeight:"bold",paddingTop:"50px"}}>
                  <span>DEC 28 - 30, 2020</span>
              </div>
              
            </div>
            <div style={{marginLeft:"50px"}}>
             <img src={boat} style={{width:"60%"}}/>
            </div>
            
        </div>
    )
}
