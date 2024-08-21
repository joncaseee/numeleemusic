/* App.js */

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import Navbar from "./components/Navbar";
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
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <Router>
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
            <Navbar setLoading={setLoading} /> {/* Pass setLoading to Navbar */}
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
