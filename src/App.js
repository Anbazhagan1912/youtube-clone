import React from "react";
import './App.css'
import Channel from "./component/Channel/Channal";
import Header from "./component/Header/Header";
import Recommandvideo from "./component/Recommandvideo/Recommandvideo";
import Sidebar from "./component/Sidebar/Sidebar";
import { Routes ,Route } from "react-router-dom";
const App = ()=>{



  return(


    <>
    {/* Header */}
    <Header  ></Header>
  
    <Routes>
    <Route path="/" element={<><Sidebar></Sidebar><Recommandvideo></Recommandvideo></>}></Route>
    <Route path="/search/:searchTerm" element={<><Sidebar></Sidebar><Channel></Channel></>}></Route>

    </Routes>
    
    </>
  )
}

export default App