import { Fragment } from "react";
import "./App.css";
import Backdrop from "./components/backdrop/Backdrop";
import { useState } from "react";
import Hero from "./components/hero/hero";
import Nav from "./components/nav/nav";
import FeaturesSection from "./components/featuresSection/featuresSection";
import Footer from "./components/footer/footer";
import Shop from "./components/Shop/Shop";
function App() {
  const [sideDrawer, setsideDrawer] = useState(false);

  const opensideDrawer = () => {
    setsideDrawer(true);
  };
  const closesideDrawer = () => {
    setsideDrawer(false);
  };

  return (
    <Fragment>
      <Backdrop show={sideDrawer} close={closesideDrawer} />
      <div className="interFace">
        <Nav open={sideDrawer} show={opensideDrawer} />
      </div>
      <Hero />

      <FeaturesSection />
      <Shop />
      <Footer />
    </Fragment>
  );
}

export default App;
