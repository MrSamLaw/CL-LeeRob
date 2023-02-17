import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
  return (
    <section className="">
      <h1 className="font-bold text-3xl font-sans">CHONGLAND</h1>
    </section>
  );
}
