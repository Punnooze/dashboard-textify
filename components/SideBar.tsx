'use client';
// import { IoSearch } from 'react-icons/io5';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoHomeSharp, IoSettingsSharp } from 'react-icons/io5';
import { TbDeviceDesktopAnalytics } from 'react-icons/tb';
import { FaUser } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
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
      <div className="bg-accentPurple rounded-md overflow-clip h-[80px] ml-[20px] flex items-center justify-center lg:justify-normal">
        <Image height={80} src={logo} alt="logo" />
        <p className="hidden lg:block font-bold ml-[20px] lg:text-[18px] xl:text-[30px]">
          Textify AI
        </p>
      </div>

      <div className="ml-[20px] flex flex-col mt-[60px]">
        <button
          onClick={() => router.push('/')}
          className={`hover:bg-darkerBlue/20 duration-100  ${
            path == '/' ? 'bg-darkerBlue/50 border-l-[5px]' : ''
          } rounded-md rounded-l-none  p-[10px] mb-[20px] flex justify-center items-center`}
        >
          <div className="flex justify-start w-full pl-[20px] items-center">
            <IoHomeSharp className="mr-[30px] text-[24px] lg:text-[18px]" />
            <p className="hidden lg:block">Home</p>
          </div>
        </button>
        <button
          onClick={() => router.push('/analytics')}
          className={`hover:bg-darkerBlue/20 duration-100  ${
            path == '/analytics' ? 'bg-darkerBlue/50 border-l-[5px]' : ''
          } rounded-md rounded-l-none  p-[10px] mb-[20px] flex justify-center items-center`}
        >
          <div className="flex justify-start w-full pl-[20px] items-center">
            <TbDeviceDesktopAnalytics className="mr-[30px] text-[24px] lg:text-[18px]" />
            <p className="hidden lg:block">Analytics</p>
          </div>
        </button>
        <button
          onClick={() => router.push('/user')}
          className={`hover:bg-darkerBlue/20 duration-100  ${
            path == '/user' ? 'bg-darkerBlue/50 border-l-[5px]' : ''
          } rounded-md rounded-l-none  p-[10px] mb-[20px] flex justify-center items-center`}
        >
          <div className="flex justify-start w-full pl-[20px] items-center">
            <FaUser className="mr-[30px] text-[24px] lg:text-[18px]" />
            <p className="hidden lg:block">User Profile</p>
          </div>
        </button>
        <button
          onClick={() => router.push('/settings')}
          className={`hover:bg-darkerBlue/20 duration-100  ${
            path == '/settings' ? 'bg-darkerBlue/50 border-l-[5px]' : ''
          } rounded-md rounded-l-none  p-[10px] mb-[20px] flex justify-center items-center`}
        >
          <div className="flex justify-start w-full pl-[20px] items-center">
            <IoSettingsSharp className="mr-[30px] text-[24px] lg:text-[18px]" />
            <p className="hidden lg:block">Settings</p>
          </div>
        </button>
        <button
          className="
          rounded-md p-[10px] mb-[20px] flex justify-center items-center mt-[100px]"
        >
          <div className="flex  w-full justify-center ">
            <Avatar className="mr-[10px]">
              <AvatarFallback className="bg-accentPurple">PP</AvatarFallback>
            </Avatar>
            <div className="md:flex flex-col items-start hidden ">
              <p className="text-[14px] hidden lg:block">Punnoose Punnen</p>
              <p className="text-[12px] hidden xl:block">Account Settings</p>
            </div>
          </div>
        </button>

        <button className="duration-100  hover:bg-darkerBlue/60  rounded-md  p-[10px] mb-[20px] flex justify-center items-center ">
          <div className="flex justify-start w-full pl-[20px] items-center">
            <MdLogout className="mr-[30px] text-[24px] lg:text-[18px]" />
            <p className="hidden lg:block">Logout</p>
          </div>
        </button>
      </div>
    </div>
  );
}
