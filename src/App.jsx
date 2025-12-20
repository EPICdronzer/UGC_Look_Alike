import {BrowserRouter, Route, Routes} from"react-router-dom"
import GenesisPage from "./components/GenesisPage"
import Home from "./components/Home"
import MandatePage from "./components/MandatePage"
import UgcActPage from "./components/UgcActPage"
import LogoPage from "./components/LogoPage"
import BureausPage from "./components/BureausPage"
import UgcOfficePage from "./components/UgcOfficePage"
import InterUniCenterPage from "./components/InterUniCenterPage"
import NationalFacPage from "./components/NationalFacPage"
import AboutUgc from "./components/AboutUgc"
import DisplayInterUni from "./components/DisplayInterUni"
import EcommerceUGC from "./components/EcommerceUGC"
import KeyInitiatives from "./components/KeyInitiatives"
import KeyInitiativesDisplay from "./components/KeyInitiativesDisplay"
import StudentCorner from "./components/StudentCorner"
import FellowshipDisplay from "./components/FellowshipDisplay"
function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Genesis" element={<GenesisPage/>}/>
        <Route path="/Mandate" element={<MandatePage/>}/>
        <Route path="/UGCAct" element={<UgcActPage/>}/>
        <Route path="/Logo" element={<LogoPage/>}/>
        <Route path="/UGCBureaus" element={<BureausPage/>}/>
        <Route path="/UGCOffices" element={<UgcOfficePage/>}/>
        <Route path="/InterUniversityCentres" element={<InterUniCenterPage/>}/>
        <Route path="/InterUniversityCentres/display/:id" element={<DisplayInterUni/>}/>
        <Route path="/NationalFacilities" element={<NationalFacPage/>}/>
        <Route path="/about" element={<AboutUgc/>}/>
        <Route path="/eComUGC" element={<EcommerceUGC/>}/>
        <Route path="/keyInitiatives" element={<KeyInitiatives/>}/>
        <Route path="/keyInitiatives/keyInitiativesDisplay/:id" element={<KeyInitiativesDisplay/>}/>
        <Route path="/studentCorner" element={<StudentCorner/>}/>
        <Route path="/fellowship/:id" element={<FellowshipDisplay/>}/>
        <Route path="/scholarship/:id" element={<FellowshipDisplay/>}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
