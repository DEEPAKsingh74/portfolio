"use client";

import PButton from "@/app/components/base-components/PButton";
import UHeadingDesc from "@/app/components/ui-components/UHeadingDesc";
import React, { useState } from "react";
import ProjectContainer from "./ProjectContainer";
import { useGetProjectsQuery } from "@/app/state_management/api/api";

const projectTypesArr = [
  { label: "Web Development", type: "WEB" },
  { label: "Mobile Development", type: "MOBILE" },
  { label: "Machine Learning", type: "MACHINE_LEARNING" },
];

export interface projectType {
  duration: {
    startDate: string,
    endDate: string
  },
  id: string;
  name: string;
  description: string;
  projectUrl: string;
  thumbnailUrl: string;
  techStack: string[];
  githubUrl: string;
  type: string
}

const Project = () => {
  const [projectTypeIndex, setProjectTypeIndex] = useState(0);

  const { data, error, isLoading } = useGetProjectsQuery();

  const projects: projectType[] = data?.data?.projects || [];


  const filteredProjects = projects.filter(
    (item: projectType) => item.type === projectTypesArr[projectTypeIndex].type
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading projects...</div>;

  return (
    <div className="px-4">
      <UHeadingDesc heading="Projects" />

      <br />
      <div className="flex flex-wrap justify-around items-center">
        {projectTypesArr.map((item, index) => (
          <div
            key={index}
            className="w-[30%] h-[2.5rem]"
            onClick={() => setProjectTypeIndex(index)}
          >
            <PButton
              text={item.label}
              extraClassParams={index === projectTypeIndex ? "bg-[#ffdb70] text-[#000]" : ""}
              borderColor={index === projectTypeIndex ? "border-[#fff]" : ""}
            />
          </div>
        ))}
      </div>

      <br />
      <div className="flex flex-wrap w-[100%] justify-around gap-y-4">
        {filteredProjects.map((item: projectType, index: number) => (
          <ProjectContainer key={index} data={item} />
        ))}
      </div>

      <br />
    </div>
  );
};

export default Project;
