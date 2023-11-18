import React ,{ useContext , useState} from "react";

const AppContext = React.createContext()

const AppProvider = ({children}) =>{
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState('')

    const[signUpUser,setSingnUpUser] = useState({
        name:'',
        password:'',
    })

    const [newUserName , setNewUserName] = useState('')
    const [newUserPassword , setNewUserPassword] = useState('')


    const [newPost , setNewPost] = useState({
        imgUrl:null,
        description :null,
    })

    const [showPost,setShowPost] = useState([])

    return(
        <AppContext.Provider value={{userName,setUserName,password,setPassword,
                                    newUserName,setNewUserName,newUserPassword,setNewUserPassword,
                                    newPost,setNewPost,
                                    showPost,setShowPost,
                                    setSingnUpUser,signUpUser
                                    }}>
            {children}
        </AppContext.Provider>
    )
}

export  const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export { AppContext , AppProvider}