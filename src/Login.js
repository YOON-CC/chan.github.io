import React, { useState, useEffect } from "react";
import './Login.css'

function Login(props) { 
    return (
        <body>
            {/* 화면표출*/}
            <div className="login-page">
                <div class="form">
                    <form class="login-form">
                        <input id="id" type="text" placeholder="ID"/>
                        <input id="psword" type="password" placeholder="PASSWORD"/>
                        <p id="button">login</p>
                        <p class="message">Not registered? <a onClick={() =>{ props?.setValue(1); }}>Create an account</a></p>
                    </form>
                </div>
            </div>
        </body>

    );
}

export default Login;