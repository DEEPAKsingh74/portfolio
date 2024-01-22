"use client"

import { useEffect, useState } from "react"
import SkillDisplay from "../portfolio/constants/SkillHome"

const skillLength = SkillDisplay.length;

const DynamicText = () => {

	const [currentSkill, setCurrentSkill] = useState(0);

	useEffect(() => {
	  
		const timeInterval = setInterval(() => {
			setCurrentSkill((currentSkill + 1) % skillLength);
		}, 3000);
	
	  return () => {
		clearInterval(timeInterval)
	  }
	}, [currentSkill])
	
	

  return (
	<span className="dynamic-text">
		{
			SkillDisplay[currentSkill]
		}	
	</span>
  )
}

export default DynamicText