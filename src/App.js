import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}
