import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Category from "./pages/Category";
import Favorites from "./pages/Favorites";
import Chat from "./pages/Chat";
import User from "./pages/User";

import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/category" element={<Category />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
