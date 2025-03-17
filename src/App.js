import "./App.css";
import AboutUs from "./components/aboutus";
import { GridBackgroundDemo } from "./components/home";
import { BackgroundBeamsDemo } from "./components/waitlist";
import { Testimonials } from "./components/testimonials";

function App() {
  return (
    <main>
      <GridBackgroundDemo />
      <AboutUs />
      <Testimonials />
      <BackgroundBeamsDemo />
    </main>
  );
}

export default App;
