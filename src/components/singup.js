import logoImg from "../assets/inst.png"
import fbImg from "../assets/fb.svg.png"
import googlePlay from "../assets/google.svg"
import microsoft from '../assets/microsoft.svg.png'

import {useNavigate} from "react-router-dom"
import { useGlobalContext } from "../context.js"

const Singup =()=>{
    const {newUserName,setNewUserName,newUserPassword,setNewUserPassword} = useGlobalContext()
    const navigate = useNavigate()

    const signup = () =>{
        if(!newUserName || !newUserPassword) {
            alert("Please fill all fields!")
        }else{
            window.localStorage.setItem('user',newUserName)
            window.localStorage.setItem('password',newUserPassword)
            navigate('/')
        }        
    }


    return<div className="login">
        <section className="login_one">
            <img src={logoImg} className="logoImg" alt="logo"/>
            <input type="text" name="newusername" placeholder="Phone number,username, or email" onChange={e=>setNewUserName(e.target.value)} required/>
            <input type="password" name="newuserpassword" placeholder="Password" onChange={e=>setNewUserPassword(e.target.value)} required/>
            <button type="submit" className="loginBtn" onClick={signup}>Sign up</button>

            <div className="or">
                <hr/> OR <hr/>
            </div>

           <div className="login_fb">
            <img src={fbImg} className="fbImg"  alt="fb"/>
            <a href="www.instagram.com" target="blank">Sign in with Facebook</a>
           </div>
        </section>
        <section className="login_two">
            Already have an account?<a href="/login" target="blank">Sign in</a>
        </section>
        <section className="login_three">
            <h5>Get the app.</h5>
            <div className="downloader">
                <img className="googlePlay" src={googlePlay}/>
                <img className="microsoft" src={microsoft}/>
            </div>
        </section>
    </div>

}
export default Singup