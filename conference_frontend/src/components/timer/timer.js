import React,{ useState, useEffect } from 'react'
import "./timer.css"
import rectangle from '../../assets/Rectangle.png'
import arrow from '../../assets/arrow-timer.png'

export default function Timer(props) {
    var countDownDate = new Date("Nov 5, 2020 10:37:25").getTime();
    
    const [days, setdays] = useState(0);
    const [hours, sethours] = useState(0);
    const [minutes,setminutes] = useState(0);
    const [seconds, setseconds] = useState(0);
    
    useEffect(()=>{
        let myInterval = setInterval(() => {
            
          var now = new Date().getTime();
    
 
           var distance = countDownDate - now;
    
 
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          setdays(days)
          sethours(hours)
          setminutes(minutes)
          setseconds(seconds)
    
            }, 1000)
            return ()=> {
                clearInterval(myInterval);
              };
        });
    return (
        <div className="main">
            <div className="box">
                <div>
                    <span style={{fontWeight:"bolder",fontSize:30}}>{days} <br/></span>
                   
                    <span style={{fondWeight:"bold"}}>days</span>
                </div>
                <div>
                    <span style={{fontWeight:"bolder",fontSize:30}}>{hours} <br/></span>
                   
                    <span style={{fondWeight:"bold"}}>hours</span>
                </div>
                <div>
                    <span style={{fontWeight:"bolder",fontSize:30}}>{minutes}<br/></span>
                   
                    <span style={{fondWeight:"bold"}}>minutes</span>
                </div>
                <div>
                    <span style={{fontWeight:"bolder",fontSize:30}}>{seconds} <br/></span>
                   
                    <span style={{fondWeight:"bold"}}>seconds</span>
                </div>
               
                
              <div >
                  <img src={arrow}/>
              </div>
            </div>
            
        </div>
    )
}
