import React from 'react'
import Home from './HomeComp/Home'
import Certificate from './CertificateComp/Certificate'
import Resume from './ResumeComp/Resume'
import Project from './ProjectComp/Project'
import About from './AboutComp/About'
import { useAppSelector } from '@/app/state_management/hooks'

const componentArr = [
	<Home key="home"/>,
	<Certificate key="certificate"/>,
	<Resume key="resume"/>,
	<Project key="project"/>,
	<About key="about"/>,
]

const ContentLayout = () => {

	const indexState = useAppSelector(state => state.index);

	return (
		<>
			{
				componentArr[indexState.index]
			}
		</>
	)
}

export default ContentLayout