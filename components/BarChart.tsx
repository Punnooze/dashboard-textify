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

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function BarChart() {
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

  const salesBackgroundColor = isDarkMode
    ? 'rgba(255, 159, 64, 0.6)' 
    : 'rgba(54, 162, 235, 0.6)'; 
  const salesBorderColor = isDarkMode
    ? 'rgba(255, 159, 64, 1)' 
    : 'rgba(54, 162, 235, 1)'; 

  const profitBackgroundColor = isDarkMode
    ? 'rgba(153, 102, 255, 0.6)' 
    : 'rgba(75, 192, 192, 0.6)'; 
  const profitBorderColor = isDarkMode
    ? 'rgba(153, 102, 255, 1)'
    : 'rgba(75, 192, 192, 1)'; 
    
  const data = {
    labels: monthlyData.map((item) => item.month), 
    datasets: [
      {
        label: 'Sales',
        data: monthlyData.map((item) => item.sales), 
        backgroundColor: salesBackgroundColor,
        borderColor: salesBorderColor,
        borderWidth: 2, 
        hoverBorderWidth: 3, 
      },
      {
        label: 'Profit',
        data: monthlyData.map((item) => item.profit),
        backgroundColor: profitBackgroundColor,
        borderColor: profitBorderColor,
        borderWidth: 2,
        hoverBorderWidth: 3, 
      },
    ],
  };

  const options = {
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
      <Bar data={data} options={options} />
    </div>
  );
}
