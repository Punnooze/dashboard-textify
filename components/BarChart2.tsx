'use client';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
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
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  const data2 = {
    labels: productData.map((item) => item.month),
    datasets: [
      {
        label: 'Oversized T-shirt Sales',
        data: productData.map((item) => item.oversizedTshirt.profit),
        borderColor: isDarkMode
          ? 'rgba(255, 159, 64, 1)'
          : 'rgba(75, 192, 192, 1)',
        backgroundColor: isDarkMode
          ? 'rgba(255, 159, 64, 0.6)'
          : 'rgba(75, 192, 192, 0.6)',
        borderWidth: 2,
      },
      {
        label: 'Shirt Sales',
        data: productData.map((item) => item.shirt.profit),
        borderColor: isDarkMode
          ? 'rgba(255, 206, 86, 1)'
          : 'rgba(54, 162, 235, 1)',
        backgroundColor: isDarkMode
          ? 'rgba(255, 206, 86, 0.6)'
          : 'rgba(54, 162, 235, 0.6)',
        borderWidth: 2, 
      },
      {
        label: 'Pants Sales',
        data: productData.map((item) => item.pants.profit),
        borderColor: isDarkMode
          ? 'rgba(75, 192, 192, 1)'
          : 'rgba(255, 99, 132, 1)',
        backgroundColor: isDarkMode
          ? 'rgba(75, 192, 192, 0.6)'
          : 'rgba(255, 99, 132, 0.6)',
        borderWidth: 2, 
      },
      {
        label: 'Hoodies Sales',
        data: productData.map((item) => item.hoodies.profit),
        borderColor: isDarkMode
          ? 'rgba(153, 102, 255, 1)'
          : 'rgba(255, 159, 64, 1)',
        backgroundColor: isDarkMode
          ? 'rgba(153, 102, 255, 0.6)'
          : 'rgba(255, 159, 64, 0.6)',
        borderWidth: 2, 
      },
    ],
  };

  const optionsBar = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: isDarkMode ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)',
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: isDarkMode ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Sales and Profit',
          color: isDarkMode ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)',
        },
        ticks: {
          color: isDarkMode ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)',
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
