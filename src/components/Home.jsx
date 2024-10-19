import React, { useState } from "react";
import DownloadExtension from "./DownloadExtension";
import Disclaimer from "./Disclaimer";
import TermsAndConditions from "./TermsAndConditions";
import TotalVisitors from "./totalVisitors";
import NavBar from "./NavBar";
import Footer from "./Footer";
import RecentDownloads from "./RecentDownloads";

function Home() {
  const [link, setLink] = useState("");
  const [downloadLink, setDownloadLink] = useState("");

  return (
    <div className="en-Oxanium bg-dark">
      <NavBar />

      <div className="">
        <TotalVisitors />
      </div>

      <h1 className="text-center text-light display-1 p-2 pt-5 p-md-5 en-sirin">
        Visual Studio Code Extension Downloader
      </h1>

      <DownloadExtension
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
      <p className="text-light m-3">
        By Using{" "}
        <span className="text-success">VS CODE EXTENSION DOWNLOADER</span> you
        agree to abide by our{" "}
        <a href="/terms-and-conditions" className="">
          Terms and Conditions
        </a>
      </p>

      <RecentDownloads />

      <Footer />
    </div>
  );
}

export default Home;
