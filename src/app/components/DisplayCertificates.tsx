export const fetchCertificates = async () => {
	try {
		const data = await fetch("http://localhost:3001/api/certificates", {
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
	return (
		<div className="divide-y-4">
			{
				certificates.map((item: any, index: number) => (
					<img
						src={`http://localhost:3001/assets/certificates/${item.name}.jpg`}
						alt="image"
						className="w-full h-full px-2 py-1"
					/>
				))
			}
		</div>
	)
}

export default DisplayCertificates