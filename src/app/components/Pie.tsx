import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const DonutChart = ({
  value,
  centerImage,
}: {
  value: number;
  centerImage: string;
}) => {
  const validValue = Math.min(Math.max(value, 0), 15);

  const data = [
    { name: "Score", value: validValue },
    { name: "Remaining", value: 15 - validValue },
  ];

  const COLORS = ["#3a7df4", "#EAF2FE"];

  return (
    <div style={{ width: "100%", height: 400, position: "relative" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        <img
          src="images/point.svg"
          alt="center"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default DonutChart;
