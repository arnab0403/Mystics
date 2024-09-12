import  Camera  from "./components/Camera"
import './App.css'
import Home from "./components/Home"
import Login from "./components/Login"
import {Route,Routes} from "react-router-dom"
import About from "./components/About"
function App() {
  

  return (
   <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/about" element={<About></About>}></Route>
   </Routes>

  )
}

export default App
