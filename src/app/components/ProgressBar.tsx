import React from "react";

const ProgressBar = ({
  progress,
  color,
  height,
}: {
  progress: number;
  color: string;
  height?: number;
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div
        style={{
          flex: 1,
          height: `${height || 10}px`,
          backgroundColor: "#e0e0e0",
          borderRadius: "5px",
          position: "relative",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: color,
            borderRadius: "5px",
          }}
        />
      </div>
      <span
        style={{
          fontSize: "12px",
          color: color,
          fontWeight: "bold",
        }}
      >
        {progress}%
      </span>
    </div>
  );
};

const ProgressComponent = () => {
  return (
    <div className="pt-4">
      <div className="mb-6">
        <h3 className="font-semibold mb-2 text-sm">
          HTML Tools, Form, History
        </h3>
        <ProgressBar progress={80} color="#397df4" height={8} />
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2 text-sm">
          Tags and References in HTML
        </h3>
        <ProgressBar progress={60} color="#FF8338" height={8} />
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2 text-sm">
          Tables and References in HTML
        </h3>
        <ProgressBar progress={24} color="#FA5352" height={8} />
      </div>
      <div>
        <h3 className="font-semibold mb-2 text-sm">Table and CSS Basics</h3>
        <ProgressBar progress={96} color="#28BF64" height={8} />
      </div>
    </div>
  );
};

export default ProgressComponent;
