import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeSection from './components/HomeSection'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
<Route path='/' element={<HomeSection/>}/>

        </Routes>
      </main>
    
    </BrowserRouter>
   
  )
}

export default App