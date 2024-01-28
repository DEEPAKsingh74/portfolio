import Image from "next/image"
import profile from "../../../public/images/profile.png"

const SkillCard = ({ item }: { item: any }) => {
	return (
		<div className="w-[30rem] h-[10rem] flex mx-4 rounded-lg shadow-xl border-2 border-slate-100 cursor-pointer">
			<div className="w-[25%] h-full flex justify-center items-center border-r-2">
				<Image
					src={`${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/${item.project_skill[0].skills.image}`}
					alt="image"
					width={200}
					height={200}
				/>
			</div>

			<div className="w-[75%] h-full flex flex-col justify-evenly px-2">
				<h3 className="font-semibold text-xl">{item.title}</h3>
				<p className="text-xs my-2">{item.description}</p>

				<div className="flex gap-4 justify-center items-center">
					<span className="border-2 border-slate-500 rounded-3xl px-2 py-1">
						{
							item.project_skill[0].skills.language
						}
					</span>
					<span>
						Experience (1 yr)
					</span>
				</div>
			</div>

		</div>
	)
}

export default SkillCard