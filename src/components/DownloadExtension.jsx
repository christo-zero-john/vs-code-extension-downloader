import { useState, useEffect } from "react";
import TermsAndConditions from "./TermsAndConditions";

function DownloadExtension({ link, downloadLink }) {
  const [isDownloadReady, setIsDownloadReady] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [extensionData, setExtensionData] = useState({
    publisher: "",
    name: "",
    version: "",
  });
  const [acceptTandC, setAcceptTandC] = useState(false);

  useEffect(() => {
    setIsDownloadReady(!!downloadLink.var);
  }, [downloadLink.var]);

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  }, []);

  useEffect(() => {
    if (
      extensionData.publisher &&
      extensionData.name &&
      extensionData.version
    ) {
      constructDownloadLink();
    }
  }, [extensionData]);

  function validateLink(inputLink) {
    link.set(inputLink);

    console.log("Caught Link: ", inputLink);

    const regex =
      /https:\/\/marketplace\.visualstudio\.com\/items\?itemName=([^.]+)\.([^&]+)/;
    const match = inputLink.match(regex);

    console.log("Regex match: ", match);

    if (match) {
      const publisher = match[1];
      const extensionName = match[2];

      console.log(
        `Link matched publisher: ${publisher}, Extension Name: ${extensionName}`
      );

      setExtensionData((prevData) => ({
        ...prevData,
        publisher: publisher,
        name: extensionName,
      }));

      if (extensionData.version) {
        constructDownloadLink();
      } else {
        console.log("Enter version to be downloaded");
      }
    } else {
      console.log("Extension link not valid");
      downloadLink.set("");
    }
  }

  function constructDownloadLink() {
    const newDownloadLink = `https://marketplace.visualstudio.com/_apis/public/gallery/publishers/${extensionData.publisher}/vsextensions/${extensionData.name}/${extensionData.version}/vspackage`;

    downloadLink.set(newDownloadLink);
    console.log("Created new download link: ", newDownloadLink);
  }

  function handleVersionChange(inputVersion) {
    console.log("Current data: ", extensionData);
    setExtensionData((prevData) => ({
      ...prevData,
      version: inputVersion,
    }));
    console.log("Extension data updated: ", {
      ...extensionData,
      version: inputVersion,
    });
    if (extensionData.publisher && extensionData.name) {
      constructDownloadLink();
    } else {
      console.log("Extension link not provided");
    }
  }

  function handleDownload() {
    if (isDownloadReady) {
      setShowModal(true);
    }
  }

  function confirmDownload() {
    window.open(downloadLink.var, "_blank");
    setShowModal(false);
  }

  return (
    <div className="col-12 d-block mx-auto">
      <div
        className="col-11 col-md-9 m-4 d-block mx-auto"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-animation="true"
        data-bs-html="true"
        data-bs-title="
        <p className='text-info small col-11'>
          Example Extension Link
          <code className='px-2 py-1 rounded'>
            https://marketplace.visualstudio.com/items?itemName=VSExtensionDownloader.zeroApps
          </code>
        </p>"
      >
        <input
          className="w-100 mb-2 hd-10 text-center"
          type="text"
          placeholder="Paste VS Code Extension link Here"
          onChange={(e) => validateLink(e.target.value)}
          value={link.var}
        />
      </div>

      <div
        className="col-11 col-md-9 m-4 mx-auto"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-html="true"
        data-bs-title="Example Version Code
          <code className='px-2 py-1 rounded'>6.0.10</code>"
      >
        <input
          className="w-100 mb-2 hd-10 text-center"
          type="text"
          placeholder="Type version to download"
          onChange={(e) => handleVersionChange(e.target.value)}
          value={extensionData.version}
        />
      </div>

      <div className="m-2 text-center">
        <button
          onClick={handleDownload}
          disabled={!isDownloadReady}
          className={`btn ${isDownloadReady ? "btn-primary" : "btn-secondary"}`}
        >
          Download Extension
        </button>
        {isDownloadReady ? (
          <p className="mt-2 text-success">
            Download link ready. Click the button to download.
          </p>
        ) : (
          <p className="mt-2 text-danger">
            Paste extension link and version of extension, then click Download
            Extension.
          </p>
        )}
      </div>

      {/* Bootstrap Modal */}
      <div
        className={`modal fade ${showModal ? "show" : ""} col-11`}
        style={{ display: showModal ? "block" : "none" }}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Download</h5>
              <button
                type="button"
                className="close"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to download this extension?</p>
              <p>Extension: {extensionData.name}</p>
              <p>Publisher: {extensionData.publisher}</p>
              <p>Version: {extensionData.version}</p>
            </div>

            <div
              className={`w-90 p-3 m-2 hd-60 overflow-auto border border-${
                (acceptTandC && "success") || "danger"
              } rounded`}
            >
              <TermsAndConditions />
              <p
                className={`fw-bold text-${
                  (acceptTandC && "success") || "danger"
                }`}
              >
                I Accept the these terms and conditions
                <input
                  type="checkbox"
                  className="m-3"
                  onChange={(e) => {
                    setAcceptTandC(e.target.checked);
                  }}
                />
              </p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                disabled={!acceptTandC}
                onClick={confirmDownload}
              >
                Confirm Download
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default DownloadExtension;
