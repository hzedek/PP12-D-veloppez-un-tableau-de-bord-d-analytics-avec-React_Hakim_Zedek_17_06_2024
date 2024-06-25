import NavVertical from "./Componants/NavVertical";
import Greeting from "./Componants/Greeting";
import ChartsLayout from "./Componants/ChartsLayout"
import "./styles/PageLayout.scss"

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
