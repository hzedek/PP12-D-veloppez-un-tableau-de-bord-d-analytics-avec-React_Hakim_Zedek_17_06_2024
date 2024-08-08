//import datas from "../mock.json";
import React from "react";
import { useParams } from 'react-router-dom'
import UserProfile from "../Config/Data";
import "../styles/RadarChart.scss";
import {
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  RadarChart,
  Radar,
} from "recharts";

const CustomRadarChart = () => {
  const { id } = useParams();

  return (
    <UserProfile id={id} dataType={"performance"} render={(userData) => {
      const kindMapping = userData.kind;
  const formattedKindMapping = Object.fromEntries(
    Object.entries(kindMapping).map(([key, value]) => [
      key,
      value.charAt(0).toUpperCase() + value.slice(1),
    ])
  );
  
  const radarData = userData.data.map((item) => ({
    kind: formattedKindMapping[item.kind],
    value: item.value,
  }));
  // Reverse the order of the data
  const reversedData = radarData.reverse();

  return (
    <div
      className="DivRadarChart"
      style={{
        backgroundColor: "#282D30",
        borderRadius: "10px",
        color: "white",
        height: "263px",
      }}
    >
      <ResponsiveContainer width={258}>
        <RadarChart data={reversedData}>
          <PolarGrid
            radialLines={false} //remove the line from the spider net
          />
          <PolarAngleAxis
            tick={{ fill: "white", fontSize: "10px" }}
            dataKey="kind"
          />
          <Radar
            style={{ width: "170px" }}
            name="User"
            dataKey="value"
            fill="#FF0101"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
    }}
    />
  )
};

export default CustomRadarChart;
