import Mk2 from "./pages/Mk2";
import Mk1 from "./pages/Mk1";
import About from "./pages/About";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Mk2 />} />
            <Route path="/mk1" element={<Mk1 />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
