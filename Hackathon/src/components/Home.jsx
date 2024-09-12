import Navbar from "./Navbar"
import  Scan  from './Scan'
import "./Home.css"
import "./Result"
import Result from "./Result"
import Footer from "./Footer"

function App() {
  return (
    <>
    <div className="main flex items-center justify-center">
       <Footer></Footer>
      <div className="h-[70%] w-[32%] bg-[#ffffffc1] rounded-xl shadow-[0_25px_60px_-15px_rgba(255,255,255,0.5)] ">
      <Scan></Scan>
      </div>
      <Navbar></Navbar>
    </div>
    </>
  )
}

export default App