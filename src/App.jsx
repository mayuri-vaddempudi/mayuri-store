import { useState } from "react";
import Head from "./components/Head";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Head />
      <Hero />
    </>
  );
}

export default App;
