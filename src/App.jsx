import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Registration from './components/custom/Registration'
import Login from './components/custom/Login'
import MatrimonialSearch from './components/custom/MatrimonialSearch'
import Hostelry from './components/custom/Hostelry'
import Temple from './components/custom/Temple'
import PrivacyPolicy from './components/custom/PrivacyPolicy'
import Suggestion from './components/custom/Suggestion'
import SocialFlagSong from './components/custom/SocialFlagSong'
import VideoPage from './components/custom/VideoPage'
import Contact from './components/custom/Contact'
import AboutUs from './components/custom/AboutUs'
import Rite from './components/custom/Rite'
import TouristPlace from './components/custom/TouristPlace'
import Freelisting from './components/custom/Freelisting'
import BusinessSearch from './components/custom/BusinessSearch'
import CentralAssembly from './components/custom/CentralAssembly'
import Mahasabha2015 from "./components/custom/Mahasabha2015"
import RegionalAssembly from "./components/custom/RegionalAssembly"
import CommunalMarriage from "./components/custom/CommunalMarriage"
import OtherProgram from "./components/custom/OtherProgram"
import ExecutiveCentralAssembly from "./components/custom/ExecutiveCentralAssembly"
import Assembly2015 from "./components/custom/2015Assembly"
import GahoiBandhan from "./components/custom/GahoiBandhan"
import GahoiBandhu from "./components/custom/GahoiBandhu"
import AnyaPatrikayen from "./components/custom/AnyaPatrikayen"
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path='/matrimonialsearch' element={<MatrimonialSearch />} />
        <Route path='/hostelry' element={<Hostelry />} />
        <Route path='/temple' element={<Temple />} />
        <Route path='/touristplace' element={<TouristPlace />} />
        <Route path='/freelisting' element={<Freelisting />} />
        <Route path='/business_search' element={<BusinessSearch />} />
        <Route path='/centralassembly' element={<CentralAssembly />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/socialflagsong" element={<SocialFlagSong />} />
        <Route path="/suggestions" element={<Suggestion />} />       
        <Route path="/video" element={<VideoPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/rite" element={<Rite />} />
        <Route path="/plans" element={<div>Our Plans</div>} />
        <Route path="/team" element={<div>Our Team</div>} />
        <Route path="/blog" element={<div>Blog</div>} />
        <Route path="/reviews" element={<div>Reviews</div>} />
        <Route path="/contact" element={<div>Contact Us</div>} />
        <Route path="/mahasabha2015" element={<Mahasabha2015 />} />
        <Route path="/regionalassembly" element={<RegionalAssembly />} />
        <Route path="/communalmarriage" element={<CommunalMarriage />} />
        <Route path="/otherprogram" element={<OtherProgram />} />
        <Route path="/ExecutiveCentralAssembly" element={<ExecutiveCentralAssembly />} />
        <Route path="/Assembly2015" element={<Assembly2015 />} />
        <Route path="/GahoiBandhan" element={<GahoiBandhan />} />
        <Route path="/GahoiBandhu" element={<GahoiBandhu />} />
        <Route path="/AnyaPatrikayen" element={<AnyaPatrikayen />} />
      </Routes>
    </Layout>
  )
}

export default App

