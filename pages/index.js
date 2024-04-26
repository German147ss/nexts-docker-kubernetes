import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  var hola = process.env.NEXT_PUBLIC_ORDER_SERVICE_URL;
console.log(hola);
  return (
    <div>
      <p>El valor de mi NEXT_PUBLIC_ORDER_SERVICE_URL es: {hola}</p>
      {/* Más código aquí */}
    </div>
  );
}

