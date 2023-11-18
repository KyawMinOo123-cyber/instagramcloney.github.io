import logoImg from "../assets/inst.png"
import fbImg from "../assets/fb.svg.png"
import googlePlay from "../assets/google.svg"
import microsoft from '../assets/microsoft.svg.png'
import { useGlobalContext } from "../context.js"
import {useNavigate} from "react-router-dom"

const Login =()=>{
    const navigate = useNavigate()

    const {userName,setUserName,password,setPassword} = useGlobalContext()

    const login = () =>{
        if(!userName || !password){
            alert("Please fill all fields!")
        }
        else{
            const registeredName = window.localStorage.getItem('user')
            const registeredPassword = window.localStorage.getItem('password')
            if(userName !== registeredName || password !== registeredPassword ){
                
                if(!registeredName || !registeredPassword){
                    alert('User Not found.Please Register!')
                }else{
                    alert('Incorrect username or password!')
                }
            }
            else{
                navigate('/home-inst')
            }
           
        }          
    }

    return<div className="login">
        <section className="login_one">
            <img src={logoImg} className="logoImg" alt="logo"/>
            <input type="text" name="username" placeholder="Phone number,username, or email" onChange={e=>setUserName(e.target.value)} required/>
            <input type="password" name="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} required/>
            <button type="submit" className="loginBtn" onClick={login}>Log in</button>

            <div className="or">
                <hr/> OR <hr/>
            </div>

           <div className="login_fb">
            <img src={fbImg} className="fbImg"  alt="fb"/>
            <a href="www.instagram.com" target="blank">Log in with Facebook</a>
           </div>
            <a href="https://www.instagram.com/accounts/password/reset/" target="blank" >Forgot password?</a>
        </section>
        <section className="login_two">
            Don't have an account?<a href="/signup-inst" target="blank">Sign up</a>
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

export default Login;