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
  data: UserActivity[];
}

export default function ActivityTable({ selectedId, data }: SelectedProps) {
  return (
    <div className="overflow-x-auto border-textGrey dark:border-darkerBlue border rounded-xl rounded-r-none h-[400px] text-[12px] md:text-[14px] lg:text-[16px]">
      <table className="min-w-full">
        <thead className="bg-chartBlue/50 ">
          <tr>
            <th className="py-2 px-4 border-l border-textGrey  text-left bg-chartBlue/50 dark:bg-darkerBlue text-[14px] text-white dark:text-textGrey">
              User ID
            </th>
            <th className="py-2 px-4 border-l border-textGrey  text-left bg-chartBlue/50 dark:bg-darkerBlue text-[14px] text-white dark:text-textGrey">
              User Name
            </th>
            <th className="py-2 px-4 border-l border-textGrey  text-left bg-chartBlue/50 dark:bg-darkerBlue text-[14px] text-white dark:text-textGrey">
              Action
            </th>
            <th className="py-2 px-4 border-l border-textGrey  text-left bg-chartBlue/50 dark:bg-darkerBlue text-[14px] text-white dark:text-textGrey">
              Details
            </th>
            <th className="py-2 px-4 border-l border-textGrey  text-left bg-chartBlue/50 dark:bg-darkerBlue text-[14px] text-white dark:text-textGrey">
              Time
            </th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((activity: UserActivity) =>
              selectedId ? activity.userId === selectedId : true
            )
            .map((activity: UserActivity, index: number) => (
              <tr
                key={index}
                className="hover:bg-chartBlue/20 dark:hover:bg-darkerBlue/20 "
              >
                <td className="py-2 px-4 border border-textGrey dark:border-darkerBlue">
                  {activity.userId}
                </td>
                <td className="py-2 px-4 border border-textGrey dark:border-darkerBlue">
                  {activity.userName}
                </td>
                <td className="py-2 px-4 border border-textGrey dark:border-darkerBlue">
                  {activity.action}
                </td>
                <td className="py-2 px-4 border border-textGrey dark:border-darkerBlue">
                  {activity.details}
                </td>
                <td className="py-2 px-4 border border-textGrey dark:border-darkerBlue">
                  {activity.date}, {activity.time}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
