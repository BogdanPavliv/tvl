"use client";
import Choose from "../../modules/MainPage/Choose";
import Countries from "../../modules/MainPage/Countries";
import About from "../../modules/MainPage/About";
import Offers from "../../modules/MainPage/Offers";
import Adventures from "../../modules/MainPage/Adventures";
import Features from "../../modules/MainPage/Features";
import Testimonials from "../../modules/MainPage/Testimonials";
import Blog from "../../modules/MainPage/Blog";
import Contact from "../../modules/MainPage/Contact";

const MainPage = () => {
  return (
    <main className="main">
      <Choose />
      <Countries />
      <About />
      <Offers />
      <Adventures />
      <Features />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
  );
};

export default MainPage;
