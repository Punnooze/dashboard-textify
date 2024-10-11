import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';
import SideBar from '@/components/SideBar';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Front end task for Textify AI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} bg-darkerBlue overflow-x-hidden grid grid-cols-5`}
      >
        <div className="col-span-1">
          <SideBar />
        </div>
        <div className="col-span-4">{children}</div>
      </body>
    </html>
  );
}
