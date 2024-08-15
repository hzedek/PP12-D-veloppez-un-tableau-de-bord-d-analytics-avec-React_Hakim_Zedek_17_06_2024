import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import Header from "./Componants/Header";
import Error404 from "./Erreur/error";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
    <Header/>
    <Routes>
      <Route path="/user/:id" element={<App />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    </Router>
  </React.StrictMode>
);
