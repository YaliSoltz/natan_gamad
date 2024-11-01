import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Box from "./box.jsx";
import TextProvider from "../textContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TextProvider>
      <Box />
    </TextProvider>
  </React.StrictMode>
);
