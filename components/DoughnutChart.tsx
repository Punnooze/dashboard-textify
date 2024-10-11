'use client';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
  const data = {
    labels: ['Placed', 'In Transit', 'Delivered', 'Cancelled'],
    datasets: [
      {
        label: 'Poll',
        data: [3, 6, 4, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
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
