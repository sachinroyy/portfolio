import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import CursorGeist from '../components/CursorGeist';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SACHIN CHAUDHARY',
  description: 'i am a software engineer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CursorGeist />
        {children}
      </body>
    </html>
  );
}