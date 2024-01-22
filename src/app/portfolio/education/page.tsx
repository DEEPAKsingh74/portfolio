import Accordian from "@/app/components/Accordian"
import DisplayCertificates from "@/app/components/DisplayCertificates"

const Education = () => {
  return (
    <div className="w-full h-[100vh] overflow-auto">
      <h1 className='text-4xl font-bold ms-8 my-4 text-[#363636]'>Education</h1>

      <br />

      <Accordian />

      <h1 className='text-4xl font-bold ms-8 my-4 text-[#363636]'>Certificates</h1>

      <DisplayCertificates />
      <br />
    </div>
  )
}

export default Education