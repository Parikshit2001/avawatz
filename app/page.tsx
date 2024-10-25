import React from "react";
import Navbar from "./components/Nabbar/Navbar";
import Hero from "./components/Hero/Hero";
import News from "./components/News/News";
import Content from "./components/Content/Content";

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <News />
      <Content />
    </div>
  );
}

export default page;
