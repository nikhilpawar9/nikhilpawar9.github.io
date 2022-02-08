import React from "react";

import "./styles.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Intro from "./components/intro/Intro";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Intro />
      <Footer/>
    </div>
  );
}
