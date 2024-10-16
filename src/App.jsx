import React, { useState } from "react";
import GetExtensionLink from "./components/GetExtensionLink";
import Disclaimer from "./components/Disclaimer";
import TermsAndConditions from "./components/TermsAndConditions";
import TotalVisitors from "./components/totalVisitors";

function App() {
  const [link, setLink] = useState("");
  const [downloadLink, setDownloadLink] = useState("");

  return (
    <div className="en-Oxanium container-fluid">
      <h1 className="text-dark text-center">
        Visual Studio Code Extension Downloader
      </h1>

      <div className="">
        <TotalVisitors />
      </div>

      <GetExtensionLink
        link={{
          var: link,
          set: setLink,
        }}
        downloadLink={{
          var: downloadLink,
          set: setDownloadLink,
        }}
      />
      <Disclaimer />

      <TermsAndConditions />
    </div>
  );
}

export default App;
