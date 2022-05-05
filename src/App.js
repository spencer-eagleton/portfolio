import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
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
