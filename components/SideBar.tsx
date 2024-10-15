'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoHomeSharp, IoSettingsSharp, IoMoon, IoSunny } from 'react-icons/io5';
import { TbDeviceDesktopAnalytics } from 'react-icons/tb';
import { FaUser } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';

export default function SideBar() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  const router = useRouter();
  const pathname = usePathname();
  const [path, setPath] = useState('/');

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  return (
    <div className=" h-[100vh] bg-bgDarkBlue dark:bg-bgDarkGrey text-textGrey dark:text-textDarkGrey py-[20px] flex flex-col justify-between">
      <div className="rounded-md overflow-clip h-[80px] ml-[20px] flex items-center justify-center">
        <p className='hidden md:block lg:hidden text-[30px]'>Zpr</p>
        <p className="hidden lg:block font-bold lg:text-[18px] xl:text-[30px]">
          Zephyr
        </p>
      </div>

      <div className="ml-[20px] flex flex-col mt-[60px]">
        <button
          onClick={() => router.push('/')}
          className={`hover:bg-darkerBlue/20 dark:hover:bg-darkGrey/10 duration-100  ${
            path == '/'
              ? 'bg-darkerBlue/50 dark:bg-darkGrey/20 border-l-[5px] border-white dark:border-darkGrey'
              : ''
          } rounded-md rounded-l-none  p-[10px] mb-[20px] flex justify-center items-center`}
        >
          <div className="flex justify-start w-full pl-[20px] items-center">
            <IoHomeSharp className="mr-[30px] text-[24px] lg:text-[14px] xl:text-[22px]" />
            <p className="hidden lg:block lg:text-[12px] xl:text-[16px]">
              Home
            </p>
          </div>
        </button>
        <button
          onClick={() => router.push('/analytics')}
          className={`hover:bg-darkerBlue/20 dark:hover:bg-darkGrey/10 duration-100  ${
            path == '/analytics'
              ? 'bg-darkerBlue/50 dark:bg-darkGrey/20 border-l-[5px] border-white dark:border-darkGrey'
              : ''
          } rounded-md rounded-l-none  p-[10px] mb-[20px] flex justify-center items-center`}
        >
          <div className="flex justify-start w-full pl-[20px] items-center">
            <TbDeviceDesktopAnalytics className="mr-[30px] text-[24px] lg:text-[14px] xl:text-[22px]" />
            <p className="hidden lg:block lg:text-[12px] xl:text-[16px]">
              Analytics
            </p>
          </div>
        </button>
        <button
          onClick={() => router.push('/user')}
          className={`hover:bg-darkerBlue/20 dark:hover:bg-darkGrey/10 duration-100  ${
            path == '/user'
              ? 'bg-darkerBlue/50 dark:bg-darkGrey/20 border-l-[5px] border-white dark:border-darkGrey '
              : ''
          } rounded-md rounded-l-none  p-[10px] mb-[20px] flex justify-center items-center`}
        >
          <div className="flex justify-start w-full pl-[20px] items-center">
            <FaUser className="mr-[30px] text-[24px] lg:text-[14px] xl:text-[22px]" />
            <p className="hidden lg:block lg:text-[12px] xl:text-[16px]">
              User Profile
            </p>
          </div>
        </button>
        <button
          onClick={() => router.push('/settings')}
          className={`hover:bg-darkerBlue/20 dark:hover:bg-darkGrey/10 duration-100  ${
            path == '/settings'
              ? 'bg-darkerBlue/50 dark:bg-darkGrey/20 border-l-[5px] border-white dark:border-darkGrey '
              : ''
          } rounded-md rounded-l-none  p-[10px] mb-[20px] flex justify-center items-center`}
        >
          <div className="flex justify-start w-full pl-[20px] items-center">
            <IoSettingsSharp className="mr-[30px] text-[24px] lg:text-[14px] xl:text-[22px]" />
            <p className="hidden lg:block lg:text-[12px] xl:text-[16px]">
              Settings
            </p>
          </div>
        </button>
        <button
          onClick={() => router.push('/settings')}
          className="
          rounded-md p-[10px] mb-[20px] flex justify-center items-center mt-[100px]"
        >
          <div className="flex  w-full justify-center items-center">
            <div className="mr-[10px] flex items-center justify-center  w-[30px] h-[30px] bg-accentPurple p-[20px] rounded-full ">
              <p className="text-[20px] text-white">PP</p>
            </div>
            <div className="md:flex flex-col items-start hidden ">
              <p className="text-[14px]  hidden lg:block">Punnoose Punnen</p>
              <p className="text-[12px] hidden 2xl:block">Account Settings</p>
            </div>
          </div>
        </button>

        <button className="mb-[10px] flex justify-center items-center ">
          <div className="flex justify-between w-full pl-[20px] items-center">
            <div className="flex items-center w-[70%] hover:bg-darkerBlue/60 dark:hover:bg-darkerGrey/70 p-[10px] duration-100 rounded-md ">
              <MdLogout className=" lg:hidden xl:block xl:mr-[15px] 2xl:mr-[30px] text-[24px] lg:text-[14px] xl:text-[22px]" />
              <p className="hidden lg:block">Logout</p>
            </div>
            <IoSunny
              onClick={() => toggleDarkMode()}
              className="text-[20px] lg:text-[14px] xl:text-[20px] hidden dark:block "
            />
            <IoMoon
              onClick={() => toggleDarkMode()}
              className="text-[20px] lg:text-[14px] xl:text-[20px] block dark:hidden"
            />
          </div>
        </button>
      </div>
    </div>
  );
}
