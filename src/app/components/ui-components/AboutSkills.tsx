import { skillsType } from '@/app/(screens)/main/AboutComp/About'
import React from 'react'




const AboutSkills = ({ skills }: {skills: skillsType}) => {
	return (
		<div className='bg-[#292929] px-4 py-2 rounded-xl'>
			<div className={`font-bold text-xl tracking-widest text-[#ffdb70] my-2`}>{skills.groupName}</div>
			<div className='flex flex-wrap gap-5 font-semibold tracking-wider'>
				{
					skills.skills.map((item, index: number) => <span key={index.toString()}>{item}</span>)
				}
			</div>
		</div>
	)
}

export default AboutSkills