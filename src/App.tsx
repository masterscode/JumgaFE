import React from "react";
import Auth from "./pages/auth/Auth";
import Header from "./pages/partials/Header";
import Footer from "./pages/partials/Footer";
import Home from "./pages/Home";
import "./pages/css-in-js/style.css"
import Cart from "./pages/Cart";

const App = () => {
  return (
    <>
      <Header />
      {/* <Auth /> */}
      {/* <Home /> */}
      <Cart/>
      <Footer />
    </>
  );
};

export default App;
