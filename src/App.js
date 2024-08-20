import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import ArtistsList from './components/ArtistsList';
import ArtistProfile from './components/ArtistProfile';
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here if needed */}
          <Route path="/artists" element={<ArtistsList />} />
        <Route path="/artists/:alias" element={<ArtistProfile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
