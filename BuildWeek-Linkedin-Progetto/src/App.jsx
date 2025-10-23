import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainHome from "./components/MainHome";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainhome" element={<MainHome />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
