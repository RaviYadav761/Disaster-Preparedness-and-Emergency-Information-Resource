import React from 'react'
import Header from './components/layout/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeSection from './components/sections/HomeSection'
import Lightning from './components/pages/CitizenCorner/Lightning'
import Cyclone from './components/pages/CitizenCorner/Cyclone'
import Drought from './components/pages/CitizenCorner/Drought'
import Earthquakes from './components/pages/CitizenCorner/Earthquakes'
import Floods from './components/pages/CitizenCorner/Floods'
import Industrial from './components/pages/CitizenCorner/Industrial'
import HeatWave from './components/pages/CitizenCorner/HeatWave'
import Fire from './components/pages/CitizenCorner/Fire'
import Weather from './components/weather/Weather'
import { useState } from "react";

const App = () => {
  const [bg, setBg] = useState("bg-green-400");
  return (
   <div className={`min-h-screen ${bg}`}>
    <BrowserRouter>
      <Header setBg={setBg}/>
      <main>
        <Routes>
<Route path='/' element={<HomeSection/>}/>
<Route path='/lightning' element={<Lightning/>}/>
<Route path='/cyclone' element={<Cyclone/>}/>
<Route path='/drought' element={<Drought/>}/>
<Route path='/earthquakes' element={<Earthquakes/>}/>
<Route path='/floods' element={<Floods/>}/>
<Route path='/industrial' element={<Industrial/>}/>
<Route path='/heat-wave' element={<HeatWave/>}/>
<Route path='/fire' element={<Fire/>}/>
<Route path='/weather' element={<Weather/>}/>

        </Routes>
      </main>
    
    </BrowserRouter>
   </div>
  )
}

export default App