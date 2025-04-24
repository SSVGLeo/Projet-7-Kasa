import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./utils/styles/styles.css";

// Importation of global elements
import Header from "./components/Header/";
import Footer from "./components/Footer/";

// Importation of the Home page
import Home from "./pages/Home/";
import Error from "./pages/Error/";
import Appartement from "./pages/Appartement/";
import About from "./pages/About/";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Appartement/:id" element={<Appartement />} />
        <Route path="/Apropos" element={<About />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
