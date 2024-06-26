import "../styles/Cards.scss";
import icon1 from "../Assets/calories-icon.png";
import icon2 from "../Assets/protein-icon.png";
import icon3 from "../Assets/carbs-icon.png";
import icon4 from "../Assets/fat-icon.png";
import data from "../mock.json";
import React from "react";

function Cards() {
  const keyData = data[1].keyData;
  const caloriesData = `${keyData.calorieCount}kCal`;
  const proteineData = `${keyData.proteinCount}g`;
  const glucidesData = `${keyData.carbohydrateCount}g`;
  const lipidesData = `${keyData.lipidCount}g`;

  console.log(keyData);
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
}

export default Cards;
