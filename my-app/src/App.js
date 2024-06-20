import NavVertical from "./Componants/NavVertical";
import { Fragment } from "react";
import Greeting from "./Componants/Greeting";
import "./styles/PageLayout.scss"

function App() {
  return (
    <Fragment>
      <div className="PageLayout">
        <NavVertical />
        <div>
          <Greeting />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
