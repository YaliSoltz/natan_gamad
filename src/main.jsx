import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import TextProvider from "./context/textContext";
import App from "./components/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TextProvider>
      <App />
    </TextProvider>
  </React.StrictMode>
);
