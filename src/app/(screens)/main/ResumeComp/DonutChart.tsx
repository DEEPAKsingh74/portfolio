import React from "react";

const DonutChart = ({ percentage }: { percentage: number }) => {

  const divident = percentage < 10 ? 10 : 100;
  const angle = (percentage / divident) * 360; 

  return (
    <div
      className="relative flex justify-center items-center w-32 h-32 md:w-40 md:h-40 rounded-full" // RESPONSIVE
      style={{
        background: `conic-gradient(#ffdb70 0deg ${angle}deg, #ffffff ${angle}deg 360deg)`,
      }}
    >
      {/* Inner Circle */}
      <div className="absolute inset-2/4 w-[70%] h-[70%] bg-[#1e1e1f] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div> {/* RESPONSIVE */}

      {/* Percentage */}
      <span className="text-sm md:text-base font-bold z-10">{percentage} {percentage < 10 ? "cgpa": "%"}</span> {/* RESPONSIVE */}
    </div>
  );
};

export default DonutChart;
