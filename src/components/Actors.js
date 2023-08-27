import React from "react";
import { actors } from "../data";

  function Actors() {
    return (
      <div>
        <h1>Actors Page</h1>
        <div>
          <h2>Benedict Cumberbatch</h2>
          <ul>
            <li>Doctor Strange</li>
            <li>The Imitation Game</li>
            <li>Black Mass</li>
          </ul>
        </div>
        <div>
          <h2>Justin Timberlake</h2>
          <ul>
            <li>Trolls</li>
            <li>Friends with Benefits</li>
            <li>The Social Network</li>
          </ul>
        </div>
        <div>
          <h2>Anna Kendrick</h2>
          <ul>
            <li>Pitch Perfect</li>
            <li>Into The Woods</li>
          </ul>
        </div>
      </div>
    );
  }

export default Actors;
