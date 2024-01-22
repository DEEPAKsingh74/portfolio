"use client"

import { useEffect, useState } from "react"
import AccordianSingle from "./AccordianSingle"
import Loader from "./Loader";

const Accordian = () => {

	const [accordianCheck, setAccordianCheck] = useState<number>(0);
	const [education, setEducation] = useState([]);
	const [status, setStatus] = useState('.');

	useEffect(() => {
		setStatus('loading');
		const fetchEducation = () => {
			fetch("http://localhost:3001/api/education")
				.then((response) => {
					if (!response.ok) {
						throw new Error("Error fetching.");
					}
					return response.json();
				})
				.then((responseData) => {
					setEducation(responseData.data);
					setStatus('success');
				})
				.catch((error) => {
					setStatus('error');
					console.error("Error fetching education data:", error);
				});

		}

		fetchEducation();
	}, [])

	const isLoading = status === 'loading';
	const error = status === 'error';

	const handleAccordianCheck = (index: number) => {
		setAccordianCheck(index);
	}

	return (
		<div>
			{
				isLoading ? <Loader/> :
					(error || education.length === 0) ? 'Error' :
						education.map((item: any, index: number) => (
							<div onClick={() => handleAccordianCheck(index)} className="ms-8">
								<AccordianSingle state={index === accordianCheck} item={item} />
							</div>
						))
			}

			<br /><br />

			<h2 className="font-bold text-white">Cer</h2>
		</div>
	)
}

export default Accordian