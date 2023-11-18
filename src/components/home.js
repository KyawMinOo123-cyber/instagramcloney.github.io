import one from "../assets/posts/1.jpg"
import two from "../assets/posts/2.jpg"
import three from "../assets/posts/3.jpg"
import four from "../assets/posts/4.jpg"
import five from "../assets/posts/5.jpg"
import six from "../assets/posts/6.jpg"
import seven from "../assets/posts/7.jpg"
import eight from "../assets/posts/8.jpg"
import Logo from '../assets/Logo.png'
import home from '../assets/home_icon.png'
import search from '../assets/search_icon.jpg'
import explore from '../assets/explore.png'
import reels from '../assets/Reels.png'
import messages from "../assets/message.svg"
import notification from "../assets/heart.png"
import create from '../assets/create.png'
import profile from '../assets/profile.jpg'
import vin from "../assets/suggest/vin.jpg"
import davika from "../assets/suggest/davika.jpg"
import taylor from "../assets/suggest/taylor.jpg"

import {useGlobalContext} from "../context.js"


const Home=()=>{
    const {userName,showPost,setShowPost,newPost,setNewPost} = useGlobalContext()

    const close = (id) =>{
        const closeDiv = document.getElementById(id)
        closeDiv.classList.remove('show')
        alert("Commented!")
    }

    const comment = (id) =>{
        const commentDiv = document.getElementById(id)
        commentDiv.classList.add('show')
    }
    const giveLike = (id) =>{
        const likedPost = document.getElementById(id) 

        if(likedPost.classList.contains("liked")){
            likedPost.classList.remove("liked")
            likedPost.innerText="like"
        }else{
            likedPost.classList.add("liked")
            likedPost.innerText="Liked"
        }
    }
    
    const savePost = (id) =>{
        const savePost = document.getElementById(id)
        if(savePost.classList.contains("saved")){
            savePost.classList.remove("saved")
            savePost.innerText="Save"
        }else{
            savePost.classList.add("saved")
            savePost.innerText="Saved"
        }
    }

    const handleChange=(e)=>{
        const{name , value} = e.target;
        setNewPost({...newPost,[name]:value});
    }
    const submit=(e)=>{
        if(newPost.imgUrl =='' || newPost.description ==''){
            alert("please insert both fields")
            return
        }
            e.preventDefault();
            setShowPost([...showPost,newPost])
            const formToShow = document.querySelector('.createPostForm')
            formToShow.classList.remove('show')
        
    }
    
    const create_new_post=(id)=>{
        const formToShow = document.getElementById(id)
        formToShow.classList.add("show")
    }

    return<div className="home">

        <div className="nav">
            <img className="navLogo" src={Logo} alt="logo"/>
        
                <div className="home_btn">
                 <img src={home} alt="home" />
                    <h3>Home</h3>
                </div>
                <div className="search_btn">
                    <img src={search} alt="search" />
                    <h3>Search</h3>
                </div>
                <div className="explore_btn">
                    <img src={explore} alt="explore" />
                    <h3>Explore</h3>
                </div>
                <div className="reels_btn">
                    <img src={reels} alt="reels" />
                    <h3>Reels</h3>
                </div>
                <div className="message_btn">
                    <img src={messages}  alt="messages"/>
                    <h3>Messages</h3>
                </div>
                <div className="notification_btn">
                    <img src={notification}  alt="notification"/>
                    <h3>Notifications</h3>
                </div>
                <div className="create_btn" onClick={()=>create_new_post(99)}>
                    <img src={create} alt="create" />
                    <button className="create_btn"><h3>Create</h3></button>
                </div>
                <div className="profile_btn">
                    <img src={profile} alt="profile" />
                    <h3>Profile</h3>
                </div>
           
        </div>

            <div className="posts">
                <form className="createPostForm" id={99}>
                    <h3>Create Post</h3>
                    <input type="text" name="imgUrl" placeholder="Enter image url..."  onChange={handleChange}/>
                    <input type="text" name="desc" placeholder="Description.." onChange={handleChange}/>
                    <button type="submit" onClick={submit}>Create</button>
                </form>

                {
                showPost?.map((post,idx)=>{
                       return <div className="post" key={idx}>
                            <img src={post.imgUrl} alt={post.imgUrl} />
                            <p>{post.description}</p>
                            <div className="postFooter">
                                <button id={idx} onClick={()=>giveLike(idx)}>Like</button>
                                <button id={idx} onClick={()=>savePost(idx)}>Save</button>
                                <button>Share</button>
                                <button onClick={()=>comment(idx)}>Comment</button>
                            </div>
                         </div>
                 })
                }
                <div className="post">
                    <img src={one} alt={one} />
                    <div className="postFooter">
                        <button id={1} onClick={()=>giveLike(1)}>Like</button>
                        <button id={11} onClick={()=>savePost(11)}>Save</button>
                        <button>Share</button>
                        <button onClick={()=>comment(22)}>Comment</button>
                        
                    </div>
                </div>

                <div className="post">
                    <img src={two} alt={two} />
                    <div className="postFooter">
                        <button id={2} onClick={()=>giveLike(2)}>Like</button>
                        <button id={12} onClick={()=>savePost(12)}>Save</button>
                        <button>Share</button>
                        <button onClick={()=>comment(22)}>Comment</button>
                       
                    </div>
                </div>

                <div className="post">
                    <img src={three} alt={three} />
                    <div className="postFooter">
                    <button id={3} onClick={()=>giveLike(3)}>Like</button>
                        <button id={13} onClick={()=>savePost(13)}>Save</button>
                        <button>Share</button>
                        <button onClick={()=>comment(22)}>Comment</button>
                        
                    </div>
                </div>

                <div className="post">
                    <img src={four} alt={four} />
                    <div className="postFooter">
                    <button id={4} onClick={()=>giveLike(4)}>Like</button>
                        <button id={14} onClick={()=>savePost(14)}>Save</button>
                        <button>Share</button>
                        <button onClick={()=>comment(22)}>Comment</button>
                        
                    </div>
                </div>

                <div className="post">
                    <img src={five} alt={five} />
                    <div className="postFooter">
                    <button id={5} onClick={()=>giveLike(5)}>Like</button>
                        <button id={15} onClick={()=>savePost(15)}>Save</button>
                        <button>Share</button>
                        <button onClick={()=>comment(22)}>Comment</button>
                        
                    </div>
                </div>

                <div className="post">
                    <img src={six} alt={six} />
                    <div className="postFooter">
                    <button id={6} onClick={()=>giveLike(6)}>Like</button>
                        <button id={16} onClick={()=>savePost(16)}>Save</button>
                        <button>Share</button>
                        <button onClick={()=>comment(22)}>Comment</button>
                       
                    </div>
                </div>

                <div className="post">
                    <img src={seven} alt={seven} />
                    <div className="postFooter">
                    <button id={7} onClick={()=>giveLike(7)}>Like</button>
                        <button id={17} onClick={()=>savePost(17)}>Save</button>
                        <button>Share</button>
                        <button onClick={()=>comment(22)}>Comment</button>
                      
                    </div>
                </div>

                <div className="post">
                    <img src={eight} alt={eight} />
                    <div className="postFooter">
                        <button id={8} onClick={()=>giveLike(8)}>Like</button>
                        <button id={18} onClick={()=>savePost(18)}>Save</button>
                        <button>Share</button>
                        <button onClick={()=>comment(22)}>Comment</button>
                    </div>
                </div>
                <div className="comment"  id={22}>
                            <textarea placeholder="Comment here..." ></textarea>
                            <button className="ok" onClick={()=>close(22)}>OK</button>
                </div>
            </div>
        <div className="timeline">
            <div className="userProfile">
                <img src={profile} alt="profile"/>
                <h3>
                    {userName}
                </h3>
                {!userName?<a href="/">Login</a> :<a href="/">Switch</a>}
            </div>
            <div className="friends">
                <div className="suggesting">
                    <h5>Suggested for you</h5>
                    <a href="#">See All</a>
                </div>
                <div className="friend">
                    <div className="suggested_friend">
                        <img src={vin} alt="vin" />
                        <h5>Vin Diesel</h5>
                        <a href="#">Follow</a>
                    </div>
                    <div className="suggested_friend">
                        <img src={taylor} alt="taylor" />
                        <h5>Taylor Swift</h5>
                        <a href="#">Follow</a>
                    </div>
                    <div className="suggested_friend">
                        <img src={davika} alt="davika" />
                        <h5>Mai Davika</h5>
                        <a href="#">Follow</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


export default Home;