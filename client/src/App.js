import React from 'react'
import {Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Pet from './pages/Pet';
import Adopter from './pages/Adopter';
import Staff from './pages/Staff';
import StaffForm from './pages/StaffForm';
import AdopterForm from './pages/AdopterForm';
import PetForm from './pages/PetForm';
export default function App() {

  return (
    <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route  path="/pet" element={<Pet />} />
          <Route  path="/pet/:id" element={<PetForm />} />
          <Route  path="/petForm" element={<PetForm />} />
          <Route  path="/adopter" element={<Adopter />} />
          <Route  path="/adopter/:id" element={<AdopterForm />} />
          <Route  path="/adoptForm" element={<AdopterForm />} />
          <Route  path="/staff" element={<Staff />} />
          <Route  path="/staff/:id" element={<StaffForm />} />
          <Route  path="/staffForm" element={<StaffForm />} />
          <Route  path="/*" element={<NoPage />} />
    </Routes>
  )
}
