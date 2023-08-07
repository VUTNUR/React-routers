import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Navbar from "./Pages/Navbar";
import {Routes, Route} from "react-router-dom"

const App=()=>{

  return(
    <div>
      <Navbar />
      <Routes>
           <Route path="/" element={<Home />}></Route>
           <Route path="/about" element={<About />}></Route>
           <Route path="/blog" element={<Blog />}></Route>
           <Route path="/contact" element={<Contact />}></Route>
           {/* <Route></Route> */}
      </Routes>
    </div>
  )
}
export default App;
