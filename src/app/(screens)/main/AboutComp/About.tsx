"use client"

import React from 'react'
import AboutWork from '@/app/components/ui-components/AboutWork';
import AboutSkills from '@/app/components/ui-components/AboutSkills';
import UHeadingDesc from '@/app/components/ui-components/UHeadingDesc';
import { useGetAboutQuery } from '@/app/state_management/api/api';

export interface workDomainType {
	id: string;
	name: string;
	description: string;
	type: string;
}

export interface skillsType {
	id: string;
	groupName: string;
	skills: string[];
}

const About = () => {


	const {data, error, isLoading} = useGetAboutQuery();

	const skillsData: skillsType[] = data?.data.skills;
	const aboutData: string[] = data?.data.about;
	const worDomainData: workDomainType[] = data?.data.workdomain;

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error:</div>;

	return (
		<div className='px-4 py-6'>
			<UHeadingDesc
				heading='About Me'
			/>
			<div className='text-lg'>
				{
					aboutData.map((item: string, index: number) => {
						return (<>
							<p key={index.toString()}>{item}</p>
							<br/>
						</>)
					})
				}
			</div>
			<br /><br />

			<UHeadingDesc
				heading='Work Domain'
			/>

			<div className='grid grid-cols-2 w-[100%]  gap-4'>

				{
					worDomainData.map((item: workDomainType, index: number) => 
					<AboutWork key={index.toString()} work={item} />)
				}
			</div>


			<br /><br />
			<UHeadingDesc
				heading='Skills'
			/>


			<div className='flex flex-wrap px-8 gap-8'>
				{
					skillsData.map((item: skillsType, index: number) => 
					<AboutSkills key={index.toString()} skills={item} />)
				}
			</div>
		</div>
	)
}

export default About