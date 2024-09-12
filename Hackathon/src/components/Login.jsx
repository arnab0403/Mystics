import "./Login.css"
import Navbar from "./Navbar"
import googleImg from "./img/google.png"
import { auth } from "../firebase"
import { signInWithPopup } from "firebase/auth"
import { GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from "react-router-dom"
import { useState } from "react"
function Login(){
        const [login,setLogin]=useState(false);
        const navigate = useNavigate();
        const handleLogin = async () => {
            // login wala logic 
            // auth-step-4
            const userData = await signInWithPopup(auth, new GoogleAuthProvider);
            // alert("login");
            setLogin(true)
            navigate("/");
        }
    if(login===false){
    return <>
            <div className="body">
            <div className="login-container">
                <h2>Plant Disease Detection</h2>
                    <div className="form">
                        <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required="" />
                        </div>
                        <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required="" />
                        </div>
                        <div className="flex flex-col gap-[10px]">
                        <button type="submit" className="h-[50px] bg-[#388e3c] text-[white] hover:bg-[#2e7d32] hover:underline hover:shadow-[0px_5px_15px_rgba(0, 0, 0, 0.1)] ">Login</button>
                        <button className="h-[50px] bg-[#3175e3] text-[white] hover:bg-[#4155f1] hover:underline hover:shadow-[0px_5px_15px_rgba(0, 0, 0, 0.1)] flex justify-center items-center" onClick={handleLogin}>Login With Google 
                            <img src={googleImg} alt="" className="h-[60px]"/></button>
                        </div>
                    </div>
            </div>
            <Navbar></Navbar>
            </div>
    </>
    }
}

export default Login