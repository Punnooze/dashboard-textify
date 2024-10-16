'use client';
import ActivityTable from '@/components/ActivityTable';
import { PiDotsThreeBold } from 'react-icons/pi';
import { userActivity } from '../../utils/data';
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
  accountCreationDate: string;
  status: string;
}

export default function Page() {
  const [userId, setUserId] = useState<string | null>(null);

  const scrollToDiv = () => {
    const element = document.getElementById('activityTable');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-bgLightBlue dark:bg-bgLightGrey shadow-md  p-[20px] rounded-xl grid grid-cols-4 gap-[20px]">
      <div className="col-span-4 lg:col-span-3 ">
        <p id="activityTable" className="text-[36px] mb-[20px]">
          User Profiles
        </p>
        <div className="bg-darkerBlue dark:bg-darkerGrey shadow-md p-[20px] rounded-xl ">
          <div className="flex justify-between items-center">
            <p className="text-[22px] mb-[20px]">Recent Activity Logs</p>
            <div>
              <div className="flex items-center  border-textGrey border-b-[1px] mb-[20px] pl-[10px]">
                <IoSearchSharp className="text-[20px]" />
                <input
                  value={userId || ''}
                  placeholder="User ID"
                  onChange={(e) => setUserId(e.target.value)}
                  className="bg-darkerBlue dark:bg-darkerGrey px-4 py-2 focus:outline-none focus:ring-0 w-[150px] pl-[20px]"
                />
              </div>
            </div>
          </div>

          <ActivityTable data={userActivity} selectedId={userId} />
        </div>
      </div>
      <div className="flex flex-col gap-[20px] col-span-2 lg:col-span-1">
        <div className="hidden lg:block bg-darkerBlue dark:bg-darkerGrey shadow-md p-[20px] rounded-xl">
          <p className="text-[22px] mb-[10px]">Active Customers</p>
          <CountUp
            start={0}
            end={159}
            duration={1.5}
            className="text-[31px] text-green dark:text-greenLight"
          />
        </div>
        <div className="bg-darkerBlue dark:bg-darkerGrey shadow-md p-[20px] rounded-xl">
          <p className="col-span-2 md:col-span-1 text-[22px] mb-[10px]">
            User Engagement
          </p>
          <PieChart
            pieLabels={['New', 'Returning', 'Inactive']}
            pieData={[10, 5, 9]}
          />
          <div className="mt-[20px]">
            <div className="flex items-center">
              <div className="w-[15px] h-[15px] rounded-full bg-chartYellow mr-[10px]"></div>
              <p className="text-[14px] md:text-[16px]">
                New Users - <span className="font-bold">10</span>
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-[15px] h-[15px] rounded-full bg-chartBlue mr-[10px]"></div>
              <p className="text-[13px] md:text-[16px]">
                Returning Users - <span className="font-bold">5</span>
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-[15px] h-[15px] rounded-full bg-chartGreen mr-[10px]"></div>
              <p className="text-[14px] md:text-[16px]">
                Inactive Users - <span className="font-bold">9</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-darkerBlue dark:bg-darkerGrey shadow-md p-[20px] rounded-xl flex flex-col col-span-2 lg:col-span-1">
        <p className="mb-[20px] text-[16] lg:text-[22px]">
          Active vs Inactive Users
        </p>
        <div className="mb-[20px]">
          <PieChart pieLabels={['Active', 'Inactive']} pieData={[15, 9]} />
        </div>

        <div className="">
          <div className="flex items-center ">
            <div className="h-[15px] w-[15px] rounded-full bg-chartYellow mr-[10px]"></div>
            <p className="text-[14px] md:text-[16px]">
              Active Users - <span>15</span>
            </p>
          </div>
          <div className="flex items-center ">
            <div className="h-[15px] w-[15px] rounded-full bg-chartBlue mr-[10px]"></div>
            <p className="text-[14px] md:text-[16px]">
              Inactive Users - <span>9</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-4 lg:col-span-3 bg-darkerBlue dark:bg-darkerGrey shadow-md p-[20px] rounded-xl ">
        <p className="text-[22px] mb-[20px] ">User Details</p>
        <div className="overflow-x-auto rounded-xl rounded-r-none border-textGrey border dark:border-darkerBlue overflow-y-auto h-[350px] text-[12px] md:text-[14px] lg:text-[16px]">
          <table className="min-w-full border border-textGrey dark:border-darkerBlue">
            <thead className="bg-chartBlue/50  dark:bg-bgLightGrey">
              <tr>
                <th className="py-2 px-4 border-l border-textGrey  text-left bg-chartBlue/50  dark:bg-darkerBlue text-[14px] text-textGrey dark:text-textGrey rounded-l-xl rounded-b-none">
                  User ID
                </th>
                <th className="py-2 px-4 border-l border-textGrey  text-left bg-chartBlue/50  dark:bg-darkerBlue text-[14px] text-textGrey dark:text-textGrey">
                  User Name
                </th>
                <th className="py-2 px-4 border-l border-textGrey  text-left bg-chartBlue/50  dark:bg-darkerBlue text-[14px] text-textGrey dark:text-textGrey">
                  Email
                </th>
                <th className="py-2 px-4 border-l border-textGrey  text-left bg-chartBlue/50  dark:bg-darkerBlue text-[14px] text-textGrey dark:text-textGrey">
                  Account Creation
                </th>
                <th className="py-2 px-4 border-l border-textGrey  text-left bg-chartBlue/50  dark:bg-darkerBlue text-[14px] text-textGrey dark:text-textGrey">
                  Status
                </th>
                <th className="py-2 px-4 border-l border-textGrey  text-left bg-chartBlue/50  dark:bg-darkerBlue text-[14px] text-textGrey dark:text-textGrey"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: User, index: number) => (
                <tr
                  key={index}
                  className="hover:bg-chartBlue/20 dark:hover:bg-darkerBlue/20 "
                >
                  <td className="py-2 px-4 border border-textGrey dark:border-darkerBlue ">
                    {user.userId}
                  </td>
                  <td className="py-2 px-4 border border-textGrey dark:border-darkerBlue ">
                    {user.userName}
                  </td>
                  <td className="py-2 px-4 border border-textGrey dark:border-darkerBlue ">
                    {user.email}
                  </td>
                  <td className="py-2 px-4 border border-textGrey dark:border-darkerBlue ">
                    {user.accountCreationDate}
                  </td>
                  <td
                    className={`py-2 px-4 border border-textGrey dark:border-darkerBlue   `}
                  >
                    <div className="flex items-center">
                      <div
                        className={`h-[10px] w-[10px] rounded-full ${
                          user.status === 'Active' ? 'bg-green' : 'bg-red'
                        } mr-[5px]`}
                      ></div>
                      {user.status}
                    </div>
                  </td>
                  <td className="py-2 px-4 border border-textGrey dark:border-darkerBlue ">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="bg-textGrey/20 p-[5px] rounded-full hover:bg-textGrey/10 dark:bg-textDarkGrey/20 dark:hover:bg-textDarkGrey/10">
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
