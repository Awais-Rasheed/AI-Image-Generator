// import axios from 'axios';
// import { useEffect, useState } from "react";
import './App.css';
import Home from './Pages/Home'
import Generator  from './Pages/Generator';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Image_generator from './Pages/Image_generator';
function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/generator" element={<Generator/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/image_generator" element={<Image_generator/>} />
      </Routes>
    </div>
  );
}

export default App;
