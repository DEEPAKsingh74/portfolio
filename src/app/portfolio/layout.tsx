import Image from "next/image";
import React from "react";
import profile_img from "../../../public/images/profile.png"
import "./portfolio.css"
import Menu from "../components/Menu";

const PortfolioLayout = ({children}: {children : React.ReactNode})=>{
	return(
		<div className="w-full h-[100vh] flex justify-center items-center gap-4">
			<div className="w-[20%] h-full fixed left-2 top-0 border-r-2 bg-[#F7F7F7] border-r-[#F7F7F7]">
				<div className="border-2 border-slate-300 w-[40%] aspect-square m-auto mt-4 rounded-full">
					<Image
					src={profile_img}
					alt="Profile Image"
					width={150}
					height={150}/>
				</div>

				<div className="w-full flex flex-col justify-center items-center">
					<h2 className="font-bold text-2xl">Deepak Singh</h2>
					<span className=""><i>Software Developer</i></span>
				</div>

				<br />
				<div className="w-full flex flex-col justify-center items-center">
					<Menu/>
				</div>


				<div className="absolute w-full left-0 bottom-0 right-0 flex justify-center">
					<span className="text-xs">@ Copyright | All copyrights are reserved</span>
				</div>
			</div>


			<div className="w-[78%] h-full absolute right-0 top-0 overflow-hidden">
				{
					children
				}
			</div>
		</div>
	)
}


export default PortfolioLayout;