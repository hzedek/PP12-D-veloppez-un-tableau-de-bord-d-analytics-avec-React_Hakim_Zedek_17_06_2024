import React, { useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";
import ApiCall from "./ApiCall";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <p style={{ margin: 0 }}>{`${payload[1].value}kg`}</p>
        <p style={{ margin: 0 }}>{`${payload[0].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};

const CustomBarChart = () => {
  const [datas, setDatas] = useState(null);

  const handleDataFetch = (data) => {
    setDatas(data);
  };
  
  if (!datas) {
    return <ApiCall prop="12/activity" onDataFetch={handleDataFetch} />;
  }


  const kgArray = datas.sessions.map(session => session.kilogram);
  const maxValue = Math.max(...kgArray);
  const minValue = Math.min(...kgArray);
  const midValue = (maxValue + minValue) / 2;

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        data={datas.sessions}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        barSize={7}
      >
        <CartesianGrid
          strokeDasharray="2"
          vertical={false}
          horizontalPoints={[10, midValue]}
        />
        <XAxis
          dataKey="day"
          tickFormatter={(DD) => {
            const date = new Date(DD);
            return date.getDate();  // change the date format to DD
          }}
          tickLine={false}
        />
        <YAxis hide="true" yAxisId="left" orientation="left" />
        <YAxis
          yAxisId="right"
          domain={[minValue - 1, maxValue + 3]}
          orientation="right"
          axisLine={false}
          tickLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          radius={[20, 20, 0, 0]}
          dataKey="calories"
          yAxisId="left"
          name="Kcal"
        />
        <Bar
          radius={[20, 20, 0, 0]}
          dataKey="kilogram"
          fill="#E60000"
          yAxisId="right"
          name="kg"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
