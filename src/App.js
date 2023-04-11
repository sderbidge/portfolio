import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Character from "./components/Character"
import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import './App.css'
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Character />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
