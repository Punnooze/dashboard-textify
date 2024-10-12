'use client';
import { data, dougnutData } from '@/utils/data';
import { DataTable } from '@/components/DataTable';
import { PiDotsThreeBold } from 'react-icons/pi';
import { columns } from '@/utils/columns';
import DoughnutChart from '@/components/DoughnutChart';
import BarChart from '@/components/BarChart';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
import CountUp from 'react-countup';

export default function Home() {
  return (
    <div className=" flex flex-col lg:grid lg:grid-cols-4 bg-bgLightBlue rounded-xl overflow-x-clip">
      <div className=" p-[20px] lg:pr-[10px] col-span-3  ">
        <div className="w-full text-white mb-[20px]">
          <p className="hidden md:block text-[40px]">
            Welcome to your Dashboard!
          </p>
          <p className="text-[40px] md:hidden">Welcome</p>
        </div>

        <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 h-[150px] xl:h-[100px] mb-[20px]">
          <div className="bg-darkerBlue rounded-xl px-[20px] py-[10px]">
            <div className="flex justify-between items-center">
              <p>Monthly Revenue</p>
              <button className="hidden xl:block bg-textGrey rounded-full p-[3px] text-darkerBlue">
                <PiDotsThreeBold />
              </button>
            </div>
            <div className="flex xl:items-center flex-col xl:flex-row">
              <p className="text-[24px]  md:text-[34px] text-green font-bold my-[10px] md:my-0 md:mr-[10px]">
                ₹22,390
              </p>
              <div className="bg-green/20 flex items-center justify-center p-[2px] px-[5px] rounded-sm border-[1px] border-green h-[22px] text-green">
                <FaCaretUp />
                <p className="text-[12px]">22%</p>
              </div>
            </div>
          </div>

          <div className="bg-darkerBlue rounded-xl px-[20px] py-[10px]">
            <div className="flex justify-between items-center">
              <p>New Customers</p>
              <button className="hidden xl:block bg-textGrey rounded-full p-[3px] text-darkerBlue">
                <PiDotsThreeBold />
              </button>
            </div>
            <div className="flex xl:items-center flex-col xl:flex-row">
              <p className="text-[24px] md:text-[34px] text-green font-bold my-[10px] md:my-0 md:mr-[10px]">
                623
              </p>
              <div className="bg-green/20 flex items-center justify-center p-[2px] px-[5px] rounded-sm border-[1px] border-green h-[22px] text-green">
                <FaCaretUp />
                <p className="text-[12px]">9%</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block bg-darkerBlue rounded-xl px-[20px] py-[10px]">
            <div className="flex justify-between items-center">
              <p>Monthly Orders</p>
              <button className="hidden xl:block bg-textGrey rounded-full p-[3px] text-darkerBlue">
                <PiDotsThreeBold />
              </button>
            </div>
            <div className="flex xl:items-center flex-col xl:flex-row">
              <p className="text-[24px] md:text-[34px] text-red font-bold my-[10px] md:my-0 md:mr-[10px]">
                158
              </p>
              <div className="bg-red/20 flex items-center justify-center p-[2px] px-[5px] rounded-sm border-[1px] border-red h-[22px] text-red">
                <FaCaretDown />
                <p className="text-[12px]">12%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-darkerBlue flex rounded-xl flex-col mb-[20px] p-[20px]">
          <p className="text-[22px] mb-[20px] ">Yearly Overview</p>
          <div className="flex justify-center items-center h-[350px]">
            <BarChart />
          </div>
        </div>

        <div className=" xl:hidden bg-darkerBlue p-[20px] rounded-lg mb-[20px]">
          <p className="mb-[20px] text-[24px]">Order Status</p>
          <div className="flex-col md:flex-row flex justify-between items-center px-[20px]">
            <DoughnutChart
              dougnutData={dougnutData}
              doughnutLabels={[
                'Processing',
                'In Transit',
                'Delivered',
                'Cancelled',
              ]}
            />
            <div className="mt-[10px]">
              <div className="flex items-center">
                <div className="w-[15px] h-[15px] bg-chartYellow rounded-full mr-[10px]"></div>
                <p>Processing-</p>
                <span className="ml-[5px] text-[18px] font-bold">
                  {dougnutData[0]}
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-[15px] h-[15px] bg-chartBlue rounded-full mr-[10px]"></div>
                <p>In Transit- </p>
                <span className="ml-[5px] text-[18px] font-bold">
                  {dougnutData[1]}
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-[15px] h-[15px] bg-chartGreen rounded-full mr-[10px]"></div>
                <p>Delivered- </p>
                <span className="ml-[5px] text-[18px] font-bold">
                  {dougnutData[2]}
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-[15px] h-[15px] bg-chartRed rounded-full mr-[10px]"></div>
                <p>Cancelled- </p>
                <span className="ml-[5px] text-[18px] font-bold">
                  {dougnutData[3]}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-darkerBlue p-[20px] rounded-xl">
          <p className="mb-[20px] text-[22px]">Recent Orders</p>
          <DataTable columns={columns} data={data} />
        </div>
      </div>

      <div className="p-[20px] lg:pl-[10px]">
        <div className="bg-darkerBlue p-[20px] py-[30px] rounded-lg mb-[20px]">
          <p className="text-[22px]">Revenue Genrated Today</p>
          <p className="mb-[20px] text-[14px] text-lightGray/50">
            (Compared to Previous Day)
          </p>
          <div className="flex justify-between flex-col xl:flex-row">
            <p className="text-[45px]">
              <CountUp
                start={0}
                end={1650}
                decimals={0} 
                duration={1.5} 
                prefix="₹"
              />
            </p>
            <div className="flex items-center">
              <div className="flex items-center text-green bg-green/20 p-[3px] px-[6px] rounded-sm">
                <FaCaretUp className="text-[20px] mr-[5px]" />
                <p>₹450</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-darkerBlue p-[20px] rounded-lg mb-[20px]">
          <p className="text-[22px]">Orders Placed Today</p>
          <p className="mb-[20px] text-[14px] text-lightGray/50">
            (Compared to Previous Day)
          </p>
          <div className="flex justify-between flex-col xl:flex-row">
            <p className="text-[45px]">
              <CountUp
                start={0}
                end={36}
                decimals={0} 
                duration={2} 
              />
            </p>
            <div className="flex items-center">
              <div className="flex items-center text-red bg-red/20 p-[3px] px-[6px] rounded-sm">
                <FaCaretDown className="text-[20px] mr-[5px]" />
                <p>3 Orders</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden xl:block bg-darkerBlue p-[20px] rounded-lg mb-[20px]">
          <p className="mb-[20px] text-[24px]">Order Status</p>
          <DoughnutChart
            dougnutData={dougnutData}
            doughnutLabels={[
              'Processing',
              'In Transit',
              'Delivered',
              'Cancelled',
            ]}
          />
          <div className="mt-[10px]">
            <div className="flex items-center">
              <div className="w-[15px] h-[15px] bg-chartYellow rounded-full mr-[10px]"></div>
              <p>Processing - </p>
              <span className="ml-[5px] text-[18px] font-bold">
                {dougnutData[0]}
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-[15px] h-[15px] bg-chartBlue rounded-full mr-[10px]"></div>
              <p>In Transit - </p>
              <span className="ml-[5px] text-[18px] font-bold">
                {dougnutData[1]}
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-[15px] h-[15px] bg-chartGreen rounded-full mr-[10px]"></div>
              <p>Delivered - </p>
              <span className="ml-[5px] text-[18px] font-bold">
                {dougnutData[2]}
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-[15px] h-[15px] bg-chartRed rounded-full mr-[10px]"></div>
              <p>Cancelled - </p>
              <span className="ml-[5px] text-[18px] font-bold">
                {dougnutData[3]}
              </span>
            </div>
          </div>
        </div>

        <div className="hidden md:block bg-darkerBlue p-[20px] pb-[35px] rounded-lg mb-[5px]">
          <p className="text-[18px]">Average Order Value</p>
          <p className="text-lightGray/50 text-[14px]">
            (Comparing to Previous Week)
          </p>
          <p className="text-[60px]">₹360</p>

          <div className=" flex items-center">
            <div className="flex bg-green/20 items-center p-[3px] px-[6px] rounded-sm">
              <FaCaretUp className="text-green text-[20px]" />
              <p className="ml-[5px] text-green text-[20px]">₹23</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
