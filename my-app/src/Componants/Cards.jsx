import "../styles/Cards.scss";
import icon1 from "../Assets/calories-icon.png";
import icon2 from "../Assets/protein-icon.png";
import icon3 from "../Assets/carbs-icon.png";
import icon4 from "../Assets/fat-icon.png";
// import data from "../Config/mock.js";
import React from "react";
import UserProfile from "../Config/Data";
import { useParams } from "react-router-dom";

function Cards() {
  const { id } = useParams();

  return (
    <UserProfile
      id={id}
      dataType={"userInfos"}
      render={(userData) => {
        const keyData = userData.keyData;
        const caloriesData = `${keyData.calorieCount}kCal`;
        const proteineData = `${keyData.proteinCount}g`;
        const glucidesData = `${keyData.carbohydrateCount}g`;
        const lipidesData = `${keyData.lipidCount}g`;

        return (
          <div className="CardsLayout">
            <div className="divCard">
              <img src={icon1} alt="icon" />
              <div className="divCardText">
                <p>{caloriesData}</p>
                <p>Calories</p>
              </div>
            </div>
            <div className="divCard">
              <img src={icon2} alt="icon" />
              <div className="divCardText">
                <p>{proteineData}</p>
                <p>Proteines</p>
              </div>
            </div>
            <div className="divCard">
              <img src={icon3} alt="icon" />
              <div className="divCardText">
                <p>{glucidesData}</p>
                <p>Glucides</p>
              </div>
            </div>
            <div className="divCard">
              <img src={icon4} alt="icon" />
              <div className="divCardText">
                <p>{lipidesData}</p>
                <p>Lipides</p>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}

export default Cards;
