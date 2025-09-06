import Header from "./components/Header";
import Home from "./components/Home";
import ChatButton from "./components/ChatButton";
import SampleNumbers from "./components/SampleNumbers";
import Footer from "./components/Footer";
import Speakers from "./components/Speakers";
import Services from "./components/Services";
import HurdlesMarquee from "./components/HurdlesMarquee";
import "./index.css";
import AboutRace from "./components/AboutRace";
import Hurdles from "./components/Hurdles";
import AlphabetGallery from "./components/AlphabetGallery";
import Project from "./components/Project";
import NumbersShowcase from "./components/NumbersShowcase";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <SampleNumbers />
      <NumbersShowcase />
      <Services />
      <HurdlesMarquee />
      <AboutRace />
      <Hurdles />
      <Project />
      <AlphabetGallery />
      <Speakers />
      <Footer />
      <ChatButton />
    </div>
  );
}
export default App;