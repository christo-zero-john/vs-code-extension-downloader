import { useState, useEffect } from "react";

function GetExtensionLink({ link, downloadLink }) {
  const [isDownloadReady, setIsDownloadReady] = useState(false);
  const [version, setVersion] = useState("");

  useEffect(() => {
    setIsDownloadReady(downloadLink.var);
  }, [downloadLink.var]);

  function validateLink(inputLink) {
    link.set(inputLink);

    console.log("Catched Link: ", inputLink);

    // Regular expression to match the VS Code extension link pattern
    const regex =
      /https:\/\/marketplace\.visualstudio\.com\/items\?itemName=([^.]+)\.([^&]+)/;
    const match = inputLink.match(regex);

    console.log("Regex match: ", match);

    if (match) {
      const publisher = match[1];
      const extensionName = match[2];

      // Construct the download link
      const newDownloadLink = `https://marketplace.visualstudio.com/_apis/public/gallery/publishers/${publisher}/vsextensions/${extensionName}${version ? `/${version}` : ''}/vspackage`;

      console.log("new download link created successfully", newDownloadLink);

      link.set(newDownloadLink);
    } else {
      console.log(
        "couldn't create new download link. Download link doesn't match"
      );

      downloadLink.set("");
    }
  }

  function handleVersionChange(inputVersion) {
    setVersion(inputVersion);
    validateLink(link.var); // Reconstruct the link with the new version
  }

  function handleDownload() {
    if (isDownloadReady) {
      window.open(downloadLink.var, "_blank");
    }
  }

  return (
    <div className=" w-fit d-inline-block mx-auto">
      <input
        className="col-11 col-md-6 m-4 mb-1"
        type="text"
        placeholder="Paste VS Code Extension link Here"
        onChange={(e) => validateLink(e.target.value)}
        value={link.var}
      />
      <input
        className="col-11 col-md-6 m-4"
        type="text"
        placeholder="Enter version (optional)"
        onChange={(e) => handleVersionChange(e.target.value)}
        value={version}
      />
      <p className="text-primary">
        Example Extension Link:
        <code className="small px-2 py-1 rounded">
          https://marketplace.visualstudio.com/items?itemName=VSExtensionDownloader.zeroApps
        </code>
      </p>
      <button
        onClick={handleDownload}
        disabled={!isDownloadReady}
        className={`btn ${isDownloadReady ? "btn-primary" : "btn-secondary"}`}
      >
        Download Extension
      </button>
      {(isDownloadReady) ? (
        <p className="mt-2 text-success">
          Download link ready. Click the button to download.
        </p>
      ) : (<p className="mt-2 text-danger">
        Paste extension link and version of extension, then click Download Extension.
      </p>)}
    </div>
  );
}

export default GetExtensionLink;
