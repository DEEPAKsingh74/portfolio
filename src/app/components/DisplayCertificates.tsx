export const fetchCertificates = async () => {
	try {
		const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/certificates`, {
			cache: "force-cache"
		});
		const skillData = await data.json();
		return skillData.data;

	} catch (err) {
		console.log("Skill Overview: ", err);

	}
}

const DisplayCertificates = async () => {

	const certificates = await fetchCertificates();
	console.log("CERTIFICATES: ", certificates);
	
	return (
		<div className="divide-y-4">
			{
				certificates.map((item: any, index: number) => (
					<img
						src={`${process.env.NEXT_PUBLIC_BASE_URL}/assets/certificates/${item.name}.jpg`}
						alt="image"
						className="w-full h-full px-2 py-1"
					/>
				))
			}
		</div>
	)
}

export default DisplayCertificates