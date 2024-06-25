import datas from "../mock.json";
import React from "react";
import "../styles/RadarChart.scss";
import {
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  RadarChart,
  Radar,
} from "recharts";

const CustomRadarChart = () => {
  return (
    <div className="DivRadarChart">
      <ResponsiveContainer
        style={{ backgroundColor: "#FF0101", borderRadius: "10px" }}
        width={258}
        height={263}
      >
        <p>Durée moyenne des sessions</p>
        <RadarChart data={datas[1].averagesessions}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            style={{ fill: "#FFFFFF" }}
          />
          <YAxis domain={[-10, 100]} hide="true" />
          <Radar
            dot={false}
            type={"monotone"}
            stroke="white"
            radius={[20, 20, 0, 0]}
            dataKey="sessionLength"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomRadarChart;
