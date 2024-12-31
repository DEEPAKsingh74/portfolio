import React from 'react'


interface PButtonProps {
	text: string,
	extraClassParams?: string,
	callBackFunc?: () => void,
	borderColor?: string
}

const PButton = ({ text, extraClassParams, borderColor = "border-[#ffdb70]" }: PButtonProps) => {
	return (
		<button className={`border-[2px] w-[100%] h-full ${borderColor} rounded-lg tracking-wider ${extraClassParams}`}>
			<span className='font-bold'>{text}</span>
		</button>
	)
}

export default PButton