import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Categories from "./components/Categories";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
