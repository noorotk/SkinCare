import { Fragment } from "react";
import "./App.css";
import Backdrop from "./components/backdrop/Backdrop";
import { useState } from "react";
import Hero from "./components/hero/hero";
import Nav from "./components/nav/nav";
import FeaturesSection from "./components/featuresSection/featuresSection";
import Footer from "./components/footer/footer";
import Shop from "./components/Shop/Shop";
import Container from "./components/ClientsSection/container";
import Modal from "./components/Modal/Modal";
import products from "./components/Shop/shopProducts/products";
function App() {
  const [sideDrawer, setsideDrawer] = useState(false);
  const [ShowModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const opensideDrawer = () => {
    setsideDrawer(true);
  };
  const closesideDrawer = () => {
    setsideDrawer(false);
  };

  /////////////////////////
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    console.log(product);
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  return (
    <Fragment>
      <Modal cartItems={cartItems} show={ShowModal} close={closeModal}></Modal>
      <Backdrop show={sideDrawer} close={closesideDrawer} />
      <div className="interFace">
        <Nav open={sideDrawer} show={opensideDrawer} showModal={openModal} />
      </div>
      <Hero onAdd={onAdd} />

      <FeaturesSection />
      <Shop onAdd={onAdd} />
      <Container />
      <Footer />
    </Fragment>
  );
}

export default App;
