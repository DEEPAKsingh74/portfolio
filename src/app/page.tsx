"use client"

import Image from 'next/image'
import profile_img from "../../public/images/profile.png"
import "./globals.css"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()
  const [currentTime, setCurrentTime] = useState(5);

  useEffect(() => {
    const navigationTimeout = setInterval(() => {
      setCurrentTime(previous => {
        if (previous <= 2) {
          clearInterval(navigationTimeout);
          router.replace("/portfolio")
        }

        return previous - 1;
      });

    }, 1000);

    return () => {
      clearInterval(navigationTimeout)
    }
  }, [])

  return (
    <main className='w-full h-[100vh] overflow-hidden bg-[#2b2b2b]'>
      <div className='w-full h-full flex justify-center items-center flex-col'>
        <div className='w-[14rem] aspect-square flex justify-center items-center border-2 border-slate-100 rounded-full profile-bg'>
          {/* image */}

          <Image
            src={profile_img}
            alt='Profile Image'
            width={200}
            height={200}
            className="profile_img" />
        </div>

        <div className='flex justify-center flex-col items-center my-4'>
          {/* name */}
          <h1 className='text-xl font-semibold text-slate-100'>Deepak Singh</h1>
          <span className='text-sm text-slate-200'>B.Tech [Computer Science] </span>
        </div>

        <div className='flex justify-center flex-col items-center my-4'>
          {/* greeting */}
          <h2 className='text-3xl font-semibold text-slate-400'>Hello, 👋</h2>
          <p className='text-lg text-slate-400'>Welcome to My Protfolio.</p>
        </div>


        <div className={`text-white font-semibold text-2xl ${currentTime != 0 ? 'number-countdown' : ""}`}>
          {/* timer */}
          {
            currentTime
          }
        </div>
      </div>
    </main>
  )
}
