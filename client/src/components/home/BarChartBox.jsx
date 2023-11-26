import React from "react";
import { ResponsiveContainer, Bar, Tooltip, BarChart } from "recharts";

const BarChartBox = ({ dt }) => {
  return (
    <div className="barChart">
      <h1>{dt.title}</h1>
      <div className="chartB">
        <ResponsiveContainer width="99%" height={170}>
          <BarChart data={dt.chartData}>
            <Tooltip
              contentStyle={{
                background: "#2a3447",
                borderRadius: "5px",
              }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={dt.dataKey} fill={dt.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
/*  <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer> */
