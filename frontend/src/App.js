import React from "react";
import { BrowserRouter, Routes , Route } from 'react-router-dom'
 import './App.css'
import Home from './pages/Home'
import JobPortal from './pages/JobPortal'
import Contact from "./pages/Contact"
import About from "./pages/About";
import NavBar from './Components/NavBar'
import EnterData from './operation/EnterData'
import UpdateData from './operation/UpdateData';
import RegisterForm from './Users/RegisterForm'
import Login from './Users/Login'
import Protected from "./Protected";
function App() {
  return (
    <BrowserRouter>
    
    <Routes>


        <Route path='/' element={<NavBar/>}>
          <Route index element={<Protected>
            <Home/>
          </Protected>} />
        <Route path='/jobPortal' element={<Protected>
          <JobPortal/></Protected>}/>
        <Route path='/Contact' element={<Protected>
          <Contact/></Protected>}/>
        <Route path='/About' element={<Protected>
          <About/></Protected>}/>
        <Route path="/enterData" element={<EnterData/>}/>
        <Route path="/updateDate/:id" element={<UpdateData/>}/>
        </Route>
        <Route path="/registerform" element={<RegisterForm/>}/>
        <Route path="/login" element={<Login/>} />
    </Routes>
  
    </BrowserRouter>
  )
}

export default App