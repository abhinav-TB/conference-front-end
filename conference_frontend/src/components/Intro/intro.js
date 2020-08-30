import React from 'react'
import boat from '../../assets/houseboat.png'
import './intro.css'

export default function intro() {
    return (
        <div className="container">
            <div className="desc">
               <div style={{fontSize:35}}>
                   <span >DEC 28 - 30, 2020</span>
               </div>
              <div style={{fontSize:30}}>
                  <span>International Conference on<br/>
                   Advanced Statistical Techniques in<br/>
                   Business and Industry</span>
              </div>
              <div style ={{fontSize:30, color:"#52D4E1",fontWeight:"bold"}}>
                  <span>#ISBISKOCHI2020</span>
              </div>
              <div>
                  <ul style={{listStyleType:"none"}}>
                      <li>A regional conference of International Society for <br/>Business and Industrial Statistics.</li>
                      <li>In conjunction with Twenty fifth Anniversary of <br/> Department of Statistics, CUSAT.</li>
                  </ul>
              </div>
            </div>
            <div>
             <img src={boat} style={{width:"85%"}}/>
            </div>
            
        </div>
    )
}
