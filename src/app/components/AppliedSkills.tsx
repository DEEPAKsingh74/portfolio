import Link from "next/link";
import SkillCard from "./SkillCard"

export const fetchProjects = async () => {
	try {
		const data = await fetch("http://localhost:3001/api/projects", {
			cache: "force-cache"
		});

		const projects = await data.json();
		return projects.data;

	} catch (err) {
		console.log("Project error : ", err);

	}
}

const AppliedSkills = async () => {

	const projects = await fetchProjects();

	return (
		<Link href="https://github.com/DEEPAKsingh74?tab=repositories" className="flex flex-wrap gap-4">
			{
				projects.map((item: any, index: number) => (
					<SkillCard item={item}/>
				))
			}

			<br /><br />
		</Link>
	)
}

export default AppliedSkills