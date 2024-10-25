import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import LeftSidebar from "./LeftSider";
import Courses from "../Courses/Courses";

function Home() {
  return (
    <>
      <Header />
      <div className="bg-primary px-40 xl:px-20 lg:px-20 md:px-20 position-fixed">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Courses />
        <Contact />
        <Footer />
        <LeftSidebar />
      </div>
    </>
  );
}

export default Home;
