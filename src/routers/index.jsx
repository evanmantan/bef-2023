import React, { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Seminar from "../pages/Seminar";
import Expo from "../pages/Expo";
import InvestorForum from "../pages/InvestorForum";
import NotFound from "../pages/NotFound";

const ScrollToTop = () => {
  let location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  return null;
};

const Routers = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/seminar" element={<Seminar />} />
            <Route path="/expo" element={<Expo />} />
            <Route path="/investor-forum" element={<InvestorForum />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default Routers;
