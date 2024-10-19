import React from "react";

function Disclaimer() {
  return (
    <div className="bg-light m-3 p-4 rounded ">
      <p className="text-dark fw-500 display-5 mx-auto border-bottom w-fit">
        Disclaimer
      </p>
      <p className="text-dark small">
        This is an independent hobby project and is not affiliated with,
        endorsed by, or in any way officially connected with Microsoft
        Corporation or any of their subsidiaries or affiliates. The names
        Microsoft, VS Code, and related trademarks belong to their respective
        owners. The developer of this application bears no responsibility for
        the extensions downloaded or used through this app. Users are solely
        responsible for ensuring their use of this tool and any downloaded
        extensions complies with all applicable terms of service, laws, and
        regulations. Use this application at your own risk.{" "}
        <p className="fw-700">
          In addition you are not allowed to redestribute the extensions
          downloaded. They must only be used for personal purpose.
        </p>
      </p>
    </div>
  );
}

export default Disclaimer;
