import profile from "../../../public/images/profile.png"
import Image from "next/image";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import DynamicText from "../components/DynamicText";
import { FaFileDownload } from "react-icons/fa";

const Portfolio = () => {
	return (
		<div className="w-full h-full overflow-auto flex justify-center items-center ps-12">

			<div>
				<h2 className="text-7xl w-[25rem] my-4">
					<span>I am a </span>
					<DynamicText/>
				</h2>
				<p className="w-[90%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus facilis optio debitis distinctio iusto placeat cupiditate nesciunt alias odio iste!</p>

				<br /><br />

				<div className="flex gap-8 text-3xl">
					<span className="text-[#5f9ea0]"><FaInstagramSquare /></span>
					<span className="text-[#5f9ea0]"><FaLinkedin /></span>
					<span className="text-[#5f9ea0]"><FaGithub /></span>
				</div>

				<br /><br />

				<button className="flex gap-2 items-center border-2 border-slate-600 rounded-3xl w-[12rem] px-4 py-2 download-button">
					<div className="download-anim rounded-3xl">
					</div>
					<span className="download-common"><FaFileDownload/></span>
					<span className="font-semibold download-common">Download My Resume</span>
				</button>
			</div>


			<div className="h-[80rem] w-[80rem] flex justify-center items-center">
				<Image
					src={profile}
					alt="Profile Image"
				/>
			</div>

		</div>
	)
}

export default Portfolio;