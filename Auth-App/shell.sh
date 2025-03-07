import { useEffect, useState } from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from  "./pages/Home/Index"
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Login from "./Authcomponents/login.jsx"
import Register from "./Authcomponents/register.jsx"
import { auth } from './Authcomponents/firebase.js'
import { AuthContext } from './Authcomponents/useAuthContext.js';


import LocomotiveScroll from "locomotive-scroll"
const Locomotive = new LocomotiveScroll();
function App() {
  const [user, setUser] = useState(true);

  const [glass,setGlass] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setGlass(true);
      } else {
        setGlass(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
    <AuthContext.Provider value={{glass,user,setUser}}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
      </AuthContext.Provider>
    </>
  )
}

export default App
