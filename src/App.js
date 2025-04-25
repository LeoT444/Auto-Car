import React from "react";
import styles from "./App.css";

import Menu from "./components/menu";
import Products from "./components/products";

export const App = () => {
  return (
    <div className={styles.container}>

      <Menu></Menu>
      <Products></Products>

    </div>
  );
}
export default App