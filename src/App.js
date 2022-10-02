import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
// import Blog from "./Components/Blog";
// import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Service from "./Components/Service";
// import { useState } from "react";

function App() {
  // const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      {/* <Background setIsOpened={setIsOpened} show={isOpened} /> */}
      <Navbar  />
      {/* <Sidebar show={isOpened} setIsOpened={setIsOpened} /> */}
      <Header />
      <Service />
      <About />
      {/* <Blog />
      <Footer /> */}
    </div>
  );
}

export default App;

// toggleMenu={setIsOpened}