'use client';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { dougnutData } from '@/utils/data';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutProps {
  dougnutData: number[];
  doughnutLabels: string[]; // Expecting an array of numbers
}

export default function DoughnutChart({
  dougnutData,
  doughnutLabels,
}: DoughnutProps) {
  const data = {
    labels: doughnutLabels,
    datasets: [
      {
        label: 'Poll',
        data: dougnutData,
        backgroundColor: [
          'rgba(255, 206, 86, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(255, 99, 132, 0.5)',
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
        // position: 'top' as const, // Fixes TypeScript error by asserting the literal type
      },
    },
    cutout: 70, // Use number instead of string for the cutout value
  };

  return (
    <div className="h-[200px] w-[300px]">
      <Doughnut data={data} options={options} />
    </div>
  );
}
