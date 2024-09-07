import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Stack from "./components/Stack.jsx";
import Queue from "./components/Queue.jsx";


function LocationSet(){
    const location=useLocation();
    return location.pathname==="/" ? (
      <div className="content_box">
        <Link to="/" id="content">
          Explore data structures with our Stack and Queue Visualizer!
          Interactively step through operations and see how elements are
          managed in real-time.
        </Link>
      </div>

    ):null;

}
function App() {
  return (
    <div className="App">
      <div className="navbar">
        <h1>Stack & Queue Visualizer</h1>
      </div>

      <div className="frame2">
        <Router>
          <div className="buttons">
            <Link to="/stack" className="btn">
              Stack
            </Link>
            <Link to="/queue" className="btn">
              Queue
            </Link>
          </div>
          <LocationSet/>
          
          <Routes>
            <Route path="/stack" element={<Stack />} />
            <Route path="/queue" element={<Queue />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
