import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

// Import all components directly
import Footer from './Components/Footer/Footer';
import ScrollToTopOnRouteChange from './Components/ScrollToTopOnRouteChange';
import ScrollToTop from './Components/ScrollToTop';
import Home from './Pages/Home';
import Divisionsection from './Pages/Divisionsection';
import Quick from './Pages/Quick';
import Signup from './Components/Signup/signup';
import Blog from './Pages/Blog';
import BlogPostPage from './Pages/Blogpage';
import Servicesection from './Pages/Servicesection';
import Contact from './Components/Contact/Contact';
import Aboutsection from './Pages/Aboutsection';
import Franchisesection from './Pages/Franchisesection';
import Goldlease from './Pages/Goldlease';
import DivisionPage from './Components/Division/Divisionpage';
import Buycoins from './Pages/Buycoins';
import GoldDotsSection from './Pages/Golddots';

// AppContent handles routing and layout logic
const AppContent = () => {
  const location = useLocation();
  const hideFooter = location.pathname === "/signup"; // Example: hide footer on signup page

  return (
    <>
      {/* <Header /> */}
      <ScrollToTopOnRouteChange /> {/* top scroll on route change and refresh */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/divisions" element={<Divisionsection />} />
        <Route path="/faq" element={<Quick />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogpage" element={<BlogPostPage />} />
        <Route path="/services" element={<Servicesection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Aboutsection />} />
        <Route path="/franchise" element={<Franchisesection />} />
        <Route path="/goldlease" element={<Goldlease />} />
        <Route path="/divisionpage" element={<DivisionPage />} />
        <Route path="/buycoins" element={<Buycoins />} />
        <Route path="/golddots" element={<GoldDotsSection />} />
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
};

// Main App component with router
const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;