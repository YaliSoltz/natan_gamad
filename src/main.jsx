import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import TextProvider from "../textContext.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TextProvider>
      <App />
    </TextProvider>
  </React.StrictMode>
);
