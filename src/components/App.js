import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return <div>{/*{code here}*/}
  <NavBar />
  <Switch>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/directors">
      <Directors />
      <Route path="/actors">
        <Actors />
        <Route path="/movies">
          <Movies />
        </Route>
      </Route>
    </Route>
  </Switch>
  </div>;
}

export default App;
