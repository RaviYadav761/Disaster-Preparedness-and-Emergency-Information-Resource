import React from 'react'
import Header from './components/layout/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeSection from './components/sections/HomeSection'
import Lightning from './components/pages/CitizenCorner/Lightning'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
<Route path='/' element={<HomeSection/>}/>
<Route path='/lightning' element={<Lightning/>}/>

        </Routes>
      </main>
    
    </BrowserRouter>
   
  )
}

export default App