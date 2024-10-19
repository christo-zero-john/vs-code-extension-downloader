import React from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";
import img10 from "../assets/10.png";
import img11 from "../assets/11.png";
import img12 from "../assets/12.png";

function Docs() {
  return (
    <div className="en-Oxanium no-scrollbar">
      <h1 className="text-center m-3">How To Download</h1>
      <ul className="nav nav-tabs bg-dark w-fit p-2 flex-column" id="myTab" role="tablist">
        <li className="w-100" role="presentation">
          <button
            className="text-start nav-link w-100 rounded-0"
            id="download-single-extension-docs"
            data-bs-toggle="tab"
            data-bs-target="#download-single-extension-docs-pane"
            type="button"
            role="tab"
            aria-controls="download-single-extension-docs-pane"
            aria-selected="true"
          >
            Download single extension
          </button>
        </li>

        <li className="w-100" role="presentation">
          <button
            className="text-start nav-link w-100 rounded-0"
            id="download-multiple-extensions-docs"
            data-bs-toggle="tab"
            data-bs-target="#download-multiple-extensions-docs-pane"
            type="button"
            role="tab"
            aria-controls="download-multiple-extensions-docs-pane"
            aria-selected="true"
          >
            Download multiple extensions
          </button>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade p-3"
          id="download-single-extension-docs-pane"
          role="tabpanel"
          aria-labelledby="download-single-extension-docs"
          tabindex="0"
        >
          <p className="fs-3 fw-500 text-primary mt-3 p-3">
            Goto{" "}
            <a href={"https://marketplace.visualstudio.com/"} className="">
              Visual Studio Code Marketplace
            </a>
            <img
              src={img1}
              alt=" Visual Studio Code Marketplace"
              className="fw-100 fs-6 wd-90 d-block mx-auto m-2 border border-4 border-dark p-1"
            />
          </p>

          <p className="fs-3 fw-500 text-primary mt-3 p-3">
            Search for some extension
            <img
              src={img2}
              alt="Search for some extension"
              className="fw-100 fs-6 wd-90 d-block mx-auto m-2 border border-4 border-dark p-1"
            />
            <img
              src={img3}
              alt="Search for some extension"
              className="fw-100 fs-6 wd-90 d-block mx-auto m-2 border border-4 border-dark p-1"
            />
          </p>

          <p className="fs-3 fw-500 text-primary mt-3 p-3">
            Copy extension link
            <img
              src={img4}
              alt=""
              className="fw-100 fs-6 wd-90 d-block mx-auto m-2 border border-4 border-dark p-1"
            />
          </p>

          <p className="fs-3 fw-500 text-primary mt-3 p-3">
            Paste extension link in the downloader
            <img
              src={img5}
              alt=""
              className="fw-100 fs-6 wd-90 d-block mx-auto m-2 border border-4 border-dark p-1"
            />
          </p>

          <p className="fs-3 fw-500 text-primary mt-3 p-3">
            Goto Version history
            <img
              src={img7}
              alt=""
              className="fw-100 fs-6 wd-90 d-block mx-auto m-2 border border-4 border-dark p-1"
            />
          </p>

          <p className="fs-3 fw-500 text-primary mt-3 p-3">
            Paste the version in the downloader
            <img
              src={img8}
              alt=""
              className="fw-100 fs-6 wd-90 d-block mx-auto m-2 border border-4 border-dark p-1"
            />
          </p>

          <p className="fs-3 fw-500 text-primary mt-3 p-3">
            Click download
            <img
              src={img9}
              alt=""
              className="fw-100 fs-6 wd-90 d-block mx-auto m-2 border border-4 border-dark p-1"
            />
          </p>

          <p className="fs-3 fw-500 text-primary mt-3 p-3">
            Accept our Terms and Conditions
            <img
              src={img10}
              alt=""
              className="fw-100 fs-6 wd-90 d-block mx-auto m-2 border border-4 border-dark p-1"
            />
          </p>

          <p className="fs-3 fw-500 text-primary mt-3 p-3">
            Click Confirm Download
            <img
              src={img12}
              alt=""
              className="fw-100 fs-6 wd-90 d-block mx-auto m-2 border border-4 border-dark p-1"
            />
          </p>

          <p className="fs-3 fw-500 text-primary mt-3 p-3">
            Your extension will be downloaded after a short while.
            <img
              src={img11}
              alt=""
              className="fw-100 fs-6 wd-90 d-block mx-auto m-2 border border-4 border-dark p-1"
            />
          </p>

          <p className="fs-3 fw-500 text-primary mt-3 p-3">
            Click save and you are all set
          </p>
        </div>

        <div
          className="tab-pane fade p-3"
          id="download-multiple-extensions-docs-pane"
          role="tabpanel"
          aria-labelledby="download-multiple-extensions-docs"
          tabindex="0"
        >
          <p className="">Will Be added soon. Stay Tuned</p>
        </div>
      </div>
    </div>
  );
}

export default Docs;
