import "./App.css";
import AboutUs from "./components/aboutus";
import { BackgroundBeamsDemo } from "./components/waitlist";
import { Testimonials } from "./components/testimonials";
import { Features } from "./components/features";
import { Team } from "./components/team";
import TrustedPartners from "./components/companies"

function App() {
  return (
    <main>
      <AboutUs />
      <Features />
      <TrustedPartners/>
      <Testimonials />
      <BackgroundBeamsDemo />
      <Team />
    </main>
  );
}

export default App;
