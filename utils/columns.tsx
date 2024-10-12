'use client';

import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  userName: string; // Added userName property
  email: string;
  date: string; // Added date property
  amount: number;
  status: 'processing' | 'in transit' | 'delivered' | 'cancelled'; // Updated status options
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'id',
    header: 'Order ID',
  },
  {
    accessorKey: 'userName', // Changed from email to userName
    header: 'User Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
  },
  {
    accessorKey: 'date', // Added date column
    header: 'Date',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
];

// Define Product type that matches the table structure
export type Product = {
  id: string;
  productName: string;
  category: string;
  price: number;
  stockRemaining: number;
  stockStatus: string;
};

// Assuming columns2 is built on this type
export const columns2: ColumnDef<Product>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'productName',
    header: 'Product Name',
  },
  {
    accessorKey: 'category',
    header: 'Category',
  },
  {
    accessorKey: 'price',
    header: 'Price',
  },
  {
    accessorKey: 'stockRemaining',
    header: 'Stock Remaining',
  },
  {
    accessorKey: 'stockStatus',
    header: 'Stock Status',
  },
];
