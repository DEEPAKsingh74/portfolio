import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projectType } from "./Project";

const ProjectContainer = ({ data }: {data: projectType}) => {
  const {
    thumbnailUrl,
    name,
    description,
    duration: { startDate, endDate },
    projectUrl,
    githubUrl,
    techStack,
  } = data;

  return (
    <div className="w-[45%] h-[20rem] border-2 border-gray-700 rounded-lg shadow-lg overflow-hidden bg-[#1a1a1a]">
      <div className="relative h-[60%]">
        <Image
          src={thumbnailUrl || "/default_thumbnail.png"}
          alt={`${name} thumbnail`}
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 p-3 flex flex-col justify-between text-white">
          <div className="">
            <h3 className="text-lg font-semibold truncate">{name}</h3>
            <p className="text-sm text-white font-medium">{description}</p>
          </div>
          <div className="flex justify-between text-sm font-medium">
            <span>{startDate}</span>
            <span>{endDate}</span>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="h-[40%] bg-[#121212] p-4 flex flex-col justify-between">
        {/* Links Section */}
        <div className="flex justify-between text-sm mb-2">
          {projectUrl ? (
            <Link
              href={projectUrl}
              target="_blank"
              className="text-[#ffdb70] hover:underline"
            >
              Visit
            </Link>
          ) : (
            <span className="text-gray-500">No URL</span>
          )}
          {githubUrl ? (
            <Link
              href={githubUrl}
              target="_blank"
              className="text-[#ffdb70] hover:underline"
            >
              GitHub
            </Link>
          ) : (
            <span className="text-gray-500">No Repo</span>
          )}
        </div>

        {/* Tech Stack Section */}
        <div className="flex flex-wrap gap-2">
          {techStack?.map((tech: string, index: number) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-800 text-[#ffdb70] text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
