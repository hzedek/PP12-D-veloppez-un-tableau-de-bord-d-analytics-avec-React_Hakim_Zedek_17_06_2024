import { Fragment } from "react";
import data from "../mock.json";

function Greeting() {
  const name = data[0].userInfos.firstName;
  return (
    <Fragment> 
      <h2>Bonjour <span className="redSpan">{name}</span></h2>
      <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
    </Fragment>
  );
}
export default Greeting;
