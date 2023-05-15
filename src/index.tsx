import "./css/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./components/App";

const rootElement = document.getElementById("root");
if (rootElement === null) throw new Error("Cannot find #root to bind to");

createRoot(rootElement).render(
  <StrictMode>
    <HashRouter>
      <App></App>
    </HashRouter>
  </StrictMode>
);

/** Service worker **/
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").then((reg) => {
    reg.addEventListener("updatefound", function () {
      console.log(
        "A new version of this application is available. Refresh to update."
      );
    });
  });
}
