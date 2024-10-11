// data.tsx
import { Payment } from '@/utils/columns';

export const data: Payment[] = [
  {
    id: '927fb34a',
    userName: 'John Doe',
    email: 'john.doe@example.com',
    date: '2024-09-12',
    amount: 300,
    status: 'processing',
  },
  {
    id: '82fb9b2c',
    userName: 'Alice Brown',
    email: 'alice.brown@example.com',
    date: '2024-09-15',
    amount: 120,
    status: 'in transit',
  },
  {
    id: '17a8e7d1',
    userName: 'Mark Smith',
    email: 'mark.smith@example.com',
    date: '2024-09-18',
    amount: 450,
    status: 'delivered',
  },
  {
    id: '42db5c9f',
    userName: 'Jane Doe',
    email: 'jane.doe@example.com',
    date: '2024-09-20',
    amount: 220,
    status: 'cancelled',
  },
  {
    id: '73f4d1ae',
    userName: 'Oliver Green',
    email: 'oliver.green@example.com',
    date: '2024-09-21',
    amount: 560,
    status: 'in transit',
  },
  {
    id: '90a1c2ed',
    userName: 'Charlie White',
    email: 'charlie.white@example.com',
    date: '2024-09-22',
    amount: 310,
    status: 'processing',
  },
  {
    id: '11b5f0cd',
    userName: 'Emma Davis',
    email: 'emma.davis@example.com',
    date: '2024-09-25',
    amount: 270,
    status: 'delivered',
  },
  {
    id: '54d7e4ba',
    userName: 'Daniel Moore',
    email: 'daniel.moore@example.com',
    date: '2024-09-27',
    amount: 400,
    status: 'processing',
  },
  {
    id: '81c9e6fb',
    userName: 'Lucas Miller',
    email: 'lucas.miller@example.com',
    date: '2024-09-28',
    amount: 390,
    status: 'cancelled',
  },
  {
    id: '10f3d4ba',
    userName: 'Sophia Johnson',
    email: 'sophia.johnson@example.com',
    date: '2024-09-30',
    amount: 130,
    status: 'in transit',
  },
];



export const dougnutData = [3, 12, 6, 1];

export const monthlyData = [
  { month: 'January', sales: 1494, profit: 195 },
  { month: 'February', sales: 1221, profit: 169 },
  { month: 'March', sales: 1705, profit: 399 },
  { month: 'April', sales: 802, profit: 251 },
  { month: 'May', sales: 589, profit: 217 },
  { month: 'June', sales: 1089, profit: 174 },
  { month: 'July', sales: 1693, profit: 488 },
  { month: 'August', sales: 1093, profit: 399 },
  { month: 'September', sales: 975, profit: 368 },
  { month: 'October', sales: 1928, profit: 193 },
  { month: 'November', sales: 1918, profit: 422 },
  { month: 'December', sales: 873, profit: 202 },
];
