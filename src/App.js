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
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initial loading state when the app mounts
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);

    // Event listener for when the user navigates back to the app
    const handlePopState = () => {
      setLoading(false); // Reset the loading state
    };

    window.addEventListener('popstate', handlePopState);

    // Cleanup the event listener on component unmount
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
              <Route path="/artists" element={<ArtistsList />} />
              <Route path="/artists/:alias" element={<ArtistProfile />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
