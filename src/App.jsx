import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Combo from "./pages/Combo"
import Sell from "./pages/Sell"
import Store from "./pages/Store"
import Supermarket from "./pages/Supermarket"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Section from "./components/Section"


function App() {
 

  return (
 
<>
    <BrowserRouter>
    <Navbar/>
<div className="page-content">
      <Routes>
    <Route path = "/home" element = {<Home/>}/>
    <Route path="/combo" element={<Combo/>}/>
    <Route path = "/sell" element = {<Sell/>}/>
    <Route path = "/store" element={<Store/>}/>
    <Route path = "/supermarket" element={<Supermarket/>}/>
     <Route path="/" element={<Hero />} />
    </Routes>
    </div>
    <Section/>
    <Footer/>
    </BrowserRouter>
</>
  
  )
}

export default App
