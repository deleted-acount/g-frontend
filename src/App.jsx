import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Registration from "./components/custom/Registration";
import Login from "./components/custom/Login";
import Hostelry from "./components/custom/Hostelry";
import PrivacyPolicy from "./components/custom/PrivacyPolicy";
import SocialFlagSong from "./components/custom/SocialFlagSong";
import Contact from "./components/custom/Contact";
import AboutUs from "./components/custom/AboutUs";
import Rite from "./components/custom/Rite";
import FamilyLogin from "./components/custom/FamilyLogin";
import { CowSeva } from "./components/cow-seva";
import ScrollToTop from "./components/utils/ScrollToTop";

import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/familylogin" element={<FamilyLogin />} />
          <Route path="/hostelry" element={<Hostelry />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/socialflagsong" element={<SocialFlagSong />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/rite" element={<Rite />} />
          <Route path="/gau-seva" element={<CowSeva />} />
        </Routes>
      </Layout>
    </LanguageProvider>
  );
}

export default App;
