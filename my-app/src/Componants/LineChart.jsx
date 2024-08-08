//import datas from "../mock.json";
import React from "react";
import UserProfile from "../Config/Data";
import { useParams } from "react-router-dom";

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
  const { id } = useParams();
  return (
    <UserProfile
      id={id} dataType={"averageSession"} render={(userData) => {
        return(
        <div className="DivLineChart">
          <ResponsiveContainer
            style={{ backgroundColor: "#FF0101", borderRadius: "10px" }}
            width={258}
            height={263}
          >
            <p>Durée moyenne des sessions</p>
            <LineChart data={userData.sessions}>
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
                cursor={false}
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
        </div>)
  }}
    />
  )
};

export default CustomLineChart;
