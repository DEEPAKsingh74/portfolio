"use client";

import React from 'react';
import "./home.css"
import { useGetSkillsQuery } from '@/app/state_management/api/api';
import Image from 'next/image';
import { skillsType } from '../AboutComp/About';

const skills = [
  'React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Node.js',
  'Redux', 'Next.js', 'Python', 'ML', 'Git',
  'Docker', 'SQL', 'REST API', 'Firebase',
];

const Home = () => {

  const { data, error, isLoading } = useGetSkillsQuery();

  const [topSkills, setTopSkills] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (data && data.data.skills) {
      const skillsData: skillsType[] = data?.data.skills;

      // Flatten all skill arrays into one array
      const combinedSkills = skillsData.flatMap((skillGroup: skillsType) => skillGroup.skills);

      // Function to shuffle an array
      const shuffleArray = (array: string[]) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
      };

      // Shuffle the combined skills array and take the first 15
      const randomSkills = shuffleArray(combinedSkills).slice(0, 15);

      setTopSkills(randomSkills);
    }
  }, [data]);




  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error:</div>

  return (
    <div className="home-container h-fit flex flex-col justify-center items-center bg-gradient-to-b from-[#101010] to-[#303030] text-white">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I&apos;m <span className="text-[#ffdb70]">Deepak Singh</span>
        </h1>
        <p className="text-lg md:text-2xl font-medium">
          A <span className="text-[#ffdb70]">Software Engineer</span> passionate about building scalable applications.
        </p>
      </div>

      <br />


      {/* Skills Circle */}
      <div className="skills-circle relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border-4 bg-[#ffdb70] flex flex-wrap justify-center items-center p-6 my-[2rem]">
        {topSkills.map((skill: string, index) => (
          <div
            key={index}
            className="absolute text-sm md:text-lg font-semibold animate-skill hover:underline hover:text-[#ffdb70]"
            style={{
              transform: `rotate(${index * (360 / skills.length)}deg) translate(248px) rotate(-${index * (360 / skills.length)
                }deg)`,
            }}
          >
            {skill}
          </div>
        ))}

        <div className='w-[100%] h-[100%] rounded-full'>
          <Image
            src="/profile_2.png"
            alt='profile image'
            width={600}
            height={600}
            className='w-[100%] h-[100%] object-cover rounded-full'
          />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Home;
