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
      </Routes>
    </Layout>
  )
}

export default App

