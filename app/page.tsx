import React from "react";
import Navbar from "./components/Nabbar/Navbar";
import Hero from "./components/Hero/Hero";
import News from "./components/News/News";

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <News />
    </div>
  );
}

export default page;
