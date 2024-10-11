import { data } from '@/utils/data'; // Import your data here
import { DataTable } from '@/components/DataTable';
import { PiDotsThreeBold } from 'react-icons/pi';
import { columns } from '@/utils/columns';
import DoughnutChart from '@/components/DoughnutChart';
import BarChart from '@/components/BarChart';

export default function Home() {
  return (
    <div className=" flex flex-col lg:grid lg:grid-cols-4 bg-bgLightBlue rounded-xl overflow-x-clip">
      <div className=" p-[20px] lg:pr-[10px] col-span-3  ">
        <div className="w-full text-white mb-[20px]">
          <p className="text-[30px]">Dashboard</p>
          <p className="text-[12px]">view data</p>
        </div>

        <div className=" grid grid-cols-3 gap-4 h-[100px] mb-[20px]">
          <div className="bg-darkerBlue rounded-xl px-[20px] py-[10px]">
            <div className="flex justify-between items-center">
              <p>Monthly Revenue</p>
              <PiDotsThreeBold />
            </div>
            <div className="flex">
              <p>Text</p>
              <p>%</p>
            </div>
          </div>
          <div className="bg-darkerBlue rounded-xl px-[20px] py-[10px]">
            <div className="flex justify-between items-center">
              <p>New Customers</p>
              <PiDotsThreeBold />
            </div>
            <div className="flex">
              <p>Text</p>
              <p>%</p>
            </div>
          </div>
          <div className="bg-darkerBlue rounded-xl px-[20px] py-[10px]">
            <div className="flex justify-between items-center">
              <p>Orders</p>
              <PiDotsThreeBold />
            </div>
            <div className="flex">
              <p>Text</p>
              <p>%</p>
            </div>
          </div>
        </div>
        <div className="bg-darkerBlue flex items-center justify-center rounded-xl flex-col mb-[20px]">
          <p>Overview</p>
          <BarChart />
        </div>
        <div className="bg-darkerBlue p-[20px] rounded-xl">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
      <div className="p-[20px] lg:pl-[10px]">
        <div className="bg-darkerBlue p-[20px] rounded-lg mb-[20px]">
          <p className='mb-[20px] text-[24px]'>Order Status</p>
          <DoughnutChart />
          <div className='mt-[10px]'>
            <div className="flex items-center">
              <div className="w-[15px] h-[15px] bg-[#FF6384] rounded-full mr-[10px]"></div>
              <p>Placed</p>
            </div>
            <div className="flex items-center">
              <div className="w-[15px] h-[15px] bg-[#36A2EB] rounded-full mr-[10px]"></div>
              <p>In Transit</p>
            </div>
            <div className="flex items-center">
              <div className="w-[15px] h-[15px] bg-[#FFCE56] rounded-full mr-[10px]"></div>
              <p>Delivered</p>
            </div>
            <div className="flex items-center">
              <div className="w-[15px] h-[15px] bg-[#4BC0C0] rounded-full mr-[10px]"></div>
              <p>Cancelled</p>
            </div>
          </div>
        </div>
        <div className="bg-darkerBlue p-[20px] rounded-lg mb-[20px]">
          <p>Total Performance</p>
          <p>Profit</p>
          <p>Orders</p>
          <p>Customers</p>
        </div>
      </div>
    </div>
  );
}
