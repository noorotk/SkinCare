import { Fragment } from "react";
import "./App.css";
import Hero from "./components/hero/hero";
import Nav from "./components/nav/nav";

function App() {
  return (
    <Fragment>
      <div className="interFace">
        <Nav />
      </div>
      <Hero />
    </Fragment>
  );
}

export default App;
