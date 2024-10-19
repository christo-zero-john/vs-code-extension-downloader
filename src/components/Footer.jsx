import React from "react";
import githubImage from "../assets/github.png";
import "../styles/custom.css";

function Footer() {
  return (
    <div className="text-light p-3 m-1 p-md-5 border border-success rounded">
      <div className="menu">
        <a
          href="https://github.com/christo-zero-john/vs-code-extension-downloader"
          className="text-decoration-none m-2 d-block fw-100 transition-05 d-md-inline link-orange"
        >
          Star on Github
        </a>
        <a href="http://localhost:5173/docs" className="text-decoration-none m-2 d-block fw-100 transition-05 d-md-inline link-orange">
          How To Download Extensions
        </a>
        <a href="http://localhost:5173/download-bundle" className="text-decoration-none m-2 d-block fw-100 transition-05 d-md-inline link-orange">
          Download Multiple Extensions
        </a>
        <a href="https://github.com/sponsors/christo-zero-john/" className="text-decoration-none m-2 d-block fw-100 transition-05 d-md-inline link-orange">
          Sponsor on Github
        </a>
        <a href="" className="text-decoration-none m-2 d-block fw-100 transition-05 d-md-inline link-orange"></a>
        <a href="" className="text-decoration-none m-2 d-block fw-100 transition-05 d-md-inline link-orange"></a>
        <a href="" className="text-decoration-none m-2 d-block fw-100 transition-05 d-md-inline link-orange"></a>
      </div>
    </div>
  );
}

export default Footer;
