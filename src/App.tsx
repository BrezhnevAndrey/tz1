import "normalize.css";
import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Authorization } from "./components/Authorization/Authorization";
import { Content } from "./components/Content/Content";
import { UserPage } from "./components/UserPage/UserPage";

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/auth" element={<Authorization />} />
        <Route path="/page" element={<Content />} />
        <Route path="/" element={<Navigate to="/auth" replace />} />
        <Route path="/user/:id" element={<UserPage />} />
      </Routes>
    </HashRouter>
  );
}
