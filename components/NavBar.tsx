'use client';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { GiHamburgerMenu } from 'react-icons/gi';
import { usePathname, useRouter } from 'next/navigation';
import { IoHomeSharp, IoSettingsSharp } from 'react-icons/io5';
import { TbDeviceDesktopAnalytics } from 'react-icons/tb';
import { FaUser } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { IoMoon, IoSunny } from 'react-icons/io5';

export default function NavBar() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  const router = useRouter();
  const path = usePathname();
  return (
    <div className="flex items-center p-[10px] justify-between bg-bgDarkBlue dark:bg-bgLightGrey text-textGrey dark:text-textDarkGrey">
      <Sheet>
        <SheetTrigger>
          <div className="hover:bg-textGrey/30 duration-150 w-[40px] h-[40px] flex items-center justify-center rounded-full">
            <GiHamburgerMenu className="text-textGrey dark:text-textDarkGrey text-[25px]" />
          </div>
        </SheetTrigger>
        <SheetContent className="bg-bgDarkBlue dark:bg-darkerGrey">
          <SheetHeader className="">
            <div className="flex items-center justify-center">
              <p className="text-[40px] text-textGrey font-bold dark:text-textDarkGrey ">
                Zephyr
              </p>
            </div>
          </SheetHeader>
          <SheetDescription>
            <div className="ml-[20px] flex flex-col mt-[60px] text-textGrey">
              <SheetClose
                onClick={() => router.push('/')}
                className={`hover:bg-darkerBlue/20 dark:hover:bg-darkGrey/10 duration-100  ${
                  path == '/'
                    ? 'bg-darkerBlue/50 dark:bg-darkGrey/20 border-l-[5px] border-white dark:border-darkGrey'
                    : ''
                } rounded-md rounded-l-none  p-[10px] mb-[20px] flex justify-center items-center`}
              >
                <div className="flex justify-start w-full pl-[20px] items-center text-textGrey dark:text-textDarkGrey">
                  <IoHomeSharp className="mr-[50px] text-[28px]" />
                  <p className="text-[18px]">Home</p>
                </div>
              </SheetClose>
              <SheetClose
                onClick={() => router.push('/analytics')}
                className={`hover:bg-darkerBlue/20 dark:hover:bg-darkGrey/10 duration-100  ${
                  path == '/analytics'
                    ? 'bg-darkerBlue/50 dark:bg-darkGrey/20 border-l-[5px] border-white dark:border-darkGrey'
                    : ''
                } rounded-md rounded-l-none  p-[10px] mb-[20px] flex justify-center items-center`}
              >
                <div className="flex justify-start w-full pl-[20px] items-center text-textGrey dark:text-textDarkGrey">
                  <TbDeviceDesktopAnalytics className="mr-[50px] text-[28px]" />
                  <p className="text-[18px]">Analytics</p>
                </div>
              </SheetClose>
              <SheetClose
                onClick={() => router.push('/user')}
                className={`hover:bg-darkerBlue/20 dark:hover:bg-darkGrey/10 duration-100  ${
                  path == '/user'
                    ? 'bg-darkerBlue/50 dark:bg-darkGrey/20 border-l-[5px] border-white dark:border-darkGrey'
                    : ''
                } rounded-md rounded-l-none  p-[10px] mb-[20px] flex justify-center items-center`}
              >
                <div className="flex justify-start w-full pl-[20px] items-center text-textGrey dark:text-textDarkGrey">
                  <FaUser className="mr-[50px] text-[28px]" />
                  <p className="text-[18px]">User Profile</p>
                </div>
              </SheetClose>
              <SheetClose
                onClick={() => router.push('/settings')}
                className={`hover:bg-darkerBlue/20 dark:hover:bg-darkGrey/10 duration-100  ${
                  path == '/settings'
                    ? 'bg-darkerBlue/50 dark:bg-darkGrey/20 border-l-[5px] border-white dark:border-darkGrey'
                    : ''
                } rounded-md rounded-l-none  p-[10px] mb-[20px] flex justify-center items-center`}
              >
                <div className="flex justify-start w-full pl-[20px] items-center text-textGrey dark:text-textDarkGrey">
                  <IoSettingsSharp className="mr-[50px] text-[28px]" />
                  <p className="text-[18px]">Settings</p>
                </div>
              </SheetClose>
              <SheetClose
                onClick={() => router.push('/settings')}
                className="
          rounded-md p-[10px] mb-[20px] flex justify-center items-center mt-[100px]"
              >
                <div className="flex  w-full pl-[25px] ">
                  <Avatar className="mr-[45px]">
                    <AvatarFallback className="bg-accentPurple text-textGrey">
                      PP
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start text-textGrey dark:text-textDarkGrey">
                    <p className="text-[16px] ">Punnoose Punnen</p>
                    <p className="text-[14px]">Account Settings</p>
                  </div>
                </div>
              </SheetClose>

              <button className="  flex  items-center text-textGrey dark:text-textDarkGrey ">
                <div className="flex justify-start  px-[40px] items-center rounded-md  p-[10px] mr-[20px]">
                  <MdLogout className="mr-[50px] text-[28px]" />
                  <p className="text-[18px]">Logout</p>
                </div>
                <IoSunny
                  onClick={() => toggleDarkMode()}
                  className="text-[20px] hidden dark:block "
                />
                <IoMoon
                  onClick={() => toggleDarkMode()}
                  className="text-[20px] block dark:hidden"
                />
              </button>
            </div>
          </SheetDescription>
        </SheetContent>
      </Sheet>
      <div className="text-textGrey font-bold dark:text-textDarkGrey text-[22px] ml-[50px]">Zephyr</div>

      <div className="flex ">
        <div className=" flex justify-center mr-[20px]">
          <div className="bg-darkerBlue dark:bg-darkerGrey flex items-center p-[8px] gap-[10px] rounded-full">
            <IoMoon
              onClick={() => toggleDarkMode()}
              className="w-[20px] h-[20px] bg-darkerBlue dark:bg-darkerGrey dark:text-darkerGrey duration-150 rounded-full cursor-pointer"
            />
            <IoSunny
              onClick={() => toggleDarkMode()}
              className="w-[20px] h-[20px] bg-darkerBlue text-darkerBlue dark:bg-darkerGrey dark:text-[#f7c705] duration-150 rounded-full cursor-pointer"
            />
          </div>
        </div>

        <div className="bg-accentPurple w-[40px] h-[40px] flex items-center justify-center rounded-full text-white">
          <p>PP</p>
        </div>
      </div>
    </div>
  );
}
