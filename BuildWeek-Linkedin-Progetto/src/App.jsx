import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Jobs from "./pages/Jobs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/account" element={<Account />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
