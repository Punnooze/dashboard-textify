'use client';
import ActivityTable from '@/components/ActivityTable';
import CountUp from 'react-countup';
import { adminActivity } from '../../utils/data';
export default function page() {
  return (
    <div className="bg-bgLightBlue p-[20px] rounded-xl">
      <div className="flex  justify-between mb-[20px]">
        <p className="text-[36px]">Hello Punnoose!</p>
        <div className="hidden md:flex items-center">
          <div className="rounded-full bg-accentPurple w-[60px] h-[60px] p-[10px] flex justify-center items-center mr-[10px]">
            <p className="text-[18px]">PP</p>
          </div>
          <p className="text-[18px]">Punnoose Punnen</p>
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-4 ">
        <div className="col-span-1 lg:col-span-3 bg-darkerBlue p-[20px] rounded-xl lg:mr-[20px]  mb-[20px]">
          <p className="text-[22px] mb-[20px]">Update Details</p>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-[20px]">
            <div className="flex flex-col mb-[20px] p-[2px]">
              <p className="font-bold text-[18px]">Name</p>

              <input
                type="text"
                placeholder="John Doe"
                className=" bg-darkerBlue p-[10px] pl-0 border-b-[1px]  focus:outline-none focus:ring-0"
              />
            </div>
            <div className="hidden md:flex flex-col mb-[20px] p-[2px]">
              <p className="font-bold text-[18px]">Current Password</p>

              <input
                type="password"
                placeholder="Enter Current Password"
                className=" bg-darkerBlue p-[10px] pl-0 border-b-[1px]  focus:outline-none focus:ring-0"
              />
            </div>
            <div className="flex flex-col mb-[20px] p-[2px]">
              <p className="font-bold text-[18px]">Email</p>

              <input
                type="email"
                placeholder="someone@gmail.com"
                className=" bg-darkerBlue p-[10px] pl-0 border-b-[1px]  focus:outline-none focus:ring-0"
              />
            </div>
            <div className="md:hidden flex flex-col mb-[20px] p-[2px]">
              <p className="font-bold text-[18px]">Current Password</p>

              <input
                type="password"
                placeholder="Enter Current Password"
                className=" bg-darkerBlue p-[10px] pl-0 border-b-[1px]  focus:outline-none focus:ring-0"
              />
            </div>
            <div className="flex flex-col mb-[20px] p-[2px]">
              <p className="font-bold text-[18px]">New Password</p>

              <input
                type="password"
                placeholder="Enter New Password"
                className=" bg-darkerBlue p-[10px] pl-0 border-b-[1px]  focus:outline-none focus:ring-0"
              />
            </div>
            <div></div>

            <div className="flex flex-col mb-[20px] p-[2px]">
              <p className="font-bold text-[18px]">Confirm Password</p>

              <input
                type="password"
                placeholder="Re-type New Password"
                className=" bg-darkerBlue p-[10px] pl-0 border-b-[1px]  focus:outline-none focus:ring-0"
              />
            </div>

            <div className="col-span-2">
              <button className="p-[10px] bg-chartBlue/50 hover:bg-chartBlue duration-200 rounded-lg w-full text-[20px] ">
                Update
              </button>
            </div>
          </div>
        </div>
        {/* <div className="lg:hidden col-span-1 p-[20px] bg-darkerBlue rounded-xl mb-[20px] flex justify-center gap-[40px] ">
          <button className="p-[10px] bg-textGrey/30 rounded-md">
            Download <span className="font-bold text-[18px]">156</span> User
            Data
          </button>
          <button className="p-[10px] bg-textGrey/30 rounded-md">
            Download <span className="font-bold text-[18px]">97</span> Order
            Data
          </button>
        </div> */}
        <div className="hidden col-span-1 lg:flex flex-col mb-[20px]">
          <div className="p-[20px] bg-darkerBlue rounded-xl mb-[20px]">
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
            <button className="p-[10px] bg-textGrey/30 rounded-md">
              Download
            </button>
          </div>
          <div className="p-[20px] bg-darkerBlue rounded-xl">
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
            <button className="p-[10px] bg-textGrey/30 rounded-md">
              Download
            </button>
          </div>
        </div>
        <div className="p-[20px] bg-darkerBlue rounded-xl col-span-5">
          <p className="text-[22px] mb-[20px]">Admin Log</p>
          <ActivityTable data={adminActivity} selectedId={null} />
        </div>
      </div>
    </div>
  );
}
