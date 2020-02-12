import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

// import all the pages
import Home from "./pages/home";
import Locations from "./pages/locations";
import AboutUs from "./pages/about";
import SingleLocation from "./pages/singleLocation";

// import all the components
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Error from "./pages/error";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/locations/" component={Locations} />
        <Route exact path="/locations/:slug" component={SingleLocation} />
        <Route exact path="/About/" component={AboutUs} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
