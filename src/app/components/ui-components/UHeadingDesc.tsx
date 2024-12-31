import React from 'react'
import "../../globals.css"
import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ['latin'], weight: "600" });

const UHeadingDesc = ({heading}: {heading: string}) => {
	return (
		<div className={`font-extrabold text-4xl text-white heading ${poppins.className} my-7`}>
			{heading}
		</div>
	)
}

export default UHeadingDesc