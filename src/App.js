import { Fragment } from "react";
import "./App.css";
import Backdrop from "./components/backdrop/Backdrop";
import { useState } from "react";
import Hero from "./components/hero/hero";
import Nav from "./components/nav/nav";

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

      <button className="ShopBtn">Shop</button>
    </Fragment>
  );
}

export default App;
