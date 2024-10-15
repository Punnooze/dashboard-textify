'use client';
import React, { useEffect, useState } from 'react';
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
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    // Initial check
    checkDarkMode();

    // Add an event listener to monitor class changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });

    // Cleanup on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  // Format the product performance data for the line chart
  const data1 = {
    labels: productData.map((item) => item.month), // Months for the x-axis
    datasets: [
      {
        label: 'Oversized T-shirt Sales',
        data: productData.map((item) => item.oversizedTshirt.sales), // Oversized T-shirt sales data
        borderColor: isDarkMode
          ? 'rgba(255, 159, 64, 1)'
          : 'rgba(54, 162, 235, 1)', // Dark mode orange, Light mode blue
        backgroundColor: isDarkMode
          ? 'rgba(255, 159, 64, 0.5)'
          : 'rgba(54, 162, 235, 0.5)',
        tension: 0,
        fill: false,
      },
      {
        label: 'Shirt Sales',
        data: productData.map((item) => item.shirt.sales), // Shirt sales data
        borderColor: isDarkMode
          ? 'rgba(255, 206, 86, 1)'
          : 'rgba(255, 99, 132, 1)', // Dark mode yellow, Light mode red
        backgroundColor: isDarkMode
          ? 'rgba(255, 206, 86, 0.5)'
          : 'rgba(255, 99, 132, 0.5)',
        tension: 0,
        fill: false,
      },
      {
        label: 'Pants Sales',
        data: productData.map((item) => item.pants.sales), // Pants sales data
        borderColor: isDarkMode
          ? 'rgba(75, 192, 192, 1)'
          : 'rgba(75, 192, 192, 1)', // Same teal for both modes
        backgroundColor: isDarkMode
          ? 'rgba(75, 192, 192, 0.5)'
          : 'rgba(75, 192, 192, 0.5)',
        tension: 0,
        fill: false,
      },
      {
        label: 'Hoodies Sales',
        data: productData.map((item) => item.hoodies.sales), // Hoodies sales data
        borderColor: isDarkMode
          ? 'rgba(153, 102, 255, 1)'
          : 'rgba(153, 102, 255, 1)', // Same purple for both modes
        backgroundColor: isDarkMode
          ? 'rgba(153, 102, 255, 0.5)'
          : 'rgba(153, 102, 255, 0.5)',
        tension: 0,
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
          color: isDarkMode ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)', // Legend text color
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true, // Start x-axis at 0
        ticks: {
          color: isDarkMode ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)', // X-axis labels text color
        },
      },
      y: {
        beginAtZero: true, // Start y-axis at 0
        title: {
          display: true,
          text: 'Sales',
          color: isDarkMode ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)', // Y-axis title text color
        },
        ticks: {
          color: isDarkMode ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)', // Y-axis labels text color
        },
      },
    },
  };

  return (
    <div className="h-full">
      <Line data={data1} options={options} />
    </div>
  );
}
