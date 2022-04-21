import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pagina Inicial</title>0
        <meta name="keywords" content="Roupas, Calçados, Boné" />
        <meta name="description" content="Encontre a melhor roupa para você" />
      </Head>
    <div className={styles.container}>
     <h1>Hello word Nextjs</h1>
    </div>
    </>
  )
}
