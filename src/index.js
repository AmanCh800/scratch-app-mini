import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import "tailwindcss/tailwind.css";

console.log("hi");

const root = createRoot(document.getElementById("root"));

root.render(<App />);
