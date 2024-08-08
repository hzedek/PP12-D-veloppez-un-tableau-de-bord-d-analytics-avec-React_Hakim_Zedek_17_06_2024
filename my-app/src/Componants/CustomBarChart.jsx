import React from "react";
import UserProfile from "../Config/Data";
import { useParams } from 'react-router-dom'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <p style={{ margin: 0 }}>{`${payload[1].value}Kcal`}</p>
        <p style={{ margin: 0 }}>{`${payload[0].value}kg`}</p>
      </div>
    );
  }

  return null;
};

const CustomBarChart = () => {
  const { id } = useParams();

  return (
    <UserProfile id={id} dataType={"activity"} render={(userData) => {
      const kgArray = userData.sessions.map(session => session.kilogram);
      const maxValue = Math.max(...kgArray);
      const minValue = Math.min(...kgArray);
      const midValue = (maxValue + minValue) / 2;
      console.log(userData.sessions,"les données",userData);
      return (
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            data={userData.sessions}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            barSize={7}
          >
            <CartesianGrid
              strokeDasharray="2"
              vertical={false}
              horizontalPoints={[10, midValue]}
            />
            <XAxis
              dataKey={"day"}
              tickFormatter={(DD) => {
                const date = new Date(DD);
                return date.getDate();  // change the date format to DD
              }}
              tickLine={false}
            />
            <YAxis hide="true" yAxisId="right" orientation="left" />
            <YAxis
              yAxisId="left"
              domain={[minValue - 1, maxValue + 3]}
              orientation="right"
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              radius={[20, 20, 0, 0]}
              dataKey="kilogram"
              yAxisId="left"
              name="kg"
            />
            <Bar
              radius={[20, 20, 0, 0]}
              dataKey="calories"
              fill="#E60000"
              yAxisId="right"
              name="Kcal"
            />
          </BarChart>
        </ResponsiveContainer>
      );
    }} />
  );
};

export default CustomBarChart;