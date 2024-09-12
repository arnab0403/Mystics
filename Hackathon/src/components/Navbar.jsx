import { House } from "lucide-react"
import { Menu } from "lucide-react"
import { User } from "lucide-react"
import { Info } from "lucide-react"
import { useNavigate } from "react-router-dom" 
import "./Navbar.css"
import { useState } from "react"
function Navbar(){
    const [login,setLogin]=useState(false);
    const navigate=useNavigate();
    const handleNavClick =(event)=>{
        event.preventDefault();
        const id = event.target.id;
        if (id==="user") {
            if (login===false) {
                navigate("/login");
                return;
            }
        }
        console.log(id);
        navigate("/"+id);
    }
    return <>
        <div className="w-[100vw] h-[70px] flex justify-center items-center fixed bottom-[10px]" >
            <div className="w-[40%] bg-black h-[60%] rounded-lg flex items-center gap-[80px] justify-evenly" >
            <House color="white" id="" className=" transition-all hover:h-[35px] w-[35px] hover:cursor-pointer" onClick={handleNavClick}/>
            <Menu color="white" id="option" className=" transition-all hover:h-[35px] w-[35px] hover:cursor-pointer" onClick={handleNavClick}/>
            <Info color="white" id="about" className=" transition-all hover:h-[35px] w-[35px] hover:cursor-pointer"  onClick={handleNavClick}/>
            <User color="white" id="user" className=" transition-all hover:h-[35px] w-[35px] hover:cursor-pointer" onClick={handleNavClick}/>
            </div>
        </div>
    </>
}

export default Navbar