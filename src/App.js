import "./App.css";
// import GlowingCursor from "./components/GlowingCursor";
import Home from "./components/Home";
import Slide from "./components/Slide";
import Newproduct from "./components/Newproduct";
import Offer from "./components/Offer";
import Seasontrending from "./components/Seasontrending";
import Feature from "./components/Feature";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <GlowingCursor /> */}
      <Home />
      <Slide />
      <Newproduct />
      <Offer />
      <Seasontrending />
      <Feature />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
