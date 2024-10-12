'use client';
import { Line } from 'react-chartjs-2';
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

export default function LineChart() {
  // Format the product performance data for the line chart
  const data1 = {
    labels: productData.map((item) => item.month), // Months for the x-axis
    datasets: [
      {
        label: 'Oversized T-shirt Sales',
        data: productData.map((item) => item.oversizedTshirt.sales), // Oversized T-shirt sales data
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        tension: 0, // Smooth the line
        fill: false,
      },
      {
        label: 'Shirt Sales',
        data: productData.map((item) => item.shirt.sales), // Shirt sales data
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0, // Smooth the line
        fill: false,
      },
      {
        label: 'Pants Sales',
        data: productData.map((item) => item.pants.sales), // Pants sales data
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        tension: 0, // Smooth the line
        fill: false,
      },
      {
        label: 'Hoodies Sales',
        data: productData.map((item) => item.hoodies.sales), // Hoodies sales data
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        tension: 0, // Smooth the line
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const, // Legend at the top
        labels: {
          color: 'rgba(209, 213, 219, 1)', // Legend text color
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true, // Start x-axis at 0
        ticks: {
          color: 'rgba(209, 213, 219, 1)', // X-axis labels text color
        },
      },
      y: {
        beginAtZero: true, // Start y-axis at 0
        title: {
          display: true,
          text: 'Sales',
          color: 'rgba(209, 213, 219, 1)', // Y-axis title text color
        },
        ticks: {
          color: 'rgba(209, 213, 219, 1)', // Y-axis labels text color
        },
      },
    },
  };

  return (
    <div className="p-[10px] h-[100%] w-[100%]">
      <Line data={data1} options={options} />
    </div>
  );
}
