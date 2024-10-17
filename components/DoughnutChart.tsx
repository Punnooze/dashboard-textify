'use client';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutProps {
  dougnutData: number[];
  doughnutLabels: string[]; 
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
      },
    },
    cutout: 70, 
  };

  return (
    <div className="">
      <Doughnut data={data} options={options} />
    </div>
  );
}
