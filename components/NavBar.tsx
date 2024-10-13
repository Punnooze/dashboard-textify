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
// import { IoSearch } from 'react-icons/io5';
import { usePathname, useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';
import { IoHomeSharp, IoSettingsSharp } from 'react-icons/io5';
import { TbDeviceDesktopAnalytics } from 'react-icons/tb';
import { FaUser } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Image from 'next/image';
import logo from '../public/logo-removebg-preview.png';

export default function NavBar() {
  const router = useRouter();
  const path = usePathname();
  return (
    <div className="flex items-center p-[10px] justify-between text-textGrey bg-bgDarkBlue">
      <Sheet>
        <SheetTrigger>
          <div className="hover:bg-textGrey/50 duration-150 w-[40px] h-[40px] flex items-center justify-center rounded-full">
            <GiHamburgerMenu className="text-textGrey text-[20px]" />
          </div>
        </SheetTrigger>
        <SheetContent className="bg-bgDarkBlue">
          <SheetHeader className="">
            <div className="flex items-center ">
              <Image
                src={logo}
                alt="Logo"
                className="h-[70px] w-[70px] mr-[10px]"
              />
              <p className="text-[40px] text-textGrey font-bold">Textify AI</p>
            </div>
          </SheetHeader>
          <SheetDescription>
            <div className="ml-[20px] flex flex-col mt-[60px] text-textGrey">
              <SheetClose
                onClick={() => router.push('/')}
                className={`hover:bg-darkerBlue/20 duration-100  ${
                  path == '/' ? 'bg-darkerBlue/50 border-l-[5px]' : ''
                } rounded-md rounded-l-none  p-[10px] mb-[20px] flex justify-center items-center`}
              >
                <div className="flex justify-start w-full pl-[30px] items-center">
                  <IoHomeSharp className="mr-[50px] text-[28px]" />
                  <p className="text-[18px]">Home</p>
                </div>
              </SheetClose>
              <SheetClose
                onClick={() => router.push('/analytics')}
                className={`hover:bg-darkerBlue/20 duration-100  ${
                  path == '/analytics' ? 'bg-darkerBlue/50 border-l-[5px]' : ''
                } rounded-md rounded-l-none  p-[10px] mb-[20px] flex justify-center items-center`}
              >
                <div className="flex justify-start w-full pl-[30px] items-center">
                  <TbDeviceDesktopAnalytics className="mr-[50px] text-[28px]" />
                  <p className="text-[18px]">Analytics</p>
                </div>
              </SheetClose>
              <SheetClose
                onClick={() => router.push('/user')}
                className={`hover:bg-darkerBlue/20 duration-100  ${
                  path == '/user' ? 'bg-darkerBlue/50 border-l-[5px]' : ''
                } rounded-md rounded-l-none  p-[10px] mb-[20px] flex justify-center items-center`}
              >
                <div className="flex justify-start w-full pl-[30px] items-center">
                  <FaUser className="mr-[50px] text-[28px]" />
                  <p className="text-[18px]">User Profile</p>
                </div>
              </SheetClose>
              <SheetClose
                onClick={() => router.push('/settings')}
                className={`hover:bg-darkerBlue/20 duration-100  ${
                  path == '/settings' ? 'bg-darkerBlue/50 border-l-[5px]' : ''
                } rounded-md rounded-l-none  p-[10px] mb-[20px] flex justify-center items-center`}
              >
                <div className="flex justify-start w-full pl-[30px] items-center">
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
                  <div className="flex flex-col items-start">
                    <p className="text-[16px] ">Punnoose Punnen</p>
                    <p className="text-[14px]">Account Settings</p>
                  </div>
                </div>
              </SheetClose>

              <button className="duration-100  hover:bg-darkerBlue/60  rounded-md  p-[10px] mb-[20px] flex justify-center items-center ">
                <div className="flex justify-start w-full pl-[30px] items-center">
                  <MdLogout className="mr-[50px] text-[28px]" />
                  <p className="text-[18px]">Logout</p>
                </div>
              </button>
            </div>
          </SheetDescription>
        </SheetContent>
      </Sheet>
      <div className="text-white ">LOGO</div>
      <div className="bg-accentPurple w-[40px] h-[40px] flex items-center justify-center rounded-full">
        <p>PP</p>
      </div>
    </div>
  );
}
