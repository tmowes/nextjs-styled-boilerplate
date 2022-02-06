import { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyles } from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#171923" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TMoweS | Next.js Boilerplate</title>
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
        <link rel="icon" href="/favicon.ico" type="image/ico" />
        <link rel="shortcut icon" href="/ico-512.png" type="image/png" />
        <link rel="apple-touch-icon" href="/ico-192.png" type="image/png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
