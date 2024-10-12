'use client';
import BarChart2 from '@/components/BarChart2';
import DoughnutChart from '@/components/DoughnutChart';
import LineChart from '@/components/LineChart';
import { FaCaretDown } from 'react-icons/fa';
import CountUp from 'react-countup';
import Card from '@/components/Card';
import { products, stockData } from '../../utils/data';
import { columns2 } from '../../utils/columns';
import { DataTable } from '@/components/DataTable';

export default function page() {
  return (
    <div className="bg-bgLightBlue rounded-xl p-[20px]">
      <p className="text-[36px] mb-[20px]">Analytics</p>
      <div className=" mb-[20px] flex flex-col lg:grid  lg:grid-cols-4 gap-[20px]">
        <div className="md:hidden lg:block bg-darkerBlue rounded-xl p-[20px]">
          <p className="text-[22px] mb-[20px]">Age Group Distribution</p>
          <DoughnutChart
            dougnutData={[18, 15, 8, 2]}
            doughnutLabels={['16-25', '26-35', '36-45', '45+']}
          />
          <div>
            <div className="flex items-center mt-[20px]">
              <div className="bg-chartYellow h-[15px] w-[15px] rounded-full mr-[10px]"></div>
              <p>16 - 25 years </p>
              <p className="ml-[5px] font-bold">18</p>
            </div>
            <div className="flex items-center">
              <div className="bg-chartBlue h-[15px] w-[15px] rounded-full mr-[10px]"></div>
              <p>26 - 35 years </p>
              <p className="ml-[5px] font-bold">15</p>
            </div>
            <div className="flex items-center">
              <div className="bg-chartGreen h-[15px] w-[15px] rounded-full mr-[10px]"></div>
              <p>36 45 years </p>
              <p className="ml-[5px] font-bold">8</p>
            </div>
            <div className="flex items-center">
              <div className="bg-chartRed h-[15px] w-[15px] rounded-full mr-[10px]"></div>
              <p>45+ years </p>
              <p className="ml-[5px] font-bold">2</p>
            </div>
          </div>
        </div>
        <div className="hidden md:flex lg:hidden">
          <div className="bg-darkerBlue rounded-xl p-[20px]">
            <p className="text-[22px] mb-[20px]">Age Group Distribution</p>
            <DoughnutChart
              dougnutData={[18, 15, 8, 2]}
              doughnutLabels={['16-25', '26-35', '36-45', '45+']}
            />
            <div>
              <div className="flex items-center mt-[20px]">
                <div className="bg-chartYellow h-[15px] w-[15px] rounded-full mr-[10px]"></div>
                <p>16 - 25 years </p>
                <p className="ml-[5px] font-bold">18</p>
              </div>
              <div className="flex items-center">
                <div className="bg-chartBlue h-[15px] w-[15px] rounded-full mr-[10px]"></div>
                <p>26 - 35 years </p>
                <p className="ml-[5px] font-bold">15</p>
              </div>
              <div className="flex items-center">
                <div className="bg-chartGreen h-[15px] w-[15px] rounded-full mr-[10px]"></div>
                <p>36 45 years </p>
                <p className="ml-[5px] font-bold">8</p>
              </div>
              <div className="flex items-center">
                <div className="bg-chartGreen h-[15px] w-[15px] rounded-full mr-[10px]"></div>
                <p>45+ years </p>
                <p className="ml-[5px] font-bold">2</p>
              </div>
            </div>
          </div>
          <div className="ml-[20px] hidden md:block lg:hidden bg-darkerBlue rounded-xl p-[30px]">
            <p className="text-[24px] mb-[10px]">Sales Conversion Rate</p>
            <p className="text-[14px] text-lightGray ">
              (Amount of visitors who became customers)
            </p>

            <p className="text-[90px] md:text-[70px] xl:text-[90px] text-red">
              <CountUp
                start={0.0}
                end={3.6}
                decimals={1} // To have one decimal place
                duration={2} // Duration of the count-up animation (in seconds)
                suffix="%"
              />
            </p>

            <div className="flex">
              <div className="flex px-[5px] items-center bg-red/25 rounded-md text-red">
                <FaCaretDown />
                <p className="text-[14px]">28%</p>
              </div>
              <p className="text-[14px] ml-[5px]">
                lesser conversion than last month
              </p>
            </div>
          </div>
        </div>
        <div className="bg-darkerBlue rounded-xl md:col-span-3 flex flex-col justify-between p-[20px]">
          <p className="text-[22px] mb-[20px]">Sales of Each Category</p>
          <div className="h-full">
            <LineChart />
          </div>
        </div>

        <div className="h-[400px] bg-darkerBlue rounded-xl p-[20px] flex flex-col justify-between md:col-span-3">
          <p className="text-[22px]">Profit from Each Category of products</p>
          <div className="h-[300px] md:h-full">
            <BarChart2 />
          </div>
        </div>

        <div className="md:hidden lg:block bg-darkerBlue rounded-xl p-[30px]">
          <p className="text-[24px] mb-[10px]">Sales Conversion Rate</p>
          <p className="text-[14px] md:text-[12px] lg:text-[14px] text-lightGray ">
            (Amount of visitors who became customers)
          </p>

          <p className="text-[90px] md:text-[60px] xl:text-[90px] text-red">
            <CountUp
              start={0.0}
              end={3.6}
              decimals={1} // To have one decimal place
              duration={2} // Duration of the count-up animation (in seconds)
              suffix="%"
            />
          </p>

          <div className="flex">
            <div className="flex px-[5px] items-center bg-red/25 rounded-md text-red">
              <FaCaretDown />
              <p className="text-[14px]">28%</p>
            </div>
            <p className="text-[14px] md:text-[12px] lg:text-[14px] ml-[5px]">
              lesser conversion than last month
            </p>
          </div>
        </div>

        <div className="hidden lg:grid col-span-1 gap-[20px]">
          <div className="bg-darkerBlue p-[20px] rounded-xl">
            <p className="text-[22px] mb-[40px]">Device Type</p>
            <div className="flex items-center mb-[20px]">
              <CountUp
                start={0}
                end={30}
                duration={1.5}
                suffix="%"
                className="text-[28px] mr-[10px] text-chartBlue"
              />
              <p>Mobile Devices</p>
            </div>
            <div className="flex items-center mb-[20px]">
              <CountUp
                start={0}
                end={15}
                duration={1.5}
                suffix="%"
                className="text-[28px] mr-[10px] text-chartYellow"
              />
              <p>Tablet Devices</p>
            </div>
            <div className="flex items-center mb-[20px]">
              <CountUp
                start={0}
                end={55}
                duration={1.5}
                suffix="%"
                className="text-[28px] mr-[10px] text-chartGreen"
              />
              <p>Desktop Devices</p>
            </div>
          </div>
          <div className="bg-darkerBlue p-[20px] rounded-xl">
            <p className="text-[22px] mb-[20px]">Abandoned Cart</p>
            <CountUp
              start={0.0}
              end={11.3}
              decimals={1}
              duration={1.5}
              suffix="%"
              className="text-[56px]"
            />
          </div>
        </div>
        <div className="md:col-span-4 lg:col-span-3 bg-darkerBlue p-[20px] rounded-xl">
          <p className="text-[22px] mb-[20px]">Products with Low Stock</p>
          <DataTable columns={columns2} data={stockData} />
        </div>

        <div className="col-span-4 grid grid-cols-4 gap-[20px]">
          <div className="bg-darkerBlue rounded-xl p-[20px] col-span-4">
            <p className="text-[22px] mb-[20px]">Top Selling Products</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 overflow-auto gap-[20px]">
              {products.map((item, index) => (
                <Card key={index} product={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
