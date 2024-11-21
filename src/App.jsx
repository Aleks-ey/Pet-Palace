import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppBuilder } from "@aleks-ey/dynamic-app-builder";
import "./App.css";

// import header and footer configs
import headerConfig from "./globalConfigs/HeaderConfig";
import footerConfig from "./globalConfigs/FooterConfig";

// import pages
import Home from "./pages/Home";
import Contact from "./pages/About";

function App() {
  // header and footer configs should be made here or imported from a file, default configs are imported from globalConfigs folder
  // const headerConfig = {}; or import headerConfig from "./HeaderConfig";
  // const footerConfig = {}; or import footerConfig from "./FooterConfig";

  return (
    <Router>
      <AppBuilder config={headerConfig} />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <AppBuilder config={footerConfig} />
    </Router>
  );
}

export default App;
