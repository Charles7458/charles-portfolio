import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProjectPage from "./Project.jsx";
import { useEffect } from "react";
import aos from 'aos';
import 'aos/dist/aos.css';


export default function App(){
  useEffect(()=>{aos.init()},[])
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project/:id" element={<ProjectPage/>}/>
      </Routes>
    </HashRouter>
  )
}