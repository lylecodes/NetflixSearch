import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Home";
import Department from "./Department";
import Employee from "./Employee";
import Navigation from "./Navigation";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h3 className="m-3 d-flex justify-content-center">MovieGet</h3>

        <Navigation />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/department" element={<Department />} />
          {/* <Route path="/employee" element={<Employee />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
