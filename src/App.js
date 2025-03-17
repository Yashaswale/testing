import "./App.css";
import AboutUs from "./components/aboutus";
import { GridBackgroundDemo } from "./components/home";
import { BackgroundBeamsDemo } from "./components/waitlist";
import { Testimonials } from "./components/testimonials";
import { Features } from "./components/features";
import { Team } from "./components/team";

function App() {
  return (
    <main>
      <GridBackgroundDemo />
      <AboutUs />
      <Features />
      <Testimonials />
      <Team />
      <BackgroundBeamsDemo />
    </main>
  );
}

export default App;
