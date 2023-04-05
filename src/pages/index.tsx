import { AppSettings } from '@/constants/app'
import Head from 'next/head'
import HomePage from './home'

export default function Home() {
  return (
    <>
      <Head>
        <title>{AppSettings.title}</title>
        <meta name="description" content={AppSettings.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  )
}
