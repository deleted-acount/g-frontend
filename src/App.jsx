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
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/socialflagsong" element={<SocialFlagSong />} />
        <Route path="/suggestions" element={<Suggestion />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<div>About Page</div>} />
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

