import React from "react";
import NavVertical from "./Componants/NavVertical";
import "./styles/PageLayout.scss";
import ChartsLayout from "./Componants/ChartsLayout";
import Greeting from "./Componants/Greeting";

function App() {
  return (
      <div className="PageLayout">
        <NavVertical />
        <div className="DivPageLayout">
          <Greeting />
          <ChartsLayout />
        </div>
      </div>
  );
}

export default App;
