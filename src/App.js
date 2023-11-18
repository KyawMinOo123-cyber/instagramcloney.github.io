import Home from "./components/home.js"
import Login from './components/login.js';
import Singup from './components/singup.js';
import './App.css';
import{BrowserRouter as Router,Route,Routes} from "react-router-dom"

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/home-inst" element={<Home/>} />
        <Route path='/' element={<Login/>}/>
        <Route path='/signup-inst' element={<Singup/>}/>
      </Routes>

    </Router>
  );
}

export default App;
