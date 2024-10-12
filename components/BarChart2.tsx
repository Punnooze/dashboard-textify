'use client';
import {  Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
} from 'chart.js';
import { productData } from '../utils/data';

// Register the necessary chart elements for a line chart
ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function BarChart2() {
  // Format the product performance data for the line chart

  const data2 = {
    labels: productData.map((item) => item.month), // Months for the x-axis
    datasets: [
      {
        label: 'Oversized T-shirt Sales',
        data: productData.map((item) => item.oversizedTshirt.profit), // Oversized T-shirt sales data
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        tension: 0, // Smooth the line
        fill: false,
      },
      {
        label: 'Shirt Sales',
        data: productData.map((item) => item.shirt.profit), // Shirt sales data
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0, // Smooth the line
        fill: false,
      },
      {
        label: 'Pants Sales',
        data: productData.map((item) => item.pants.profit), // Pants sales data
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        tension: 0, // Smooth the line
        fill: false,
      },
      {
        label: 'Hoodies Sales',
        data: productData.map((item) => item.hoodies.profit), // Hoodies sales data
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        tension: 0, // Smooth the line
        fill: false,
      },
    ],
  };

  const optionsBar = {
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
      <Bar data={data2} options={optionsBar} />
    </div>
  );
}
