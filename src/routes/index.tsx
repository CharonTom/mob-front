// src/routes/index.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Reservation from "../pages/Reservation";
import Contact from "../pages/Contact";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="reservation" element={<Reservation />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  </Routes>
);

export default AppRoutes;
