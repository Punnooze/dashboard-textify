import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';
import SideBar from '@/components/SideBar';
import NavBar from '@/components/NavBar';

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
        className={`${poppins.variable} bg-darkerBlue overflow-x-hidden flex flex-col md:grid md:grid-cols-5 h-[100vh] w-[100vw] `}
      >
        <div className="hidden md:block md:col-span-1">
          <SideBar />
        </div>
        <div className="md:hidden">
          <NavBar />
        </div>
        <div className="md:col-span-4 bg-bgDarkBlue text-textGrey p-[20px] overflow-y-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
