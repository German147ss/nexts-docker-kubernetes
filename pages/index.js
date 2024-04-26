import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { unstable_noStore as noStore } from 'next/cache';
 
export default function Home() {
  noStore(); // Opt-into dynamic rendering

  const publicApiUrl = process.env.NEXT_PUBLIC_API_URL;
  console.log(publicApiUrl);
  return (
    <div>
      <p>{publicApiUrl}</p>
    </div>
  );
}

