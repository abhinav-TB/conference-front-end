import React from 'react'
import './about.css'

export default function about() {
    return (
        <div className="wrapper">
            <div>
               <span>ABOUT</span>
            </div>
            <div style={{fontSize:25, color:"#52D4E1",fontWeight:"bold"}}>
                <span>[The Conference]</span>
            </div>
            <div className="content">
                <p>The International Society for Business and Industrial Statistics (ISBIS) selected Kochi as the venue for its regional conference in December 2020. Further this conference is a part of the activity of the Department of Statistics, CUSAT, under the SAP-DRS Level III of the University Grants Commission, India. The conference is a significant event as 2020 is the Silver Jubilee year of the Department of Statistics, CUSAT. The primary objective of the conference is to provide a platform for disseminating recent developments on statistical methods for different field of application in general, Business and Industry in particular. With an aim to expose young researchers and students to ideas in the theory and applications of Statistics, the seminar will consist of expository talks by experts in addition to invited talks and contributory sessions. The sessions will include deliberations in the area of Reliability Theory, Survival Analysis, Probability Theory, Statistical Inference, Industrial Statistics, Data Mining, Stochastic Models, Queuing and Inventory models, Time Series Analysis, Linear Models, Design of Experiments, Bio Statistics, Bio Informatics, Statistical Genetics, Multivariate Methods and Survey Sampling, Data Science, Machine Learning, etc.</p>
            </div>
            <div >
                <button className="btn">
                    CONFERENCE BROCHURE
                </button>
            </div>
            
        </div>
        
    )
}
