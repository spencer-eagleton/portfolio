import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./Views/About/About";
import Header from "./Components/Header/Header";
import Projects from "./Views/Projects/Projects";
import { AnimatePresence } from "framer-motion";
import Resourcery from "./Views/Resourery/Resourcery";
import Friends from "./Views/Friends/Friends";
import Yahfood from "./Views/Yahfood/Yahfood";
import Contact from "./Views/Contact/Contact";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="App">
        <Header />
        <AnimatePresence>
          <Routes location={location} key={location.key}>
            {/* <Route path="/"/> */}
            <Route path="/" element={<About />} />
            <Route path="/projects/*" element={<Projects />}>
              <Route path="resourcery" element={<Resourcery />} />
              <Route path="friends" element={<Friends />} />
              <Route path="yahfood" element={<Yahfood />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
