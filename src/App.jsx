import React from "react";
import { createRoot } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Reference from "./pages/Reference";
import Home from "./pages/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ref" element={<Reference />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
