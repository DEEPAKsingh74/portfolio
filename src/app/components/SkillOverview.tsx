// import SkillScore from "../portfolio/constants/SkillScore"
import SkillShort from "./SkillShort"


export const skillOverview = async () => {
	try {
		const data = await fetch("http://localhost:3001/api/skills", {
			cache: "force-cache"
		});
		const skillData = await data.json();
		return skillData.data;

	} catch (err) {
		console.log("Skill Overview: ", err);

	}
}

function getRandomColor() {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
  
	const color = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
  
	return color;
  }
const SkillOverview = async() => {

	const skillScore = await skillOverview();
	return (
		<div className="flex flex-wrap gap-10">
			{
				skillScore.map((item:any, index:number) => (
					<SkillShort name={item.language} percent={item.percentage} color={getRandomColor()} />
				))
			}
		</div>
	)
}

export default SkillOverview