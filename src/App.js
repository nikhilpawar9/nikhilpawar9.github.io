import React from "react";

import "./styles.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero/>
    </div>
  );
}
