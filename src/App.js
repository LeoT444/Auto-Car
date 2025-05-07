import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from "./App.css";

import Menu from "./components/menu";
import Products from "./components/products";
import Register from './components/register';

export const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<>
            <Menu />
            <Products />
          </>} />
          <Route path="/cadastro" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App