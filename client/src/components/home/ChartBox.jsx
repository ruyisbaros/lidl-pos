import React from "react";
import { Link } from "react-router-dom";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

const ChartBox = ({ dt }) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={dt.icon} alt="" />
          <span style={{ color: " #d4d9e2" }}>{dt.title}</span>
        </div>
        <h1 className="chartNumber">{dt.number}</h1>
        <Link to={`/${dt.dataKey}`} style={{ color: `${dt.color}` }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={dt.chartData}>
              <Tooltip
                contentStyle={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 60 }}
              />
              <Line
                type="monotone"
                dataKey={dt.dataKey}
                stroke={dt.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chartText">
          <span
            className="perc"
            style={{ color: dt.percentage > 0 ? "tomato" : "limegreen" }}
          >
            {dt.percentage}%
          </span>
          <span className="duration">This Month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
