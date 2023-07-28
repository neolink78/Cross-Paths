import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Category from "./pages/Category";
import Favorites from "./pages/Favorites";
import Chat from "./pages/Chat";
import User from "./pages/User";

import "./App.css";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("à la recherche de l'amour")


  return (
    <div className="App">
      <main>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search selectedCategory={selectedCategory} />} />
          <Route path="/category" element={<Category setSelectedCategory={setSelectedCategory}/>} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </main>
    </div>
  );
};
