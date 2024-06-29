//import datas from "../mock.json";
import React from "react";
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

let datas = ApiCall("12/activity")
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip">
          <p style={{ margin: 0 }}>{ `${payload[1].value}kg`}</p>
          <p style={{ margin: 0 }}>{` ${payload[0].value}Kcal`}</p>
        </div>
      );
    }
  
    return null;
  };
  

const CustomBarChart = () => {
  function KgArray() {
    let KgArray = [];
    for (let i = 0; i < datas[1].sessions.length; i++) {
        const element = datas[1].sessions[i];
        KgArray.push(element.kilogram)
  }
    return KgArray;
  }

    // Définir les positions des lignes horizontales (en valeurs Y)
    const maxValue = Math.max(...KgArray());
    const minValue = Math.min(...KgArray())
    const midValue = (maxValue + minValue)/ 2;
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        data={datas[1].sessions}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        barSize={7}
      >
        <CartesianGrid strokeDasharray="2" vertical={false}  horizontalPoints={[10, midValue]}//ADD the horizental line
          />
        <XAxis dataKey="day" tickFormatter={(DD) => {
            const date = new Date(DD);
            return date.getDate();  // change the date format to DD
          }}  tickLine={false} />
        <YAxis hide="true" yAxisId="left" orientation="left" />
        <YAxis
          yAxisId="right"
          domain={[minValue - 1, maxValue + 3 ]}
          orientation="right"
          axisLine={false}
          tickLine={false}
        />
        <Tooltip content={<CustomTooltip /> //STyle the Tooltip
        } />
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

export default CustomBarChart