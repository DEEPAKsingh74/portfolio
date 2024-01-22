import Image from "next/image"
import profile from "../../../../public/images/profile.png"

export const getAbout = async () =>{
  const data = await fetch("http://localhost:3001/api/about", {
    cache: "force-cache"
  });

  const about = await data.json();
  return about.data;
  
}

const About = async () => {
    const about = await getAbout();

  return (
    <div className="overflow-auto w-full h-[100vh] flex justify-center items-center">
      <div className="w[40%] h-[60%] bg-[#b9b9b9] rounded-xl">
        <Image
          src={profile}
          alt="Profile image"
          className="w-[100%] h-[100%]" />
      </div>

      <div className="w-[50%] h-[60%] bg-[#38a7ba] text-slate-100 text-xl px-4 py-4 rounded-3xl relative right-[7rem] top-8 shadow-xl">
        {
          about.map((item: any, index: number) => {
            return (
              <>
                {item.description}
              </>
            )
          })
        }
      </div>

    </div>
  )
};




export default About