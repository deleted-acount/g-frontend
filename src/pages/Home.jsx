import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
  </div>
);

// Error Fallback component
const ErrorFallback = ({ error, componentName }) => {
  console.error(`Error in ${componentName}:`, error);
  return (
    <div className="min-h-[200px] flex items-center justify-center p-4 bg-red-50 rounded-lg">
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Error loading {componentName}</h2>
        <p className="text-gray-600 mb-4">{error?.message || 'Please try refreshing the page'}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
};

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error(`Error in ${this.props.componentName}:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} componentName={this.props.componentName} />;
    }
    return this.props.children;
  }
}

// Wrap lazy imports in try-catch
const lazyImport = (importFn, componentName) => {
  return lazy(async () => {
    try {
      return await importFn();
    } catch (error) {
      console.error(`Failed to load ${componentName}:`, error);
      throw error;
    }
  });
};

// Lazy load components with error handling
const HeroSection = lazyImport(() => import('../components/sections/HeroSection'), 'HeroSection');
const EventBanner = lazyImport(() => import('../components/sections/EventBanner'), 'EventBanner');
const PlanSection = lazyImport(() => import('../components/sections/PlanSection'), 'PlanSection');
const BridesandGroom = lazyImport(() => import('../components/sections/BridesandGroom'), 'BridesandGroom');
const AboutSection = lazyImport(() => import('../components/sections/AboutSection'), 'AboutSection');
const SuccessStories = lazyImport(() => import('../components/sections/SuccessStories'), 'SuccessStories');
const TestimonialSection = lazyImport(() => import('../components/sections/TestimonialSection'), 'TestimonialSection');
const SuggestionSection = lazyImport(() => import('../components/sections/SuggestionSection'), 'SuggestionSection');
const StayConnected = lazyImport(() => import('../components/sections/StayConnected'), 'StayConnected');
const ContactusSection = lazyImport(() => import('../components/sections/ContactusSection'), 'ContactusSection');

// Component wrapper for consistent error handling
const SectionWrapper = ({ children, name }) => (
  <ErrorBoundary componentName={name}>
    <Suspense fallback={<LoadingSpinner />}>
      {children}
    </Suspense>
  </ErrorBoundary>
);

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>श्री गहोई शक्ति जन कल्याण समिति</title>
        <meta name="description" content="श्री गहोई शक्ति जन कल्याण समिति - समाज की सेवा में समर्पित" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <SectionWrapper name="HeroSection">
        <HeroSection />
      </SectionWrapper>
      <SectionWrapper name="EventBanner">
        <EventBanner />
      </SectionWrapper>

  

      <SectionWrapper name="PlanSection">
        <PlanSection />
      </SectionWrapper>

      <SectionWrapper name="BridesandGroom">
        <BridesandGroom />
      </SectionWrapper>

      <SectionWrapper name="AboutSection">
        <AboutSection />
      </SectionWrapper>

      <SectionWrapper name="SuccessStories">
        <SuccessStories />
      </SectionWrapper>

      <SectionWrapper name="TestimonialSection">
        <TestimonialSection />
      </SectionWrapper>

      <SectionWrapper name="SuggestionSection">
        <SuggestionSection />
      </SectionWrapper>

      <SectionWrapper name="StayConnected">
        <StayConnected />
      </SectionWrapper>

      <SectionWrapper name="ContactusSection">
        <ContactusSection />
      </SectionWrapper>
    </div>
  );
};

export default Home; 