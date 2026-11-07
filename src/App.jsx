import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { ScrollToTopButton, ScrollToTopOnNavigate } from './components/ScrollToTop';
import MultiStepInquiryModal from './components/MultiStepInquiryModal';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BusinessWebsitePage from './pages/BusinessWebsitePage';
import EcommercePage from './pages/EcommercePage';
import ShopifyPage from './pages/ShopifyPage';
import CustomDevelopmentPage from './pages/CustomDevelopmentPage';
import POSSystemsPage from './pages/POSSystemsPage';
import WebsiteRedesignPage from './pages/WebsiteRedesignPage';
import MaintenancePage from './pages/MaintenancePage';
import ServiceDetailTemplate from './pages/ServiceDetailTemplate';
import PortfolioPage from './pages/PortfolioPage';
import ProjectDetails from './pages/ProjectDetails';
import EstimatorPage from './pages/EstimatorPage';
import ContactPage from './pages/ContactPage';
import ReviewsPage from './pages/ReviewsPage';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';

export default function App() {
  const [globalQuoteModalOpen, setGlobalQuoteModalOpen] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ScrollToTopOnNavigate />

      {/* Accessible Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Sticky Global Navbar */}
      <Navbar onOpenQuoteModal={() => setGlobalQuoteModalOpen(true)} />

      {/* Main Page Content */}
      <main id="main-content" style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/business-websites" element={<BusinessWebsitePage />} />
          <Route path="/services/ecommerce" element={<EcommercePage />} />
          <Route path="/services/shopify" element={<ShopifyPage />} />
          <Route path="/services/custom-web-apps" element={<CustomDevelopmentPage />} />
          <Route path="/services/pos-systems" element={<POSSystemsPage />} />
          <Route path="/services/website-redesign" element={<WebsiteRedesignPage />} />
          <Route path="/services/maintenance" element={<MaintenancePage />} />
          <Route path="/services/:slug" element={<ServiceDetailTemplate />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:slug" element={<ProjectDetails />} />
          <Route path="/estimator" element={<EstimatorPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Interactive Elements */}
      <WhatsAppButton />
      <ScrollToTopButton />

      {/* Global Multi-Step Quote Modal */}
      <MultiStepInquiryModal
        isOpen={globalQuoteModalOpen}
        onClose={() => setGlobalQuoteModalOpen(false)}
      />
    </div>
  );
}
