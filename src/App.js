import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./Views/About/About";
import Header from "./Components/Header/Header";
import Projects from "./Views/Projects/Projects";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="App">
        <Header />
        <AnimatePresence>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
