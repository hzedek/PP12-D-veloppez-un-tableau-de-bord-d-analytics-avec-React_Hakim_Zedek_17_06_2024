import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import UserProfile from "../Config/Data";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import "../styles/LineTooltip.scss";

const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"]; // day's letter

const LineTooltip = ({ active, payload, coordinate, onHover }) => {
  if (active && payload && payload.length) {
    // call function onHover with the mouse's CoordinateX
    onHover(coordinate.x);
    return (
      <div className="LineTooltip">
        <p className="tooltiptext" style={{ color: "black" }}>
          {`${payload[0].value} min`}
        </p>
      </div>
    );
  }

  return null;
};

const CustomLineChart = () => {
  const { id } = useParams();
  const [hoverPosition, setHoverPosition] = useState(null);
  const chartContainerRef = useRef(null);

  const handleMouseHover = (coordinateX) => {
    if (chartContainerRef.current) {
      const containerRect = chartContainerRef.current.getBoundingClientRect();
      // define the hover position
      setHoverPosition(coordinateX);
      console.log(
        "coordinateX:",
        coordinateX,
        "containerRect.left:",
        containerRect.left
      );
    }
  };

  const handleMouseLeave = () => {
    // delete the overlay when mouse if out of the graphic
    setHoverPosition(null);
  };

  return (
    <UserProfile
      id={id}
      dataType={"averageSession"}
      render={(userData) => {
        return (
          <div
            className="DivLineChart"
            ref={chartContainerRef}
            style={{ position: "relative" }}
            onMouseLeave={handleMouseLeave}
          >
            <ResponsiveContainer
              width={258}
              height={263}
              style={{ backgroundColor: "#FF0101", borderRadius: "10px" }}
            >
              <p>Durée moyenne des sessions</p>

              <LineChart data={userData.sessions}>
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  style={{ fill: "#FFFFFF" }}
                  tickFormatter={(tick) => daysOfWeek[tick - 1]} // display the first letter of the day on Xaxis
                />
                <YAxis domain={[-10, 100]} hide={true} />
                <Tooltip
                  content={<LineTooltip onHover={handleMouseHover} />}
                  cursor={{
                    stroke: "rgba(255, 255, 255, 0.5)",
                    strokeWidth: 2,
                  }}
                />
                <Line
                  dot={false}
                  type="monotone"
                  stroke="white"
                  radius={[20, 20, 0, 0]}
                  dataKey="sessionLength"
                />
              </LineChart>
            </ResponsiveContainer>
            {hoverPosition !== null && (
              <div
                className="overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: hoverPosition,
                  right: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  zIndex: 1,
                }}
              />
            )}
          </div>
        );
      }}
    />
  );
};

export default CustomLineChart;
