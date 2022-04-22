import '~/tailwind.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import '@fontsource/poppins/900.css'
import Head from 'next/head'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Novan Kuncoro</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
