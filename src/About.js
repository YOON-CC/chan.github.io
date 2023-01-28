import React, { useState, useEffect } from "react";
import './About.css'

function About() { 
    return (
        <body>
            {/* 화면표출*/}
            <div className="About_page">
                <img className = "cho_yoon_chan" src="img/Cho_yoon_chan.png"></img>
                <div className = "introduce">
                    Hello! My name is Cho Yoon Chan.<br/>
                    This is my homepage.<br/>
                    It is also where I put my dream into practice while majoring in computer engineering.<br/>
                    Have a nice day today~<br/>
                </div>
            </div>

        </body>

    );
}

export default About;