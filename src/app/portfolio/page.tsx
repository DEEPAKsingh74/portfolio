import profile from "../../../public/images/profile.png"
import Image from "next/image";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import DynamicText from "../components/DynamicText";
import { FaFileDownload } from "react-icons/fa";
import Link from "next/link";

const Portfolio = () => {
	return (
		<div className="w-full h-full overflow-auto flex justify-center items-center ps-12">

			<div>
				<h2 className="text-7xl w-[25rem] my-4">
					<span>I am a </span>
					<DynamicText />
				</h2>
				<p className="w-[90%]">Hello 👋, I am <b>Deepak Singh</b>. Currently a B.Tech Computer Science student. I have 2+ Years of experience in programming, I have hands on experience in web and android development and current enhancing my skills towards data science and deep learning.</p>

				<br /><br />

				<div className="flex gap-8 text-3xl">
					<Link href="https://leetcode.com/burpdeepak96/" className="text-[#5f9ea0]" title="leetcode"><SiLeetcode /></Link>
					<Link href="https://www.linkedin.com/in/deepak-singh-5a278a24a/" className="text-[#5f9ea0]" title="linkedin"><FaLinkedin /></Link>
					<Link href="https://github.com/DEEPAKsingh74" className="text-[#5f9ea0]" title="github"><FaGithub /></Link>
				</div>

				<br /><br />

				<button className="flex gap-2 items-center border-2 border-slate-600 rounded-3xl w-[12rem] px-4 py-2 download-button">
					<div className="download-anim rounded-3xl">
					</div>
					<span className="download-common"><FaFileDownload /></span>
					<Link href="http://localhost:3001/assets/resume/deepak_resume.pdf" className="font-semibold download-common" download target="_blank">Download My Resume</Link>
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