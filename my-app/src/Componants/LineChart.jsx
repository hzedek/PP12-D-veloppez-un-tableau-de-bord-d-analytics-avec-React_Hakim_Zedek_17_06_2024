//import datas from "../mock.json";
import React, { useState } from "react";
import ApiCall from "./ApiCall";
import "../styles/LineTooltip.scss";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const LineTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="LineTooltip">
        <p
          className="tooltiptext"
          style={{ color: "black" }}
        >{`${payload[0].value}min`}</p>
      </div>
    );
  }

  return null;
};

const CustomLineChart = () => {
  const [datas, setDatas] = useState(null);

  const handleDataFetch = (data) => {
    setDatas(data);
  };

  if (!datas) {
    return <ApiCall prop="12/average-sessions" onDataFetch={handleDataFetch} />;
  }
  return (
    <div className="DivLineChart">
      <ResponsiveContainer
        style={{ backgroundColor: "#FF0101", borderRadius: "10px" }}
        width={258}
        height={263}
      >
        <p>Durée moyenne des sessions</p>
        <LineChart data={datas.sessions}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            style={{ fill: "#FFFFFF" }}
          />
          <YAxis domain={[-10, 100]} hide="true" />
          <Tooltip
            content={
              <LineTooltip /> //STyle the Tooltip
            }
          />
          <Line
            dot={false}
            type={"monotone"}
            stroke="white"
            radius={[20, 20, 0, 0]}
            dataKey="sessionLength"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
