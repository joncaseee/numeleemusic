import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import Navbar from "./components/Navbar";
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import ArtistsList from './components/ArtistsList';
import ArtistProfile from './components/ArtistProfile';
import Home from "./pages/Home";
import About from "./pages/About";
import Mixes from "./pages/Mixes";
import Tickets from "./pages/Tickets";
import Terms from "./pages/Terms";
import Rules from "./pages/Rules";
import Locations from "./pages/Locations"; // Import the new Locations component
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);

    const handlePopState = () => {
      setLoading(false);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div>
        {loading ? (
          <div className="loader-container">
            <ScaleLoader
              color={"#ffffff"}
              loading={loading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <h3>Loading</h3>
          </div>
        ) : (
          <>
            <Navbar setLoading={setLoading} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/mixes" element={<Mixes />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/artists" element={<ArtistsList />} />
              <Route path="/artists/:alias" element={<ArtistProfile />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/locations" element={<Locations />} /> {/* Add this line */}
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;