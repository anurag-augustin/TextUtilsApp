
import './App.css';
import React,{useState} from 'react'
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import { About } from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [btnText, setbtnText] = useState("Enable Dark Mode")
  const [mode, setMode] = useState("light")
const toggleMode =() =>{
  if(mode === "light"){
    setMode("dark")
    document.body.style.backgroundColor ='#363630';
    document.body.style.color ='white';
    setbtnText("Disable Dark Mode");
   
    
  }
  else if(mode === "dark")
  {
    setMode("light")
    document.body.style.backgroundColor ='white';
    document.body.style.color ='black';
    setbtnText("Enable Dark Mode");
  }
}


  return (

    <>
    <About mode={mode}/>
    {/* <BrowserRouter>

<Navbar btnText={btnText} mode={mode} toggleMode={toggleMode} title="T e x t   U t i l s" homeText="Home" aboutText="About"/>
<div className="container my-3">
<Routes>

          <Route exact path="/TextUtilsApp/about"
           element = { <About mode={mode}/> }/>
           <Route exact path="/TextUtilsApp/"
           element = { <TextForm mode={mode} headingText="Text Analizer" /> }/>
         
          </Routes>

</div>

</BrowserRouter> */}
    
    </>
  );
}

export default App;
