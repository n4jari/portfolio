import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import { BrowserRouter } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProSidebarProvider>
    <BrowserRouter basename="portfolio">
      <App />
    </BrowserRouter>
  </ProSidebarProvider>
);
