'use client';
import DoughnutChart from '@/components/DoughnutChart';
import ActivityTable from '@/components/ActivityTable';
import { PiDotsThreeBold } from 'react-icons/pi';
// import UsersTable from '@/components/UsersTable';
import { users } from '../../utils/data';
import { IoSearchSharp } from 'react-icons/io5';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import CountUp from 'react-countup';
import PieChart from '@/components/PieChart';

interface User {
  userId: string;
  userName: string;
  email: string;
  accountCreationDate: string; // Updated field
  status: string;
}

export default function page() {
  const [userId, setUserId] = useState<string | null>(null);

  const scrollToDiv = () => {
    const element = document.getElementById('activityTable');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-bgLightBlue p-[20px] rounded-xl grid grid-cols-4 gap-[20px]">
      <div className="col-span-3 ">
        <p id="activityTable" className="text-[36px] mb-[20px]">
          User Profiles
        </p>
        <div className="bg-darkerBlue p-[20px] rounded-xl ">
          <div className="flex justify-between items-center">
            <p className="text-[22px] mb-[20px]">Recent Activity Logs</p>
            <div>
              <div className="flex items-center  border-textGrey border-b-[1px] mb-[20px] pl-[10px]">
                <IoSearchSharp className="text-[20px]" />
                <input
                  value={userId || ''}
                  placeholder="User ID"
                  onChange={(e) => setUserId(e.target.value)}
                  className="bg-darkerBlue px-4 py-2 focus:outline-none focus:ring-0 w-[150px] pl-[20px]"
                />
              </div>
            </div>
          </div>

          <ActivityTable selectedId={userId} />
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <div className="bg-darkerBlue p-[20px] rounded-xl">
          <p className="text-[22px] mb-[10px]">Active Customers</p>
          <CountUp
            start={0}
            end={159}
            duration={1.5}
            className="text-[31px] text-chartGreen"
          />
        </div>
        <div className="bg-darkerBlue p-[20px] rounded-xl">
          <p className="text-[22px] mb-[10px]">User Engagement</p>
          <PieChart
            pieLabels={['New', 'Returning', 'Inactive']}
            pieData={[10, 5, 9]}
          />
          <div className="mt-[20px]">
            <div className="flex items-center">
              <div className="w-[15px] h-[15px] rounded-full bg-chartYellow mr-[10px]"></div>
              <p>
                New Users - <span className="font-bold">10</span>
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-[15px] h-[15px] rounded-full bg-chartBlue mr-[10px]"></div>
              <p>
                Returning Users - <span className="font-bold">5</span>
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-[15px] h-[15px] rounded-full bg-chartGreen mr-[10px]"></div>
              <p>
                Inactive Users - <span className="font-bold">9</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-darkerBlue p-[20px] rounded-xl flex flex-col ">
        <p className="mb-[20px] text-[22px]">Active vs Inactive Users</p>
        <div className="mb-[20px]">
          <DoughnutChart
            doughnutLabels={['Active', 'Inactive']}
            dougnutData={[18, 15]}
          />
        </div>

        <div className="">
          <div className="flex items-center ">
            <div className="h-[15px] w-[15px] rounded-full bg-chartYellow mr-[10px]"></div>
            <p>
              Active Users - <span>18</span>
            </p>
          </div>
          <div className="flex items-center ">
            <div className="h-[15px] w-[15px] rounded-full bg-chartBlue mr-[10px]"></div>
            <p>
              Inactive Users - <span>15</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-3 bg-darkerBlue p-[20px] rounded-xl ">
        <p className="text-[22px] mb-[20px] ">User Details</p>
        <div className="overflow-x-auto rounded-xl rounded-r-none border-textGrey border border-textGrey-textGrey overflow-y-auto h-[350px]">
          <table className="min-w-full  border border-textGrey-accentPurple">
            <thead className="bg-textGrey">
              <tr>
                <th className="py-2 px-4 border border-white text-left text-darkBlue">
                  User ID
                </th>
                <th className="py-2 px-4 border border-white text-left text-darkBlue">
                  User Name
                </th>
                <th className="py-2 px-4 border border-white text-left text-darkBlue">
                  Email
                </th>
                <th className="py-2 px-4 border border-white text-left text-darkBlue">
                  Account Creation
                </th>
                <th className="py-2 px-4 border border-white text-left text-darkBlue">
                  Status
                </th>
                <th className="py-2 px-4 border border-white text-left text-textGrey"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: User, index: number) => (
                <tr key={index} className="hover:bg-textGrey/10 ">
                  <td className="py-2 px-4 border border-textGrey">
                    {user.userId}
                  </td>
                  <td className="py-2 px-4 border border-textGrey">
                    {user.userName}
                  </td>
                  <td className="py-2 px-4 border border-textGrey">
                    {user.email}
                  </td>
                  <td className="py-2 px-4 border border-textGrey">
                    {user.accountCreationDate}
                  </td>
                  <td className={`py-2 px-4 border border-textGrey  `}>
                    <div className="flex items-center">
                      <div
                        className={`h-[10px] w-[10px] rounded-full ${
                          user.status === 'Active' ? 'bg-green' : 'bg-red'
                        } mr-[5px]`}
                      ></div>
                      {user.status}
                    </div>
                  </td>
                  <td className="py-2 px-4 border border-textGrey">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="bg-textGrey/20 p-[5px] rounded-full hover:bg-textGrey/10">
                        <PiDotsThreeBold className="cursor-pointer" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="">
                        <DropdownMenuLabel>User Details</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => {
                            scrollToDiv();
                            setUserId(user.userId);
                          }}
                        >
                          User Log
                        </DropdownMenuItem>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Delete User</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
