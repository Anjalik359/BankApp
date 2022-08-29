import React from "react"
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import "./Components/common.css"
import {Banks} from "./Components/Banks"
import {Home} from "./Components/Home"
import {NavBar} from "./Components/NavBar"
import {Benef} from "./Components/Benef"

function App() {
  return (
    <div className="main">
     <h1>Bank App</h1>
     <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path ="/banks" element={<Banks/>}/>
      <Route path = "/benef" element={<Benef/>}/>
      <Route path = "/" element={<Home/>}/>
     
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
