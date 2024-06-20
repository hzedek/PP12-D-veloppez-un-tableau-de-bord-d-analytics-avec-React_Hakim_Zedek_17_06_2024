import { Fragment } from "react";
import data from "../mock.json";

function Greeting() {
  const name = data[0].userInfos.firstName;
  return (
    <Fragment>
      <h2>Bonjour {name}</h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </Fragment>
  );
}
export default Greeting;
