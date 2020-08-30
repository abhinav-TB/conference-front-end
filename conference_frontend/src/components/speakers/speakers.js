import React from 'react'
import './speakers.css'
import speaker1 from '../../assets/speaker1.png'
import speaker2 from '../../assets/speaker2.png'
import speaker3 from '../../assets/speaker3.png'
import speakerArrow from '../../assets/speaker-arrow.png'

export default function speakers() {
    return (
        <div className="main-div">
            <div className="title-main">
                <span className="title-main">PLENERY SPEAKERS</span>
            </div>
            <div className="card">
               <img src={speaker1}/>
               <div className="card-content">
                   <h3 style={{fontSize:35}}>Nalini Ravishankar</h3>
                   <p style={{marginLeft:"30px"}}>She is a Professor of Statistics at the University of Connecticut, and her research area includes Time Series Analysis, Actuarial Science, etc. She is a co-editor in Chief of International Statistical Review, and President of the International Society for Business and Industrial Statistics from 2015-2017. She is a fellow of the American Statistical Association and an elected member of International Statistical Institute with Dipak K. Dey. Nalini Ravishanker is the author of A First Course in Linear Model Theory, She is also one of the editors of Handbook of Discrete-valued Time Series.
                    </p>
               </div>

            </div>
            <div className="card">
              
               <div className="card-content2">
                   <h3 style={{fontSize:35,paddingLeft:"550px"}}>Fabrizio Ruggeri</h3>
                   <p style={{marginLeft:"30px", paddingRight:"30px"}}>Fabrizio Ruggeri  is Research Director at the Italian National Research Council in Milano. His interests are mostly in Bayesian and industrial statistics, especially in robustness, decision analysis, reliability, stochastic processes; recently, he got involved in biostatistics and biology as well. Dr. Ruggeri is Adjunct Faculty at Polytechnic Institute (New York University), Faculty in the Ph.D. program in Mathematics and Statistics at University of Pavia, Foreign Faculty in the Ph.D. program in Statistics at the University of Valparaiso.
 Fabrizio Ruggeri  is Research Director at the Italian National Research Council in Milano. His interests are mostly in Bayesian and industrial statistics, especially in robustness, decision analysis, reliability, stochastic processes; recently, he got involved in biostatistics and biology as well. Dr. Ruggeri is Adjunct Faculty at Polytechnic Institute (New York University), Faculty in the Ph.D. program in Mathematics and Statistics at University of Pavia, Foreign Faculty in the Ph.D. program in Statistics at the University of Valparaiso, Member of the Advisory Board of the Ph.D. program in Mathematical Engineering at Polytechnic of Milano. ASA Fellow and ISI Elected Member, Dr. Ruggeri is the current ISBA (International Society for Bayesian Analysis) President and former ENBIS (European Network for Business and Industrial Statistics) President.
                    </p>
               </div>
               <img src={speaker2}/>

            </div>
            <div className="card">
               <img src={speaker3}/>
               <div className="card-content">
                   <h3 style={{fontSize:35}}>Malay Bhattacharya</h3>
                   <p style={{marginLeft:"30px"}}>Malay Bhattacharya is a Professor at IIM Bangalore. His academic career spans more than three decades, and he has published in academic journals and conference proceedings.
His research interests include Quantitative Finance, Time Series and Extreme Value Theory.
                              
                    </p>
               </div>

            </div>
          
        </div>
    )
}
