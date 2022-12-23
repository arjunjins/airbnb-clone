import { useState } from "react";
import "./App.css";
import image from "./assets/image-12.png";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card
        img={image}
        rating="5.0"
        reviewCount={6}
        country="France"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;
