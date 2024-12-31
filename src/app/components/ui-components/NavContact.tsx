import React from 'react'

interface NavContactProps {
  icon: React.ElementType; 
  heading: string;
  value: string;
}

const NavContact: React.FC<NavContactProps> = ({ icon: Icon, heading, value }) => {
  return (
    <div className='flex items-center gap-6 text-[#ffdb70]'>
      <span className='text-[2rem]'><Icon /></span>

      <div className='w-[0.1rem] h-[2rem] bg-[#ffdb70]'/>

      <div className='flex flex-col'>
        <span className='text-sm font-semibold tracking-widest'>{heading}</span>
        <span className='text-sm text-[#fff]'>{value}</span>
      </div>
    </div>
  )
}

export default NavContact;
