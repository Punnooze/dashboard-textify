'use client';
import React, { useEffect, useState } from 'react';
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

  // Determine colors based on dark mode
  const salesBackgroundColor = isDarkMode
    ? 'rgba(255, 159, 64, 0.6)' // Orange for dark mode
    : 'rgba(54, 162, 235, 0.6)'; // Blue for light mode
  const salesBorderColor = isDarkMode
    ? 'rgba(255, 159, 64, 1)' // Dark mode border color
    : 'rgba(54, 162, 235, 1)'; // Light mode border color

  const profitBackgroundColor = isDarkMode
    ? 'rgba(153, 102, 255, 0.6)' // Purple for dark mode
    : 'rgba(75, 192, 192, 0.6)'; // Teal for light mode
  const profitBorderColor = isDarkMode
    ? 'rgba(153, 102, 255, 1)' // Dark mode border color
    : 'rgba(75, 192, 192, 1)'; // Light mode border color

  // Map your data to the appropriate format for the chart
  const data = {
    labels: monthlyData.map((item) => item.month), // Months for the x-axis
    datasets: [
      {
        label: 'Sales',
        data: monthlyData.map((item) => item.sales), // Sales data
        backgroundColor: salesBackgroundColor, // Color for sales bars
        borderColor: salesBorderColor,
        borderWidth: 2, // Increase the border width
        hoverBorderWidth: 3, // Thicker border on hover
      },
      {
        label: 'Profit',
        data: monthlyData.map((item) => item.profit), // Profit data
        backgroundColor: profitBackgroundColor, // Color for profit bars
        borderColor: profitBorderColor,
        borderWidth: 2, // Increase the border width
        hoverBorderWidth: 3, // Thicker border on hover
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const, // Legend on the top
        labels: {
          color: isDarkMode ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)', // Change legend text color
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
          text: 'Sales and Profit',
          color: isDarkMode ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)', // Y-axis title color
        },
        ticks: {
          color: isDarkMode ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)', // Y-axis labels text color
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
