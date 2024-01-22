import AppliedSkills from '@/app/components/AppliedSkills'
import SkillOverview from '@/app/components/SkillOverview'
import React from 'react'

const Skill = () => {
  return (
    <div className='overflow-auto w-full h-[100vh]'>
      <div className='overflow-auto'>
        <h1 className='text-4xl font-bold ms-8 my-4 text-[#363636]'>Skills Overview</h1>
        <br />

        <div>
          <SkillOverview />
        </div>

        <br />
        <hr />
        <br /><br />
        <h1 className='text-4xl font-bold ms-8 my-4 text-[#363636]'>Applied Skills</h1>
        <br />

        <div>
          <AppliedSkills/>
        </div>
      </div>


      <br /><br />
    </div>
  )
}

export default Skill