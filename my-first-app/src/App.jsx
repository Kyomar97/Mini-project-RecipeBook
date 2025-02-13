import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ItemsList from "./pages/ItemsList";
import ItemDetails from "./pages/ItemDetails";
import CreateItem from "./pages/CreateItem";
import UpdateItem from "./pages/UpdateItem";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<ItemsList />} />
              <Route path="/item/:id" element={<ItemDetails />} />
              <Route path="/create" element={<CreateItem />} />
              <Route path="/update/:id" element={<UpdateItem />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
