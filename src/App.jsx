import React from "react";
import Navbar from "./Components/Common/Navbar";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
function app() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default app;
