//import data from "../mock.json";
import "../styles/ChartsLayout.scss";
import CustomBarChart from "./CustomBarChart";
import CustomLineChart from "./LineChart";
import CustomRadarChart from "./CustomRadarChart";
import React from "react";

function ChartsLayout() {
  return (
    <aside className="ChartsLayout">
      <div className="TextLayout">
        <p>Activité quotidienne</p>
        <ul>
          <li>Poids (kg)</li>
          <li>
            <span>Calories brûlées (kCal)</span>
          </li>
        </ul>
      </div>
      <CustomBarChart />
      <CustomLineChart />
      <CustomRadarChart />
    </aside>
  );
}
export default ChartsLayout;
