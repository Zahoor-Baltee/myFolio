import React from "react";
import Drawer from "./pages/drawer";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<Drawer/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
