import ServiceCard from '@/app/components/ServiceCard'
import { skillOverview } from '@/app/components/SkillOverview'
import React from 'react'

const Service = async () => {

  const skills = await skillOverview();
  const confidentSkills = skills.filter((item: any) => item.percentage >= 70);
  const canWorkSkills = skills.filter((item: any) => item.percentage < 70);

  return (
    <div className='overflow-auto w-full h-[100vh]'>
      <h2 className='font-semibold text-3xl my-4 px-4'>Services I Am Confident</h2>
        <br />
      <div className='flex flex-wrap gap-16'>

        {
          confidentSkills.map((item:any, index:number) => (
            <ServiceCard name={item.language} percent={item.percentage} image={item.image}/>
          ))
        }
      </div>
      <br /><br />
      <h2 className='font-semibold text-3xl my-4 px-4'>Services I Can Work On</h2>

      <br />
      <div className='flex flex-wrap gap-16'>

        {
          canWorkSkills.map((item:any, index:number) => (
            <ServiceCard name={item.language} percent={item.percentage} image={item.image}/>
          ))
        }
      </div>

      <br /><br />
    </div>
  )
}

export default Service