import React from "react";
import "./App.css";
import { Hero } from "./sections/hero";
import { Main } from "./sections/main";
import { Footer } from "./sections/footer";

export const App = () => {
  console.log();
  return (
      <>
        <Hero />
        <Main />
        <Footer />
      </>
      
  );
};