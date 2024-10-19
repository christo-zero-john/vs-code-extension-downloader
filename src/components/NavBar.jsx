import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-dark  navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand transition-05 hover-scale-09" href="/">
          VS CODE EXTENSION DOWNLOADER
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/docs">
                How To Download Extensions
              </a>
            </li>

            <li className="nav-item">
              <a href="/download-bundle" className="nav-link">
                Download Multiple Extensions
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-success"
                href="https://github.com/christo-zero-john/vs-code-extension-downloader"
              >
                Star on Github
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/sponsors/christo-zero-john/"
              >
                Sponsor on Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
