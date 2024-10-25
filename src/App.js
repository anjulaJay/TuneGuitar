

import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About.js";
import Detailing from "./pages/Detailing";
import Previous from "./pages/Previous";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/detailing" element={<Detailing/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/previous" element={<Previous/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}