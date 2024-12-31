"use client"


import Image from 'next/image'
import React from 'react'
import socialStyle from "./social.module.css"
import Link from 'next/link'
import { useAppDispatch } from '@/app/state_management/hooks'
import { setIndex } from '@/app/state_management/slicers/nav_index'



const navIcons = [
	{ icon: "/home.png", name: "home" },
	{ icon: "/certificates.png", name: "certificates" },
	{ icon: "/resume.png", name: "resume" },
	{ icon: "/project.png", name: "projects" },
	{ icon: "/about.png", name: "about" },
]

const socialImgIcons = {
	github: "/github.png",
	linkedin: "/linkedin.png",
	gfg: "/gfg.svg",
	leetcode: "/leetcode.svg",
}


export interface socialType {
	id: string;
	name: string;
	url: string;
}

const SocialIcons = ({ socialData }: { socialData: socialType[] }) => {

	const dispatch = useAppDispatch();
	const handleChangeIndex = (idx: number) => {
		dispatch(setIndex(idx));
	}

	const getSocialIcon = (name: string) => {
		const lowerName = name.toLowerCase(); // Convert to lowercase for comparison
		if (lowerName.includes("github")) {
			return socialImgIcons.github;
		} else if (lowerName.includes("linkedin")) {
			return socialImgIcons.linkedin;
		} else if (lowerName.includes("geeks")) {
			return socialImgIcons.gfg;
		} else if (lowerName.includes("leetcode")) {
			return socialImgIcons.leetcode;
		}
		return ""; // Fallback if no match is found
	};


	return (
		<div className='w-[100%] h-fit bg-[#3c3c3dfc] px-3 py-[2rem] flex flex-col gap-4 rounded-lg items-center'>

			{
				navIcons.map((item, index) => {
					return <div className={`w-[2rem] h-[2rem] cursor-pointer ${socialStyle.naviContainer}`} key={index.toString()} data-name={item.name} onClick={() => handleChangeIndex(index)}>
						<Image
							src={item.icon}
							alt={item.name}
							width={200}
							height={200}
							className='w[1.6rem] h-[1.8rem] ' />
					</div>
				})
			}

			<div className='w-[70%] bg-black h-[2px] my-8 rounded-xl' />

			{
				socialData.map((item, index) => {
					return <Link href={item.url} className={`w-[2rem] h-[2rem] cursor-pointer ${socialStyle.naviContainer}`} key={index.toString()}
						data-name={item.name}>
						<Image
							src={
								getSocialIcon(item.name)
							}
							alt={item.name}
							width={200}
							height={200}
							className='w[2rem] h-[2rem]' />
					</Link>
				})
			}
		</div>
	)
}

export default SocialIcons