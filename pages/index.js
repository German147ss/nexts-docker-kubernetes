import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const publicApiUrl = process.env.NEXT_PUBLIC_API_URL;
  console.log(publicApiUrl);
  return (
    <div>
      <p>{publicApiUrl}</p>
    </div>
  );
}

