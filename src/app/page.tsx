"use client";

import ContentLayout from "./(screens)/main/ContentLayout";
import Navbar, { userType } from "./(screens)/navbar/Navbar";
import SocialIcons, { socialType } from "./(screens)/social_icons/SocialIcons";
import { Kanit } from 'next/font/google';
import { useGetUserDataQuery } from "./state_management/api/api";

const kanit = Kanit({ subsets: ['latin'], weight: "200" });

export default function Home() {

  const { data, error, isLoading } = useGetUserDataQuery(); 

  const userData: userType = data?.data.user;
  const socialData: socialType[] = data?.data.social;

  if(isLoading){
    return <div>Loading...</div>
  }

  if(error){
    return <div>Something went wrong...</div>
  }

  return (
    <div className="grid grid-cols-[1fr_3fr_auto] w-full gap-4 px-4 py-6">
      <div>
        <Navbar userData={userData}/>
      </div>

      <div className={`${kanit.className} w-full h-full bg-[#1e1e1ffc]`}>
        <ContentLayout />
      </div>

      <div>
        <SocialIcons socialData={socialData}/>
      </div>
    </div>
  );
}
