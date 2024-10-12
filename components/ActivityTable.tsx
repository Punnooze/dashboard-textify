interface UserActivity {
  date: string;
  time: string;
  userId: string;
  userName: string;
  action: string;
  details: string;
}

interface SelectedProps {
  selectedId: string | null;
}
import { userActivity } from '../utils/data';

export default function ActivityTable({ selectedId }: SelectedProps) {
  return (
    <div className="overflow-x-auto border-textGrey border border-textGrey-gray-200 rounded-xl rounded-r-none h-[400px] ">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border border-white text-left text-darkBlue">
              User ID
            </th>
            <th className="py-2 px-4 border border-white text-left text-darkBlue">
              User Name
            </th>
            <th className="py-2 px-4 border border-white text-left text-darkBlue">
              Action
            </th>
            <th className="py-2 px-4 border border-textGrey text-left text-darkBlue">
              Details
            </th>
            <th className="py-2 px-4 border border-white text-left text-darkBlue">
              Time
            </th>
          </tr>
        </thead>
        <tbody>
          {userActivity
            .filter((activity: UserActivity) =>
              selectedId ? activity.userId === selectedId : true
            )
            .map((activity: UserActivity, index: number) => (
              <tr key={index} className="hover:bg-textGrey/10 ">
                <td className="py-2 px-4 border border-textGrey">
                  {activity.userId}
                </td>
                <td className="py-2 px-4 border border-textGrey">
                  {activity.userName}
                </td>
                <td className="py-2 px-4 border border-textGrey">
                  {activity.action}
                </td>
                <td className="py-2 px-4 border border-textGrey">
                  {activity.details}
                </td>
                <td className="py-2 px-4 border border-textGrey">
                  {activity.date}, {activity.time}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
