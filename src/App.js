import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Actions from "./components/Actions";
import Gallery from "./components/Gallery";
import Commitment from "./components/Commitment";
import Quiz from "./components/Quiz";
import About from "./components/About";
import Footer from "./components/Footer";
import Infografis from "./components/Infografis";

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Navbar />
      <Hero />
      <Education />
      <Infografis />
      <Actions />
      <Gallery />
      <Commitment />
      <Quiz />
      <About />
      <Footer />
    </div>
  );
}
