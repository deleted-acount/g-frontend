import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import PlanSection from '../components/sections/PlanSection';
import BridesandGroom from '../components/sections/BridesandGroom';
import SuccessStories from '../components/sections/SuccessStories';
import TestimonialSection from '../components/sections/TestimonialSection';
import SuggestionSection from '../components/sections/SuggestionSection';
import StayConnected from '../components/sections/StayConnected';
import ContactusSection from '../components/sections/ContactusSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <PlanSection />
      <BridesandGroom />
      <AboutSection />
      <SuccessStories />
      <TestimonialSection />
      <SuggestionSection />
      <StayConnected />
      <ContactusSection />
    </>
  );
};

export default Home; 