import "../styles/ChartsLayout.scss";
import CustomBarChart from "./CustomBarChart";
import CustomLineChart from "./LineChart";
import CustomRadarChart from "./CustomRadarChart";
import CustomRadialBarChart from "./RadialBarChart";
import Cards from "./Cards";
import React from "react";

function ChartsLayout() {
  return (
    <div  className="DivAsideLayout">
      <aside className="AsideChartsLayout">
        <div className="TextLayout">
          <p>Activité quotidienne</p>
          <ul>
            <li>Poids (kg)</li>
            <li>
              <span className="ul_span">Calories brûlées (kCal)</span>
            </li>
          </ul>
        </div>
        <CustomBarChart />
        <div className="DivChartsLayout">
          <CustomLineChart />
          <CustomRadarChart />
          <CustomRadialBarChart />
        </div>
      </aside>
      <aside>
        <Cards/>
      </aside>
    </div>
  );
}
export default ChartsLayout;
