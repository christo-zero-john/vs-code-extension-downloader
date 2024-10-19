import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TermsAndConditions from "./components/TermsAndConditions";
import DownloadAsBundle from "./components/DownloadAsBundle";
import Docs from "./components/Docs";
import Sponsor from "./components/Sponsor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/download-bundle" element={<DownloadAsBundle />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/sposnor" element={<Sponsor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
