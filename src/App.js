import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CursorBlur from "./components/GlowingCursor";
import Home from "./components/Home";
import Slide from "./components/Slide";
import Newproduct from "./components/Newproduct";
import Offer from "./components/Offer";
import Seasontrending from "./components/Seasontrending";
import Feature from "./components/Feature";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Topbar from "./components/TopBar";
import AllProductsPage from "./components/pages/AllProductsPage";
import ScrollToTop from "./components/ScrollToTop";
import Favourites from "./components/pages/Favourites";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App w-screen overflow-hidden">
        <CursorBlur />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Topbar />
                <Home />
                <Slide />
                <Newproduct />
                <Offer />
                <Seasontrending />
                <Feature />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/all-products" element={<AllProductsPage />} />
          <Route path="/Favourites" element={<Favourites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
