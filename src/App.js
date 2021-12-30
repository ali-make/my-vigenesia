import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Home />
      </Container>
    </BrowserRouter>
  );
};

export default App;
