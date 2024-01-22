const SkillShort = ({ name, percent, color }: { name: string, percent: number, color: string }) => {
	return (
		<div className="px-8">
			<span>{name}</span>

			<div className="relative w-[25rem] font-semibold">
				<span className={`absolute top-[-30px]`} style={{left: `${percent}%`, color: color}}>{percent}%</span>
				<div className="bg-[#d1d1d1] rounded-3xl w-[100%] h-3 mt-6">
					<div className={`rounded-3xl h-3`} style={{width: `${percent}%`, backgroundColor: color}}></div>
				</div>
			</div>
		</div>
	)
}

export default SkillShort