import { IoCaretDownCircle } from "react-icons/io5";


const AccordianSingle = ({ state, item }: { state: boolean, item: any }) => {

	return (
		<div className="w-[65%] my-6 rounded-3xl">
			<div className="flex justify-between px-4 py-1 bg-[#5f9ea0] rounded-xl items-center">
				<h2 className="font-bold text-white">{item.name}</h2>
				<span><IoCaretDownCircle /></span>
			</div>
			<div className={`${state ? "block" : "hidden"} px-4 py-2`}>
				<div>
					<span>State : </span> <span className="font-semibold">{item.state}</span><br />
					<span>Score : </span> <span className="font-bold text-green-600">{item.score}</span>
				</div>
				<div className="mt-4">
					{item.description}
				</div>
				<br />
				<div>
					<span>Subjects : </span>
					<div className="flex gap-4 my-2">

						{
							item.education_subject.map((item: any, index: number) => (
								<div className="border-2 border-slate-500 px-4 py-1 rounded-3xl text-blue-800 font-semibold">{item.subjects.name}</div>
							))
						}


					</div>
				</div>
			</div>
		</div>
	)
}

export default AccordianSingle