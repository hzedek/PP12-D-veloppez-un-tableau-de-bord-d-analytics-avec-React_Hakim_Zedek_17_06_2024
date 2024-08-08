//import datas from "../mock.js";
import React from "react";
import UserProfile from "../Config/Data";
import { useParams } from 'react-router-dom'
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import "../styles/RadialBarChart.scss";

// Custom Legend
const renderLegend = ({ payload }) => {
  return (
    <p>
      <span className="legend-value">{payload[0].value}%</span>
      <br />
      de votre
      <br />
      objectif
    </p>
  );
};

const CustomRadialBarChart = () => {
  const { id } = useParams();

  return (
    <UserProfile id={id} dataType={"userInfos"} render={(userData) => {
  //formatted data for RadialBarChart
  const radialBarData = [
    {
      name: userData.todayScore * 100,
      value: userData.todayScore * 100,
      fill: "red",
      fontSize: "26px",
    },
  ];
  return (
    <div
      className="DivRadialBarChart"
      style={{
        backgroundColor: "#FBFBFB",
        borderRadius: "10px",
        color: "#74798C",
        width: "258px",
        height: "263px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p className="pRadialBarChart">Score</p>
      <ResponsiveContainer width={258} height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="80%"
          barSize={10}
          data={radialBarData}
          startAngle={90}
          endAngle={450}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background
            dataKey="value"
            cornerRadius={10}
            angleAxisId={0}
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            align="center"
            content={renderLegend}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
      }}
      />
    )}

export default CustomRadialBarChart;
