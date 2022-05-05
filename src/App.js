import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Views/Home/Home";
import About from "./Views/About/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
