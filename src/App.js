import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <>
      <header>
        <a href="/">Home</a>
        <a href="/gallery">Gallery</a>
        <a href="/about">AboutUs</a>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
