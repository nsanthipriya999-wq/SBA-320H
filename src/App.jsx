
//--------------------App.jsx--------------------------------------------------------
import react from 'react';
import Nav from "./components/Nav.jsx"
import Home from "./pages/Home.jsx"
import Explore from "./pages/Explore.jsx"
import Favorites from "./pages/Favorites.jsx"
import About from "./pages/About.jsx"
import Contactus from "./pages/Contactus.jsx"
import Notfound from './pages/Notfound.jsx';
import Footer from './components/Footer.jsx'
import { Routes, Route } from "react-router";
import "./App.css"


export default function App(){

  return(
  <div className='app-container'>
     <Nav />
     <div className='main-container'>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/explore" element={<Explore />}/>
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contactus" element={<Contactus />}/>
        <Route path="/*" element={<Notfound />}/>
      </Routes>
      </div>
     <Footer />
  </div>



  )



}