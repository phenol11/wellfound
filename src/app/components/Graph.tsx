import React, { useState, useMemo } from "react";
import {
  LineChart,
  Line,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const Graph = ({ percentile }: { percentile: number }) => {
  const [clickedPoint, setClickedPoint] = useState<number | null>(null);

  const calculateData = useMemo(() => {
    const baseData = [10, 30, 60, 40, 80, 50, 100, 70, 120, 90, 150];
    if (isNaN(percentile) || percentile < 0 || percentile > 100) {
      return [];
    }
    return baseData.map((value) => value * (percentile / 100));
  }, [percentile]);

  if (calculateData.length === 0) {
    return <div>Invalid percentile value</div>;
  }

  const data = calculateData.map((value, index) => ({
    name: (index * 10).toString(),
    numberOfStudent: value,
  }));

  const handleClick = (e: any) => {
    const index = e.activePayload[0]?.payload.name;
    if (index) {
      setClickedPoint(Number(index));
    }
  };

  const getPercentileXValue = (percentile: number) => {
    const xValues = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const closestValue = xValues.reduce((prev, curr) =>
      Math.abs(curr - percentile) < Math.abs(prev - percentile) ? curr : prev
    );
    return closestValue.toString();
  };

  return (
    <div className="mt-8" style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          onClick={handleClick}
        >
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="numberOfStudent"
            stroke="#817DC4"
            strokeWidth={0.5}
            dot={{ r: 5, fill: "#817DC4" }}
            activeDot={{ r: 7 }}
            tension={0.8}
          />
          {clickedPoint !== null && (
            <ReferenceLine
              x={data[clickedPoint]?.name}
              stroke="#C4C4C4"
              strokeWidth={1}
            />
          )}
          <ReferenceLine
            x={getPercentileXValue(percentile)}
            stroke="#C4C4C4"
            strokeWidth={1}
            label={{
              value: `Your Percentile: ${percentile}`,
              position: "top",
              fontSize: 10,
            }}
          />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 10 }}
            ticks={["0", "25", "50", "75", "100"]}
          />
          <YAxis hide={true} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
