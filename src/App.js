import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

function App() {
  return (
    <BrowserRouter>
      <div className="App">App.js</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/diary" element={<Diary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
