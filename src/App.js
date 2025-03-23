import React from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Skills from "./components/Skills";  // <-- 새로 만든 컴포넌트 불러오기
import Projects from "./components/Projects";  // <-- 새로 만든 컴포넌트 불러오기
import Experience from "./components/Experience";  // <-- 새로 만든 컴포넌트 불러오기
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
