//import datas from "../mock.json";
import React, { useState, Fragment  } from "react";
import ApiCall from "./ApiCall";

function Greeting() {
  const [datas, setDatas] = useState(null);

  const handleDataFetch = (data) => {
    setDatas(data);
  };

  if (!datas) {
    return <ApiCall prop="12" onDataFetch={handleDataFetch} />;
  }
  const name = datas.userInfos.firstName;
  return (
    <Fragment>
      <h2>
        Bonjour <span className="redSpan">{name}</span>
      </h2>
      <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
    </Fragment>
  );
}
export default Greeting;
