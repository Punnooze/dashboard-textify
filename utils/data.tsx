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

export const productData = [
  {
    month: 'January',
    oversizedTshirt: { sales: 1200, profit: 350 },
    shirt: { sales: 950, profit: 180 },
    pants: { sales: 700, profit: 250 },
    hoodies: { sales: 600, profit: 170 },
  },
  {
    month: 'February',
    oversizedTshirt: { sales: 1350, profit: 300 },
    shirt: { sales: 850, profit: 160 },
    pants: { sales: 900, profit: 210 },
    hoodies: { sales: 800, profit: 140 },
  },
  {
    month: 'March',
    oversizedTshirt: { sales: 1550, profit: 450 },
    shirt: { sales: 1150, profit: 230 },
    pants: { sales: 950, profit: 310 },
    hoodies: { sales: 850, profit: 200 },
  },
  {
    month: 'April',
    oversizedTshirt: { sales: 950, profit: 180 },
    shirt: { sales: 750, profit: 130 },
    pants: { sales: 850, profit: 240 },
    hoodies: { sales: 550, profit: 120 },
  },
  {
    month: 'May',
    oversizedTshirt: { sales: 1400, profit: 390 },
    shirt: { sales: 1000, profit: 210 },
    pants: { sales: 920, profit: 250 },
    hoodies: { sales: 670, profit: 160 },
  },
  {
    month: 'June',
    oversizedTshirt: { sales: 950, profit: 260 },
    shirt: { sales: 880, profit: 180 },
    pants: { sales: 750, profit: 200 },
    hoodies: { sales: 700, profit: 180 },
  },
  {
    month: 'July',
    oversizedTshirt: { sales: 1700, profit: 470 },
    shirt: { sales: 1200, profit: 290 },
    pants: { sales: 1100, profit: 370 },
    hoodies: { sales: 950, profit: 230 },
  },
  {
    month: 'August',
    oversizedTshirt: { sales: 1500, profit: 400 },
    shirt: { sales: 1100, profit: 260 },
    pants: { sales: 1020, profit: 340 },
    hoodies: { sales: 850, profit: 210 },
  },
  {
    month: 'September',
    oversizedTshirt: { sales: 1200, profit: 330 },
    shirt: { sales: 930, profit: 200 },
    pants: { sales: 950, profit: 290 },
    hoodies: { sales: 780, profit: 180 },
  },
  {
    month: 'October',
    oversizedTshirt: { sales: 1900, profit: 500 },
    shirt: { sales: 1350, profit: 320 },
    pants: { sales: 1250, profit: 380 },
    hoodies: { sales: 1000, profit: 280 },
  },
  {
    month: 'November',
    oversizedTshirt: { sales: 1600, profit: 430 },
    shirt: { sales: 1150, profit: 270 },
    pants: { sales: 1050, profit: 330 },
    hoodies: { sales: 900, profit: 220 },
  },
  {
    month: 'December',
    oversizedTshirt: { sales: 1400, profit: 390 },
    shirt: { sales: 980, profit: 240 },
    pants: { sales: 980, profit: 290 },
    hoodies: { sales: 780, profit: 190 },
  },
];

export const products = [
  {
    productName: 'Casual Oversized T-Shirt',
    category: 'Oversized T-Shirt',
    drop: 'Autumn Drop',
    price: 459,
    unitsSold: 1500,
    performance: 12,
  },
  {
    productName: 'Slim Fit Denim Jeans',
    category: 'Pants',
    drop: 'Halloween Drop',
    price: 699,
    unitsSold: 980,
    performance: -8,
  },
  {
    productName: 'Classic Cotton Hoodie',
    category: 'Hoodies',
    drop: 'Winter Drop',
    price: 1299,
    unitsSold: 720,
    performance: 5,
  },
  {
    productName: 'Formal Button-Up Shirt',
    category: 'Shirt',
    drop: 'Summer Collection',
    price: 499,
    unitsSold: 1200,
    performance: 9,
  },
  {
    productName: 'Casual Shirt',
    category: 'Shirt',
    drop: 'Summer Collection',
    price: 699,
    unitsSold: 1000,
    performance: -9,
  },
];

export const stockData = [
  {
    id: 'P009',
    productName: 'Basic Oversized T-Shirt',
    category: 'Oversized T-Shirt',
    price: 499,
    stockRemaining: 2,
    stockStatus: 'low',
  },
  {
    id: 'P003',
    productName: 'Relaxed Fit Pants',
    category: 'Pants',
    price: 1299,
    stockRemaining: 3,
    stockStatus: 'low',
  },
  {
    id: 'P001',
    productName: 'Classic Oversized T-Shirt',
    category: 'Oversized T-Shirt',
    price: 899,
    stockRemaining: 5,
    stockStatus: 'low',
  },
  {
    id: 'P006',
    productName: 'Formal Shirt',
    category: 'Shirt',
    price: 1099,
    stockRemaining: 6,
    stockStatus: 'low',
  },
  {
    id: 'P004',
    productName: 'Cozy Hoodie',
    category: 'Hoodies',
    price: 1599,
    stockRemaining: 8,
    stockStatus: 'low',
  },
  {
    id: 'P010',
    productName: 'Denim Pants',
    category: 'Pants',
    price: 1499,
    stockRemaining: 10,
    stockStatus: 'medium',
  },
  {
    id: 'P002',
    productName: 'Slim Fit Shirt',
    category: 'Shirt',
    price: 1299,
    stockRemaining: 12,
    stockStatus: 'medium',
  },
  {
    id: 'P007',
    productName: 'Casual Chino Pants',
    category: 'Pants',
    price: 1599,
    stockRemaining: 15,
    stockStatus: 'medium',
  },
  {
    id: 'P005',
    productName: 'Vintage Oversized T-Shirt',
    category: 'Oversized T-Shirt',
    price: 1199,
    stockRemaining: 18,
    stockStatus: 'medium',
  },
  {
    id: 'P008',
    productName: 'Graphic Hoodie',
    category: 'Hoodies',
    price: 1499,
    stockRemaining: 20,
    stockStatus: 'high',
  },
];

export const userActivity = [
  {
    date: '2024-10-01',
    time: '10:30 AM',
    userId: '987654321',
    userName: 'John Doe',
    action: 'Order Placed',
    details: 'Order ID: #123456, $45.00',
  },
  {
    date: '2024-10-01',
    time: '09:15 AM',
    userId: '123456789',
    userName: 'Jane Smith',
    action: 'Product Viewed',
    details: '"Wireless Headphones"',
  },
  {
    date: '2024-09-28',
    time: '08:45 PM',
    userId: '987654321',
    userName: 'John Doe',
    action: 'Account Updated',
    details: 'Changed email address',
  },
  {
    date: '2024-09-25',
    time: '05:20 PM',
    userId: '234567890',
    userName: 'Mark Johnson',
    action: 'Product Added to Cart',
    details: '"Smartphone Case"',
  },
  {
    date: '2024-09-20',
    time: '11:50 AM',
    userId: '345678901',
    userName: 'Emily Brown',
    action: 'Order Canceled',
    details: 'Order ID: #123123',
  },
  {
    date: '2024-09-15',
    time: '04:00 PM',
    userId: '123456789',
    userName: 'Jane Smith',
    action: 'Login',
    details: 'Successful login',
  },
  {
    date: '2024-09-10',
    time: '02:30 PM',
    userId: '234567890',
    userName: 'Mark Johnson',
    action: 'Wishlist Updated',
    details: 'Added "Gaming Laptop"',
  },
  {
    date: '2024-09-01',
    time: '01:15 PM',
    userId: '987654321',
    userName: 'John Doe',
    action: 'Product Reviewed',
    details: 'Reviewed "Smart TV"',
  },
  {
    date: '2024-08-30',
    time: '03:45 PM',
    userId: '345678901',
    userName: 'Emily Brown',
    action: 'Product Viewed',
    details: '"Bluetooth Speaker"',
  },
  {
    date: '2024-08-28',
    time: '10:00 AM',
    userId: '123456789',
    userName: 'Jane Smith',
    action: 'Order Placed',
    details: 'Order ID: #654321, $29.99',
  },
  {
    date: '2024-08-25',
    time: '12:15 PM',
    userId: '456789012',
    userName: 'Chris Martin',
    action: 'Product Added to Cart',
    details: '"4K Monitor"',
  },

];

export const users = [
  {
    userId: '987654321',
    userName: 'John Doe',
    email: 'john@example.com',
    accountCreationDate: '2023-01-15',
    status: 'Active',
  },
  {
    userId: '123456789',
    userName: 'Jane Smith',
    email: 'jane@example.com',
    accountCreationDate: '2023-02-20',
    status: 'Active',
  },
  {
    userId: '234567890',
    userName: 'Mark Johnson',
    email: 'mark@example.com',
    accountCreationDate: '2023-03-10',
    status: 'Inactive',
  },
  {
    userId: '345678901',
    userName: 'Emily Brown',
    email: 'emily@example.com',
    accountCreationDate: '2023-04-05',
    status: 'Active',
  },
  {
    userId: '456789012',
    userName: 'Chris Martin',
    email: 'chris@example.com',
    accountCreationDate: '2023-05-10',
    status: 'Active',
  },
  {
    userId: '567890123',
    userName: 'Samantha White',
    email: 'samantha@example.com',
    accountCreationDate: '2023-06-15',
    status: 'Active',
  },
  {
    userId: '678901234',
    userName: 'Michael Green',
    email: 'michael@example.com',
    accountCreationDate: '2023-07-20',
    status: 'Active',
  },
];
