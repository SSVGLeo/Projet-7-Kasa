import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./utils/styles/styles.css";

// Importation of global elements
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";

// Importation of the Home page
import Home from "./pages/Home/index.jsx";
import Error from "./pages/Error/index.jsx";
import Appartement from "./pages/AppartementCard/index.jsx";
import About from "./pages/About/index.jsx";

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
