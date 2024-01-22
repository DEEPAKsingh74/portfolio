import Image from "next/image"

const ServiceCard = ({ name, percent, image }: { name: string, percent: number, image: string }) => {

  console.log("Image", image);

  return (
    <div className="w-[10rem] h-[10rem] bg-slate-200 cursor-pointer rounded-2xl shadow-xl relative">
      <div className="w-full h-[85%] bg-slate-200 rounded-2xl">
        <img
          src={`http://localhost:3001/assets/images/${image}`}
          alt="image"
          className="w-full h-full px-2 py-1"
        />
      </div>
      <div className="flex justify-center items-center font-semibold">
        {name}
      </div>
    </div>
  )
}

export default ServiceCard
