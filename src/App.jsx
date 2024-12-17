import React from 'react'
import {BrowserRouter as Router, Routes, Route }from 'react-router-dom'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import About from './components/About/AboutUs'
import Contact from './components/Contact/Contact'
import Villas from './components/Villas/Villas'
import SingleVilla from './components/Villas/SingleVillas'
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions'
const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/termsandconditions' element={<TermsAndConditions/>}/>
        <Route path='/Villas' element={<Villas/>}/>
        <Route path='/Villa/:id' element={<SingleVilla/>}/>
        
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App