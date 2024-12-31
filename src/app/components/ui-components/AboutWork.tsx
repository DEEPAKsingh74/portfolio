import React from 'react'
import { Poppins } from "next/font/google"
import Image from 'next/image';
import { workDomainType } from '@/app/(screens)/main/AboutComp/About';

const poppins = Poppins({ subsets: ['latin'], weight: "600" });

const AboutWork = ({ work }: { work: workDomainType }) => {
	return (
		<div className={`flex gap-4 bg-[#292929] px-1 py-4 rounded-lg`}>
			<div className='w-[12em] h-[4em] flex justify-center items-center'>
				<Image
					src="/hackathon.png"
					alt='hackathon image'
					width={100}
					height={100}
					className='w-[3rem] h-[3rem]'
				/>
			</div>

			<div className='flex flex-col gap-1'>
				<span className={`font-bold text-xl ${poppins.className}`}>{work.name}</span>
				<span className='text-sm font-[500]'>{work.description}</span>
			</div>
		</div>
	)
}

export default AboutWork