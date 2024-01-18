import { Inter } from 'next/font/google';
import './globals.css';
import StoreProvider from '@/context/store';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Middle Town',
  description: 'Find your computer',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Merriweather&family=Poppins:wght@300&display=swap'
          rel='stylesheet'
        />
      </head>
      <StoreProvider>
        <body className={`${inter.className} h-screen`}>{children}</body>
      </StoreProvider>
    </html>
  );
}
