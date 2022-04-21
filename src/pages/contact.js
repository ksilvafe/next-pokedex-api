import Head from 'next/head'
import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Pagina de Contato</title>
      </Head>
      <h1>Pagina de Contato</h1>
        <Link href="/"><a>Voltar</a></Link>
    </>
  )
}