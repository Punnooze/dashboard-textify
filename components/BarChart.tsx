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
import { monthlyData } from '../utils/data';

// Register the necessary chart elements for a bar chart
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function BarChart() {
  // Your data in the form [{ sales, profit }]

  // Map your data to the appropriate format for the chart
  const data = {
    labels: monthlyData.map((item) => item.month), // Months for the x-axis
    datasets: [
      {
        label: 'Sales',
        data: monthlyData.map((item) => item.sales), // Sales data
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Color for sales bars
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Profit',
        data: monthlyData.map((item) => item.profit), // Profit data
        backgroundColor: 'rgba(153, 102, 255, 0.6)', // Color for profit bars
        borderColor: 'rgba(153, 102, 255, 1)',
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
        labels: {
          color: 'rgba(209, 213, 219, 1)', // Legend text color to rgba(209, 213, 219, 1)
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true, // Start x-axis at 0
        ticks: {
          color: 'rgba(209, 213, 219, 1)', // X-axis labels text color to rgba(209, 213, 219, 1)
        },
      },
      y: {
        beginAtZero: true, // Start y-axis at 0
        title: {
          display: true,
          text: 'Sales and Profit',
          color: 'rgba(209, 213, 219, 1)',
        },
        ticks: {
          color: 'rgba(209, 213, 219, 1)',
        },
      },
    },
  };

  return (
    <div className="p-[10px] h-[100%] w-[100%]">
      <Bar data={data} options={options} />
    </div>
  );
}
