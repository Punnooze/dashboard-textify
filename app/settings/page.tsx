'use client';
import ActivityTable from '@/components/ActivityTable';
import CountUp from 'react-countup';
import { adminActivity } from '../../utils/data';
import { IoMoon, IoSunny } from 'react-icons/io5';

export default function page() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };
  return (
    <div className="bg-bgLightBlue dark:bg-bgLightGrey shadow-md  p-[20px] rounded-xl">
      <div className="flex  justify-between mb-[20px]">
        <p className="text-[36px]">Hello Punnoose!</p>
        <div className="hidden md:flex md:flex-col lg:flex-row items-center md:items-end lg:items-center ">
          <div className=" flex justify-center mr-[20px] md:mr-0 lg:mr-[20px] ">
            <div className="bg-darkerBlue dark:bg-darkerGrey flex items-center p-[6px] gap-[10px] rounded-full shadow-md">
              <IoMoon
                onClick={() => toggleDarkMode()}
                className="w-[25px] h-[25px] bg-darkerBlue dark:bg-darkerGrey dark:text-darkerGrey duration-150 rounded-full cursor-pointer"
              />
              <IoSunny
                onClick={() => toggleDarkMode()}
                className="w-[25px] h-[25px] bg-darkerBlue text-darkerBlue dark:bg-darkerGrey dark:text-[#f7c705] duration-150 rounded-full cursor-pointer"
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="rounded-full bg-accentPurple w-[60px] h-[60px] p-[10px] flex justify-center items-center mr-[10px]">
              <p className="text-[18px] text-white">PP</p>
            </div>
            <p className="text-[18px]">Punnoose Punnen</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-4 ">
        <div className="col-span-1 lg:col-span-3 bg-darkerBlue dark:bg-darkerGrey shadow-md p-[20px] rounded-xl lg:mr-[20px]  mb-[20px]">
          <p className="text-[22px] mb-[20px]">Update Details</p>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-[20px]">
            <div className="flex flex-col mb-[20px] p-[2px]">
              <p className="font-bold text-[18px]">Name</p>

              <input
                type="text"
                placeholder="John Doe"
                className=" bg-darkerBlue dark:bg-darkerGrey p-[10px] pl-0 border-b-[1px]  focus:outline-none focus:ring-0"
              />
            </div>
            <div className="hidden md:flex flex-col mb-[20px] p-[2px]">
              <p className="font-bold text-[18px]">Current Password</p>

              <input
                type="password"
                placeholder="Enter Current Password"
                className=" bg-darkerBlue dark:bg-darkerGrey p-[10px] pl-0 border-b-[1px]  focus:outline-none focus:ring-0"
              />
            </div>
            <div className="flex flex-col mb-[20px] p-[2px]">
              <p className="font-bold text-[18px]">Email</p>

              <input
                type="email"
                placeholder="someone@gmail.com"
                className=" bg-darkerBlue dark:bg-darkerGrey p-[10px] pl-0 border-b-[1px]  focus:outline-none focus:ring-0"
              />
            </div>
            <div className="md:hidden flex flex-col mb-[20px] p-[2px]">
              <p className="font-bold text-[18px]">Current Password</p>

              <input
                type="password"
                placeholder="Enter Current Password"
                className=" bg-darkerBlue dark:bg-darkerGrey p-[10px] pl-0 border-b-[1px]  focus:outline-none focus:ring-0"
              />
            </div>
            <div className="flex flex-col mb-[20px] p-[2px]">
              <p className="font-bold text-[18px]">New Password</p>

              <input
                type="password"
                placeholder="Enter New Password"
                className=" bg-darkerBlue dark:bg-darkerGrey p-[10px] pl-0 border-b-[1px]  focus:outline-none focus:ring-0"
              />
            </div>
            <div></div>

            <div className="flex flex-col mb-[20px] p-[2px]">
              <p className="font-bold text-[18px]">Confirm Password</p>

              <input
                type="password"
                placeholder="Re-type New Password"
                className=" bg-darkerBlue dark:bg-darkerGrey p-[10px] pl-0 border-b-[1px]  focus:outline-none focus:ring-0"
              />
            </div>

            <div className="col-span-2">
              <button className="p-[10px] bg-chartBlue/50 dark:hover:bg-darkGrey/50 dark:bg-textGrey hover:bg-chartBlue duration-200 rounded-lg w-full text-[20px] ">
                Update
              </button>
            </div>
          </div>
        </div>
        <div className="hidden col-span-1 lg:flex flex-col mb-[20px]">
          <div className="p-[20px] bg-darkerBlue dark:bg-darkerGrey shadow-md rounded-xl mb-[20px]">
            <p className="text-[22px] mb-[20px]">Download User Data</p>
            <div className="flex items-baseline">
              <CountUp
                start={0}
                end={156}
                duration={1.5}
                className="text-[40px] xl:text-[70px] mr-[10px] text-chartGreen"
              />
              <p className="text-[28px] text-chartGreen">Users</p>
            </div>
            <button className="p-[10px] bg-textGrey/30 dark:bg-darkGrey/50 rounded-md">
              Download
            </button>
          </div>
          <div className="p-[20px] bg-darkerBlue dark:bg-darkerGrey shadow-md rounded-xl">
            <p className="text-[22px] mb-[20px]">Download Order Data</p>
            <div className="flex items-baseline">
              <CountUp
                start={0}
                end={97}
                duration={1.5}
                className="text-[40px] xl:text-[70px] mr-[10px] text-chartBlue"
              />
              <p className="text-[28px] text-chartBlue">Orders</p>
            </div>
            <button className="p-[10px] bg-textGrey/30 dark:bg-darkGrey/50 rounded-md">
              Download
            </button>
          </div>
        </div>
        <div className="p-[20px] bg-darkerBlue dark:bg-darkerGrey shadow-md rounded-xl col-span-5">
          <p className="text-[22px] mb-[20px]">Admin Log</p>
          <ActivityTable data={adminActivity} selectedId={null} />
        </div>
      </div>
    </div>
  );
}
