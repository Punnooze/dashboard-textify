import { users } from '../utils/data';

interface User {
  userId: string;
  userName: string;
  email: string;
  accountCreationDate: string; // Updated field
  status: string;
}

export default function UsersTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-darkerBlue border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b text-left text-gray-600">User ID</th>
            <th className="py-2 px-4 border-b text-left text-gray-600">User Name</th>
            <th className="py-2 px-4 border-b text-left text-gray-600">Email</th>
            <th className="py-2 px-4 border-b text-left text-gray-600">Account Creation Date</th> {/* Updated field */}
            <th className="py-2 px-4 border-b text-left text-gray-600">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User, index: number) => (
            <tr
              key={index}
              className={`hover:bg-gray-50 ${user.status === 'Inactive' ? 'text-red-600' : 'text-green-600'}`}
            >
              <td className="py-2 px-4 border-b">{user.userId}</td>
              <td className="py-2 px-4 border-b">{user.userName}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.accountCreationDate}</td> {/* Updated field */}
              <td className="py-2 px-4 border-b">{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
