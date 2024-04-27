import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Delivered from "./components/Delivered";
import { FooterWithLogo } from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Delivered />
      <FooterWithLogo />
    </div>
  );
};

export default App;
