import React from 'react'
import navStyles from "./navbar.module.css"
import { MdMarkEmailRead } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import NavContact from '@/app/components/ui-components/NavContact';
import Image from 'next/image';
import { Kanit } from 'next/font/google'

const kanit = Kanit({ subsets: ['latin'], weight: "500" })


export interface userType {
	id: string;
	name: string,
	profileUrl: string;
	devAreas: string[];
	email: string;
	resumeLink: string;
	location: string;
}

const Navbar = ({ userData }: { userData: userType }) => {


	return (
		<div className='w-[100%] h-fit flex items-center flex-col 
		bg-[#1e1e1ffc] rounded-lg'>
			<div className={`w-[12rem] h-[12rem] bg-[#333333] mt-6 flex justify-center items-center rounded-3xl ${navStyles.profileContainer}`}>
				<Image
					src={userData.profileUrl}
					alt='profile'
					width={600}
					height={600}
					className={`w-[90%] h-[90%] rounded-[1.5rem] ${navStyles.profileImage}`} />
			</div>

			<span className='my-8 font-semibold tracking-wider text-lg'>{userData.name}</span>

			<div className={`flex flex-col text-center ${navStyles.jobroleContainer} ${kanit.className}`}>
				{
					userData.devAreas.map((item: string, index: number) => {
						return (
							<span key={index} className='tracking-widest'>{item}</span>
						)
					})
				}
			</div>

			<div className={`w-[70%] bg-black h-[3px] my-8 rounded-xl ${navStyles.hrbar}`} />


			<div className={`space-y-4 ${kanit.className}`}>
				<NavContact
					icon={MdMarkEmailRead}
					heading='Email'
					value={userData.email}
				/>
				<NavContact
					icon={FaLocationDot}
					heading='Location'
					value={userData.location}
				/>

			</div>

			<br /><br />
		</div>
	)
}

export default Navbar