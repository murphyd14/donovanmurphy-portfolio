import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Modal from "./components/Modal";

function ModalRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  // Only show modal for these paths
  const modalPaths = [
    "/about",
    "/experience",
    "/projects",
    "/resume",
    "/contact",
  ];
  const isModal = modalPaths.includes(location.pathname);

  return (
    <>
      <Hero />
      <Modal open={isModal} onClose={() => navigate("/")}>
        <Routes location={isModal ? location : { pathname: "/__none__" }}>
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Modal>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="font-sans bg-black text-white w-screen h-screen min-h-0 max-h-screen overflow-hidden overflow-x-hidden relative">
        <Routes>
          <Route path="/*" element={<ModalRoutes />} />
        </Routes>
      </div>
      <style jsx global>{`
        html,
        body {
          overflow: hidden !important;
          overflow-x: hidden !important;
          overflow-y: hidden !important;
        }
      `}</style>
    </Router>
  );
}

export default App;
