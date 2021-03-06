import useUser from "../../../providers/useUser";
import fetchJson from "../../../providers/fetchJson";
import { useRef, useState } from "react";
import React from "react";


export default function Login() {
    const [rightPanelActive, setRightPanelActive] = useState(false)
    const { mutateUser } = useUser({
        redirectTo: "/Dashboard",
        redirectIfFound: true,
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [errorMsg1, setErrorMsg1] = useState("");


    var signUpButton = useRef(null)
    var signInButton = useRef(null)
    var container = useRef(null)

    function slideLeft() {
        setRightPanelActive(true)
    }
    function slideRight() {
        setRightPanelActive(false)
    }

    async function handleLogin(e) {
        e.preventDefault();

        // Get form data
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;

        const body = {
            email: email,
            password: password,
        };

        try {
            await mutateUser(
                fetchJson("/api/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
                })
            );
        } catch (error) {
            console.log("An unexpected error happened:", error);
            setErrorMsg("⚠️" + error.data.message);
        }
    }

    async function handleSignUp(e) {
        e.preventDefault();

        // Get form data
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        const name = e.currentTarget.name.value;

        const body = {
            name: email,
            email: email,
            password: password,
        };

        try {
            await mutateUser(
                fetchJson("/api/signup", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
                })
            );
        } catch (error) {
            console.error("An unexpected error happened:", error);
            setErrorMsg1("⚠️" + error.data.message);
        }
    }

    return (
        <div id='loginMain'>
            <div className={rightPanelActive ? 'container right-panel-active' : 'container'} id="container" ref={container} >
                <div className="form-container sign-up-container">
                    <form onSubmit={handleSignUp}>
                        <h1>Create Account</h1>

                        <input name="name" type="text" placeholder="Name" required/>
                        <input name="email" type="email" placeholder="Email" required/>
                        <input name="password" type="password" placeholder="Password" required/>
                        <button>Sign Up</button>
                        <error>{errorMsg1}</error>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={handleLogin}>
                        <h1>Sign in</h1>

                        <input name="email"type="email" placeholder="Email" required/>
                        <input name="password"type="password" placeholder="Password" required/>
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                        <error>{errorMsg}</error>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Welcome</h1>
                            <p>Welcome to Confirmly, a fast, secure verification system. If you already have an account, click the button below</p>
                            <button class="ghost" id="signIn" ref={signInButton} onClick={() => slideRight()}>Sign In</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1 class="logo">Confirmly</h1>
                            <p>If you don't have an account, click the button below to join</p>
                            <button class="ghost" id="signUp" ref={signUpButton} onClick={() => slideLeft()}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                                    
                    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

                    #loginMain * {
                        box-sizing: border-box;
                    }

                    body {
                        background: #f6f5f7;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        font-family: 'Montserrat', sans-serif;
                        height: 100vh;
                        margin: -20px 0 50px;
                    }

                    h1 {
                        font-weight: bold;
                        margin: 0;
                    }

                    h2 {
                        text-align: center;
                    }

                    p {
                        font-size: 14px;
                        font-weight: 100;
                        line-height: 20px;
                        letter-spacing: 0.5px;
                        margin: 20px 0 30px;
                    }

                    error {
                        font-size: 14px;
                        width: 100%;
                        font-weight: 100;
                        line-height: 20px;
                        letter-spacing: 0.5px;
                        margin: 20px 0 30px;
                        color: #03bafc;
                    }

                    span {
                        font-size: 12px;
                    }

                    a {
                        color: #333;
                        font-size: 14px;
                        text-decoration: none;
                        margin: 15px 0;
                    }

                    @font-face {
                        font-family: "logoFont";
                        src: url("/logoFont.ttf") format("woff2");
                    }

                    .logo{
                        font-family: logoFont;
                        font-size: 70px;
                    }

                    button {
                        border-radius: 20px;
                        border: 1px solid #03bafc;
                        background-color: #03bafc;
                        color: #FFFFFF;
                        font-size: 12px;
                        font-weight: bold;
                        padding: 12px 45px;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                        transition: transform 80ms ease-in;
                    }

                    button:active {
                        transform: scale(0.95);
                    }

                    button:focus {
                        outline: none;
                    }

                    button.ghost {
                        background-color: transparent;
                        border-color: #FFFFFF;
                    }

                    form {
                        background-color: #FFFFFF;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        padding: 0 50px;
                        height: 100%;
                        text-align: center;
                    }

                    input {
                        background-color: #eee;
                        border: none;
                        padding: 12px 15px;
                        margin: 8px 0;
                        width: 100%;
                    }

                    .container {
                        background-color: #fff;
                        border-radius: 10px;
                        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
                                0 10px 10px rgba(0,0,0,0.22);
                        position: relative;
                        overflow: hidden;
                        width: 768px;
                        max-width: 100%;
                        min-height: 480px;
                    }

                    .form-container {
                        position: absolute;
                        top: 0;
                        height: 100%;
                        transition: all 0.6s ease-in-out;
                    }

                    .sign-in-container {
                        left: 0;
                        width: 50%;
                        z-index: 2;
                    }

                    .container.right-panel-active .sign-in-container {
                        transform: translateX(100%);
                    }

                    .sign-up-container {
                        left: 0;
                        width: 50%;
                        opacity: 0;
                        z-index: 1;
                    }

                    .container.right-panel-active .sign-up-container {
                        transform: translateX(100%);
                        opacity: 1;
                        z-index: 5;
                        animation: show 0.6s;
                    }

                    @keyframes show {
                        0%, 49.99% {
                            opacity: 0;
                            z-index: 1;
                        }
                        
                        50%, 100% {
                            opacity: 1;
                            z-index: 5;
                        }
                    }

                    .overlay-container {
                        position: absolute;
                        top: 0;
                        left: 50%;
                        width: 50%;
                        height: 100%;
                        overflow: hidden;
                        transition: transform 0.6s ease-in-out;
                        z-index: 100;
                    }

                    .container.right-panel-active .overlay-container{
                        transform: translateX(-100%);
                    }

                    .overlay {
                        background: #0076a1;
                        background: -webkit-linear-gradient(to right, #03bafc, #0076a1);
                        background: linear-gradient(to right, #03bafc, #0076a1);
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: 0 0;
                        color: #FFFFFF;
                        position: relative;
                        left: -100%;
                        height: 100%;
                        width: 200%;
                        transform: translateX(0);
                        transition: transform 0.6s ease-in-out;
                    }

                    .container.right-panel-active .overlay {
                        transform: translateX(50%);
                    }

                    .overlay-panel {
                        position: absolute;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        padding: 0 40px;
                        text-align: center;
                        top: 0;
                        height: 100%;
                        width: 50%;
                        transform: translateX(0);
                        transition: transform 0.6s ease-in-out;
                    }

                    .overlay-left {
                        transform: translateX(-20%);
                    }

                    .container.right-panel-active .overlay-left {
                        transform: translateX(0);
                    }

                    .overlay-right {
                        right: 0;
                        transform: translateX(0);
                    }

                    .container.right-panel-active .overlay-right {
                        transform: translateX(20%);
                    }

                    .social-container {
                        margin: 20px 0;
                    }

                    .social-container a {
                        border: 1px solid #DDDDDD;
                        border-radius: 50%;
                        display: inline-flex;
                        justify-content: center;
                        align-items: center;
                        margin: 0 5px;
                        height: 40px;
                        width: 40px;
                    }
      `}</style>
        </div>
    )
}