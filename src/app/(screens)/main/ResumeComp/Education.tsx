import React from "react";
import DonutChart from "./DonutChart";
import { educationType } from "./Resume";

const Education = ({data}: {data: educationType}) => {
  return (
    <div className="bg-[#303030] p-6 rounded-lg space-y-4"> {/* Updated container */}
      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-center text-sm md:text-base lg:text-xl font-semibold"> {/* RESPONSIVE */}
        <span>{data.degree}</span>
        <span>{data.location}</span>
        <span>{data.specialization}</span>
        <span className="font-medium">{data.duration}</span>
      </div>

      {/* Donut Chart */}
      <div className="flex justify-center items-center text-white font-bold">
        <DonutChart percentage={data.marks} />
      </div>
    </div>
  );
};

export default Education;
