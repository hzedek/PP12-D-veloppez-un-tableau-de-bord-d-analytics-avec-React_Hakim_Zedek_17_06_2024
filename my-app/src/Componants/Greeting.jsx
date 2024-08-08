import React, {Fragment} from "react";
import { useParams } from 'react-router-dom'
import UserProfile from "../Config/Data";


const Greeting = () => {
  const { id } = useParams()

  return (
    <UserProfile id={id} dataType={"userInfos"} render={(userData) => (
      <Fragment>
        <h2>
          Bonjour <span className="redSpan">{userData.userInfos.firstName}</span>
        </h2>
        <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
      </Fragment>
    )} />
  );

}

export default Greeting;