import './globals.css';
import clsx from 'clsx';
import localFont from '@next/font/local';

const publicGothic = localFont({
  src: '../public/fonts/public_gothic_square-webfont.woff2',
  weight: '700',
  variable: '--font-pgs',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        publicGothic.variable
      )}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
