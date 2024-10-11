'use client';
import { IoSearch } from 'react-icons/io5';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoHomeSharp, IoSettingsSharp } from 'react-icons/io5';
import { TbDeviceDesktopAnalytics } from 'react-icons/tb';
import { FaUser } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import logo from '../public/logo-removebg-preview.png';

export default function SideBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [path, setPath] = useState('/');

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  return (
    <div className=" h-[100vh] bg-bgDarkBlue text-textGrey py-[20px] flex flex-col justify-between">
      <div className="bg-accentPurple rounded-md overflow-clip h-[80px] ml-[20px] flex items-center">
        <Image height={80} src={logo} alt="logo" />
        <p className="font-bold ml-[20px] text-[40px]">Textify AI</p>
      </div>

      <div className="ml-[20px] flex flex-col mt-[60px]">
        <button
          onClick={() => router.push('/')}
          className={`hover:bg-darkerBlue/20 duration-100  ${
            path == '/' ? 'bg-darkerBlue/50 border-l-[5px]' : ''
          } rounded-md rounded-l-none  p-[10px] mb-[20px] flex justify-center items-center`}
        >
          <div className="flex justify-start w-full pl-[40px] items-center">
            <IoHomeSharp className="mr-[30px] text-[18px]" />
            <p className="">Home</p>
          </div>
        </button>
        <button
          onClick={() => router.push('/analytics')}
          className={`hover:bg-darkerBlue/20 duration-100  ${
            path == '/analytics' ? 'bg-darkerBlue/50 border-l-[5px]' : ''
          } rounded-md rounded-l-none  p-[10px] mb-[20px] flex justify-center items-center`}
        >
          <div className="flex justify-start w-full pl-[40px] items-center">
            <TbDeviceDesktopAnalytics className="mr-[30px] text-[18px]" />
            <p className="">Analytics</p>
          </div>
        </button>
        <button
          onClick={() => router.push('/user')}
          className={`hover:bg-darkerBlue/20 duration-100  ${
            path == '/user' ? 'bg-darkerBlue/50 border-l-[5px]' : ''
          } rounded-md rounded-l-none  p-[10px] mb-[20px] flex justify-center items-center`}
        >
          <div className="flex justify-start w-full pl-[40px] items-center">
            <FaUser className="mr-[30px] text-[18px]" />
            <p className="">User Profile</p>
          </div>
        </button>
        <button
          onClick={() => router.push('/settings')}
          className={`hover:bg-darkerBlue/20 duration-100  ${
            path == '/settings' ? 'bg-darkerBlue/50 border-l-[5px]' : ''
          } rounded-md rounded-l-none  p-[10px] mb-[20px] flex justify-center items-center`}
        >
          <div className="flex justify-start w-full pl-[40px] items-center">
            <IoSettingsSharp className="mr-[30px] text-[18px]" />
            <p className="">Settings</p>
          </div>
        </button>
        <button
          className="
          rounded-md p-[10px] mb-[20px] flex justify-center items-center mt-[100px]"
        >
          <div className="flex  w-full justify-center ">
            <Avatar className="mr-[20px]">
              <AvatarFallback className="bg-accentPurple">PP</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start">
              <p className="text-[16px]">Punnoose Punnen</p>
              <p className="text-[12px]">Account Settings</p>
            </div>
          </div>
        </button>

        <button className="duration-100  hover:bg-darkerBlue/60  rounded-md  p-[10px] mb-[20px] flex justify-center items-center ">
          <div className="flex justify-start w-full pl-[40px] items-center">
            <MdLogout className="mr-[30px] text-[18px]" />
            <p className="">Logout</p>
          </div>
        </button>
      </div>
    </div>
  );
}
