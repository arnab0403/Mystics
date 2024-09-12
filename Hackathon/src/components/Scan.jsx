import React, { useRef,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Scan.css";
import imager_alternative from "./img/Noimage.png";

function Scan(){
    const [choseFile,setChosefile]=useState(false);
    const [plantName,setPlantName]=useState("null");
    const [ai,setAi]=useState(false);
    const navigate=useNavigate();
    const fileInputRef = useRef(null);
    const [disease,setDisease]=useState("none");
    const [solutions,setSolution]=useState("null");
    const [image,setImage]=useState(imager_alternative);

    //loading 
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    
  
    const handleNewScan=()=>{
      
      setChosefile(false);
      setPlantName("null");
      setAi(false);
      setDisease("none");
      setSolution("null");
      setImage(imager_alternative);
    }
    async function askChatGPT() {
      try {
        setAi(true);
        setSolution(disease);
    
        const question = `Give me a short solution of this in 100 words with two pesticide and two insecticides${disease}`;
        console.log(question);
    
        const response = await fetch('http://localhost:3000/ask', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({   
     question }),
        });
    
        if (!response.ok) {
          throw new   
     Error(`Error fetching data: ${response.status}`);
        }
    
        const data = await response.json();
        console.log('ChatGPT Response:', data.answer);
        setSolution(data.answer);
        setChosefile(false);
      } catch (error) {
        console.error('Error:', error);
        // Handle the error appropriately, e.g., display an error message to the user
      }
    }

    const handleSelect=(e)=>{
        console.log(e.target.value);
        setChosefile(true);
        setPlantName(e.target.value);
    }
    
    const handleButtonClick = () => {
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
    }

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
      const imageUrl = URL.createObjectURL(event.target.files[0]); // Create a URL for the image
      setImage(imageUrl); // Set the image URL to state
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (!selectedFile) {
        alert("Please select a file first!");
        return;
      }
  
      // Prepare the form data
      const formData = new FormData();
      formData.append("file", selectedFile); // "file" is the key expected by the server
  
      try {
        // Make the POST request
        const response = await axios.post("http://localhost:8001/process_input", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Set the content type for file upload
          },
        });
        
        // Handle the response\
        setDisease(response.data.result);
        console.log(selectedFile);
       console.log("Server response:", JSON.stringify(response.data.result));
      } catch (error) {
        setDisease("Error uploading file:",error);
        console.log("Error uploading file:",error);
      }
    }
    // const handleCameraButton =()=>{
    //     navigate("/camera");
    // }
    if (choseFile===true) {
      return <>

    <div className="w-[100%] h-[100%] flex justify-center items-center flex-col gap-8" id="box">
    <input type="file" name="" className="hidden"  ref={fileInputRef} onChange={handleFileChange} />
    <button className="bg-[#000000] rounded-xl h-[38px] w-[150px] text-[white] hover:bg-[#242424] hover:w-[200px] text-[17px] shadow-xl transition-all font-[200]" onClick={handleButtonClick}>Select Image</button>
    {/* <button className="bg-[#0aa2ee] rounded-xl h-[50px] w-[150px] text-[white] hover:bg-[#13adfb] text-[17px]" onClick={handleCameraButton}>Open Camera</button> */}
    <button className="bg-[#000000] hover:w-[200px] transition-all rounded-xl h-[38px] w-[150px] text-[white] hover:bg-[#242424] text-[17px] shadow-xl font-[200]" type='submit' onClick={handleSubmit}>Check</button>
    <h1 className=' text-[20px] font-[500] w-[100%] text-center '>Plant-Name: {plantName}</h1>
    <h1 className=' text-[20px] font-[500] w-[100%] text-center '>Output: {disease}</h1>
    <img src={image} alt="no image" className='h-[130px]'/>
    <button className="bg-[#47d22b] hover:w-[200px] transition-all rounded-xl h-[38px] w-[150px] text-[black] hover:bg-[#e2ff28] text-[17px] shadow-xl font-[400]" type='submit' onClick={askChatGPT}>Solution</button>
    {/* <button className="bg-[#000000] hover:w-[200px] transition-all rounded-xl h-[50px] w-[150px] text-[white] hover:bg-[#242424] text-[17px] shadow-xl font-[200]" type='submit'>Get Cure</button> */}
    </div>
    </>
    }
    if (ai===true) {
      return <>
      <div className="w-[100%] h-[100%] flex justify-center items-center flex-col gap-8" id="box">
      <h1 className=' text-[15px] font-[500] w-[100%] text-center p-[25px]'> {solutions}</h1>
      <button className="bg-[#47d22b] hover:w-[200px] transition-all rounded-xl h-[38px] w-[150px] text-[black] hover:bg-[#e2ff28] text-[17px] shadow-xl font-[400]" type='submit' onClick={handleNewScan}>New Scan</button>
      </div>
      </>
    } 

    if (choseFile===false){
      return <>
      <div className="w-[100%] h-[100%] flex justify-center items-center flex-col gap-8" id="box">
      <h1 className=' text-[20px] font-[500] w-[100%] text-center '>Chose your Plant</h1>
          <select name="Tree" id="Tree" className=' rounded-lg h-[35px] w-[200px] bg-[black] text-[white] text-center' onChange={handleSelect}>

            <option value="null">Chose here</option>
            <option value="Tomato">Tomato</option>
            <option value="Apple">Apple</option>
            <option value="Rasberry">Rasberry</option>
            <option value="Bluberry">Bluberry</option>
            <option value="Cherry">Cherry</option>
            <option value="Corn">Corn</option>
            <option value="Grape">Grape</option>
            <option value="Orange">Orange</option>
            <option value="Peach">Peach</option>
            <option value="Paper Bell">Paper Bell</option>
            <option value="Potato">Potato</option>
            <option value="Soybean">Soybean</option>
            <option value="Squash">Squash</option>
            <option value="Strawberry">Strawberry</option>
          </select>
      </div>

      </>
    }
    
}


export default Scan;