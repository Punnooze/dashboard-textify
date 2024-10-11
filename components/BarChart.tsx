'use client';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Tooltip,
  Legend,
  LinearScale,
} from 'chart.js';

// Register the necessary chart elements for a bar chart
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function BarChart() {
  // Your data in the form [{ sales, profit }]
  const monthlyData = [
    { month: 'January', sales: 500, profit: 100 },
    { month: 'February', sales: 600, profit: 200 },
    { month: 'March', sales: 700, profit: 150 },
    { month: 'April', sales: 800, profit: 250 },
  ];

  // Map your data to the appropriate format for the chart
  const data = {
    labels: monthlyData.map((item) => item.month), // Months for the x-axis
    datasets: [
      {
        label: 'Sales',
        data: monthlyData.map((item) => item.sales), // Sales data
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color for sales bars
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Profit',
        data: monthlyData.map((item) => item.profit), // Profit data
        backgroundColor: 'rgba(255, 206, 86, 0.2)', // Color for profit bars
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const, // Legend on the right
      },
    },
    scales: {
      x: {
        beginAtZero: true, // Start x-axis at 0
      },
      y: {
        beginAtZero: true, // Start y-axis at 0
        title: {
          display: true,
          text: 'Amount ($)', // Label for the y-axis
        },
      },
    },
  };

  return (
    <div className="p-[10px] h-[400px] w-[600px]">
      <Bar data={data} options={options} />
    </div>
  );
}
