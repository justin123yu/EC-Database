import React from 'react'
import {Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Pet from './pages/Pet';
import Adopter from './pages/Adopter';
import Staff from './pages/Staff';
export default function App() {

  return (
    <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route  path="/pet" element={<Pet />} />
          <Route  path="/adopter" element={<Adopter />} />
          <Route  path="/staff" element={<Staff />} />
          <Route  path="/*" element={<NoPage />} />
    </Routes>
  )
}
