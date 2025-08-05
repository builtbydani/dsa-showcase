// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ArrayPage from "./pages/ArrayPage.jsx";
import StackQueuePage from "./pages/StackQueuePage";
import LinkedListPage from "./pages/LinkedListPage";
import BSTPage from "./pages/BSTPage";
import GraphPage from "./pages/GraphPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/array" element={<ArrayPage />} />
        <Route path="/stackqueue" element={<StackQueuePage />} />
        <Route path="/linkedlist" element={<LinkedListPage />} />
        <Route path="/bst" element={<BSTPage />} />
        <Route path="/graphs" element={<GraphPage />} />
      </Routes>
    </Router>
  );
}

