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




const kindMapping = datas[1].kind;

const formattedKindMapping = Object.fromEntries(
  Object.entries(kindMapping).map(([key, value]) => [
    key,
    value.charAt(0).toUpperCase() + value.slice(1),
  ])
);

const radarData = datas[1].data.map((item) => ({
  kind: formattedKindMapping[item.kind],
  value: item.value,
}));

// Reverse the order of the data
const reversedData = radarData.reverse();

const CustomRadarChart = () => {
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
          <PolarGrid polarGridType="circle" />
          <PolarAngleAxis tick={{ fill: 'white',fontSize: "10px"}} dataKey="kind" />
          <PolarRadiusAxis  axisLine={false} tick={false} />
          <Radar style={{width:"170px"}} name="User" dataKey="value" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomRadarChart;
