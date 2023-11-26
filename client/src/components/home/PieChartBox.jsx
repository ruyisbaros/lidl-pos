import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h1>Leads by Source</h1>
      <div className="chartPie">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((dt) => (
          <div key={dt.name} className="option">
            <div className="opTitle">
              <div
                className="opDot"
                style={{
                  background: `${dt.color}`,
                }}
              ></div>
              <span>{dt.name}</span>
            </div>
            <span>{dt.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
