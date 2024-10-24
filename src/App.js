/* eslint-disable react/jsx-pascal-case */

import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About_us from "./pages/About_us";
import Detailing_service from "./pages/Detailing_service";
import Previous_projects from "./pages/Previous_projects";
import Shop from "./pages/Shop";
import Contact_us from "./pages/Contact_us";

export default function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About_us/>}></Route>
        <Route path="/detailing_service" element={<Detailing_service/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/previous_projects" element={<Previous_projects/>}></Route>
        <Route path="/contact_us" element={<Contact_us/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}