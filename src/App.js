import "./App.css";
import AboutUs from "./components/HeroSection";
import { BackgroundBeamsDemo } from "./components/waitlist";
import { Testimonials } from "./components/testimonials";
import { Features } from "./components/features";
import { Team } from "./components/team";
import TrustedPartners from "./components/companies";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar";

function App() {
  return (
    <main>
      <Navbar/>
      <HeroSection />
      <Features />
      <TrustedPartners/>
      <Testimonials />
      <BackgroundBeamsDemo />
      <Team />
    </main>
  );
}

export default App;
