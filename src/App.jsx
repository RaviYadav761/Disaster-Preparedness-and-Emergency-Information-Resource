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
import DndMain from './components/pages/DosAndDonts/DndMain'

import Heatwavednd from './components/pages/DosAndDonts/Heatwavednd'
import Flooddnd from './components/pages/DosAndDonts/Flooddnd'
import Landslidednd from './components/pages/DosAndDonts/Landslidednd'
import Earthquakednd from './components/pages/DosAndDonts/Earthquakednd'
import Cyclonednd from './components/pages/DosAndDonts/Cyclonednd'
import Coldwavednd from './components/pages/DosAndDonts/Clodwavednd'
import Droughtdnd from './components/pages/DosAndDonts/Droughtdnd'
import Firednd from './components/pages/DosAndDonts/Firednd'
import Lightningdnd from './components/pages/DosAndDonts/Lightningdnd'
import Tsunamidnd from './components/pages/DosAndDonts/Tsunamidnd'
import Bookletdnd from './components/pages/DosAndDonts/Bookletdnd'
import EmergencyHelplines from './components/pages/EmergencyHelplinesNav'


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
<Route path='/Dndmain' element={<DndMain/>}/>


<Route path='/heatwavednd' element={<Heatwavednd />} />
<Route path='/floodsdnd' element={<Flooddnd />} />
<Route path='/landslidednd' element={<Landslidednd />} />
<Route path='/earthquakednd' element={<Earthquakednd />} />
<Route path='/cyclonednd' element={<Cyclonednd />} />
<Route path='/coldwavednd' element={<Coldwavednd />} />
<Route path='/droughtdnd' element={<Droughtdnd />} />
<Route path='/firednd' element={<Firednd />} />
<Route path='/lightningdnd' element={<Lightningdnd />} />
<Route path='/tsunamidnd' element={<Tsunamidnd />} />
<Route path='/bookletdnd' element={<Bookletdnd />} />

<Route path='/emergencyhelplinesNav' element={<EmergencyHelplines/>} />

        </Routes>
      </main>
    
    </BrowserRouter>
   </div>
  )
}

export default App