import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Views/About/About";
import Header from "./Components/Header/Header";
import Projects from "./Views/Projects/Projects";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
