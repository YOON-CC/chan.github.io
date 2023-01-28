import React, { useState, useEffect } from "react";
import './Choice.css'
import $ from 'jquery';


let dragged = null;
let go = null;

function Choice(props) {

    
    document.addEventListener("dragstart", (event) => {
        // store a ref. on the dragged elem
        dragged = event.target;
        console.log(dragged)
        });
        
        document.addEventListener("dragover", (event) => {
        // prevent default to allow drop
        event.preventDefault();
        });
        
        document.addEventListener("drop", (event) => {
        // prevent default action (open as link for some elements)
        event.preventDefault();
        
        // move dragged element to the selected drop target
        if (event.target.className == "big_circle") {
            // dragged.parentNode.removeChild(dragged);
            // event.target.appendChild(dragged);
            console.log("드래그");
            document.getElementById('c1').style.visibility = "hidden";   
            document.getElementById('c2').style.visibility = "hidden";   
            document.getElementById('c3').style.visibility = "hidden";   
            document.getElementById('c4').style.visibility = "hidden";   
            document.getElementById('c5').style.visibility = "hidden";    
        
            go = true;
        }
        if (go == true){
            
            $(function() {
                console.log("들어옴");
                $("#big").css({
                    'background-color' : '#67DBA4',
                });
                $("#big").fadeOut();
              });
            
            if (dragged.id === "c1"){
                setTimeout(()=>{ props?.setValue(1); }, 500);
                console.log("c1들옴")
            } 
            if (dragged.id === "c2"){
                setTimeout(()=>{ props?.setValue(2); }, 500);
                console.log("c2들옴")
            }
            if (dragged.id === "c3"){
                setTimeout(()=>{ props?.setValue(3); }, 500);
                console.log("c3들옴")
            } 
            if (dragged.id === "c4"){
                setTimeout(()=>{ props?.setValue(4); }, 500);
                console.log("c4들옴")
            }
            if (dragged.id === "c5"){
                setTimeout(()=>{ props?.setValue(5); }, 500);
                console.log("c5들옴")
            } 
        }
        go = false;
    });
    return (
        <body>
            {/*화면표출*/}
            <div className="show">
                <div className="big_circle" id = "big"></div>

                {/*서클1*/}
                <div className="circle_1" draggable="true" id = "c1">
                    <img className="circle_1_img" src="./img/abc.png" ></img>
                    <p className="text_1">Who am I</p>
                </div>
                {/*줌!*/}
                <div className="zoom"> 
                </div>

                {/*서클2*/}
                <div className="circle_2" draggable="true" id = "c2">
                    <img className="circle_2_img"src="img/icon_2.png"></img>
                    <p className="text_2">My experiences</p>
                </div>
                {/*줌!*/}
                <div className="zoom"></div>

                {/*서클3*/}
                <div className="circle_3" draggable="true" id = "c3">
                    <img className="circle_3_img"src="img/icon_3.png"></img>
                    <p className="text_3">Etc</p>
                </div>
                {/*줌!*/}
                <div className="zoom"></div>

                {/*서클4*/}
                <div className="circle_4" draggable="true" id = "c4">
                    <img className="circle_4_img"src="img/icon_4.png"></img>
                    <p className="text_4">My memory</p>
                </div>
                {/*줌!*/}
                <div className="zoom"></div>

                {/*서클5*/}
                <div className="circle_5" draggable="true" id = "c5">
                    <img className="circle_5_img"src="img/icon_5.png"></img>
                    <p className="text_5">My study</p>
                </div>
                {/*줌!*/}
                <div className="zoom"></div>

            </div>


        </body>
        
    );

}

export default Choice;