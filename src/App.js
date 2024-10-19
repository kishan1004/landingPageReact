import "./App.css";
import CursorBlur from "./components/GlowingCursor";
import Home from "./components/Home";
import Slide from "./components/Slide";
import Newproduct from "./components/Newproduct";
import Offer from "./components/Offer";
import Seasontrending from "./components/Seasontrending";
import Feature from "./components/Feature";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Topbar from "./components/TopBar";

function App() {
  return (
    <div className="App w-screen overflow-hidden">
      <CursorBlur />
      <Topbar />
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
