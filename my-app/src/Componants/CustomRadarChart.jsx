//import datas from "../mock.json";
import React, { useState } from "react";
import ApiCall from "./ApiCall";
import "../styles/RadarChart.scss";
import {
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  RadarChart,
  Radar,
} from "recharts";

const CustomRadarChart = () => {
  const [datas, setDatas] = useState(null);

  const handleDataFetch = (data) => {
    setDatas(data);
  };

  if (!datas) {
    return <ApiCall prop="12/performance" onDataFetch={handleDataFetch} />;
  }

  const kindMapping = datas.kind;

  const formattedKindMapping = Object.fromEntries(
    Object.entries(kindMapping).map(([key, value]) => [
      key,
      value.charAt(0).toUpperCase() + value.slice(1),
    ])
  );

  const radarData = datas.data.map((item) => ({
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
};

export default CustomRadarChart;
