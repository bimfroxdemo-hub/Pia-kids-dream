import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

// Pages
import Home from "./pages/Home";
import MomDaughterDuo from "./pages/Mom_Daughter_Duo";
import Collections from "./pages/Collections";
import WomensStyle from "./pages/WomensStyle";
import KidsStyle from "./pages/KidsStyle";
import About from "./pages/About";
import Contact from "./pages/Contact";


import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/Terms&conditions";
import OrderPolicy from "./pages/OrderPolicy";
import DeliveryInformation from "./pages/DeliveryInformation";

function AppContent() {
  const location = useLocation();

  const transparentPages = [
    "/",
    "/mom-daughter-duo",
  ];

  const isTransparentPage =
    transparentPages.includes(location.pathname);

  return (
    <>
      <ScrollToTop />

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main
        className={`min-h-screen ${
          isTransparentPage
            ? ""
            : "pt-[80px] md:pt-[100px]"
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/mom-daughter-duo"
            element={<MomDaughterDuo />}
          />

          <Route
            path="/collections"
            element={<Collections />}
          />

          <Route
            path="/womensstyle"
            element={<WomensStyle />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />
        {/* Footer Pages */}
  <Route
    path="/privacy-policy"
    element={<PrivacyPolicy />}
  />

  <Route
    path="/terms-conditions"
    element={<TermsConditions />}
  />

  <Route
    path="/order-policy"
    element={<OrderPolicy />}
  />

  <Route
    path="/delivery-information"
    element={<DeliveryInformation />}
  />
</Routes>
      </main>

      {/* FLOATING BUTTON */}
      <WhatsAppButton />

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <AppContent />
    </Router>
  );
}
