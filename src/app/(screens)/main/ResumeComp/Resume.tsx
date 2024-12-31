"use client"

import AboutSkills from "@/app/components/ui-components/AboutSkills";
import UHeadingDesc from "@/app/components/ui-components/UHeadingDesc";
import React from "react";
import Education from "./Education";
import { useGetResumeQuery } from "@/app/state_management/api/api";
import { skillsType } from "../AboutComp/About";

export interface educationType {
  id: string;
  degree: string;
  location: string;
  specialization: string;
  duration: string;
  marks: number
}

const Resume = () => {

  const { data, error, isLoading } = useGetResumeQuery();

  const skillsData: skillsType[] = data?.data.skills;
  const educationData: educationType[] = data?.data.education;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:</div>;

  return (
    <div className="px-4 md:px-8 lg:px-16 space-y-8"> {/* RESPONSIVE */}
      <UHeadingDesc heading="Resume" />

      <div className="flex space-x-4 mt-12">
        <a
          href={data?.data.resumeLink || ""} // Link to your resume
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-[#ffdb70] text-black font-bold rounded-lg shadow-lg hover:shadow-xl transition"
        >
          Download Resume
        </a>
      </div>

      <div className="flex flex-wrap gap-8"> {/* RESPONSIVE */}
        {skillsData.map((item: skillsType, index: number) => (
          <AboutSkills key={index} skills={item} />
        ))}
      </div>

      <UHeadingDesc heading="Education" />

      <div className="space-y-6"> {/* RESPONSIVE */}
        {
          educationData.map((item: educationType, index: number) => (
            <Education key={index} data={item} />
          ))
        }
      </div>
    </div>
  );
};

export default Resume;
